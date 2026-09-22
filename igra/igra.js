// singleton
const storage = {
  units: [],
  add(u) { this.units.push(u); }
};

class Unit {
  constructor(name, hp, damage) {
    this.name = name;
    this.hp = hp;
    this.damage = damage;
    this._hp = hp; 
    this._damage = damage;
  }
  get isAlive() { return this._hp > 0; }
  hit(target) {
    target._hp -= this._damage;
    if (target._hp < 0) target._hp = 0;
    console.log(`${this.name} бьёт ${target.name} на ${this._damage}. У ${target.name}: ${target._hp} HP`);
  }
}

class Ork extends Unit {
  hit(target) { // полиморфизм
    const dmg = this._damage * 2; // орк бьёт x2
    target._hp = Math.max(0, target._hp - dmg);
    console.log(` ${this.name} жоска бьёт ${target.name} на ${dmg}. У ${target.name}: ${target._hp} HP`);
  }
}
class Gnome extends Unit {}
class Elf extends Unit {}
class Human extends Unit {}

function createUnit(type, name) {
  const types = { ork: Ork, gnome: Gnome, elf: Elf, human: Human };
  const unit = new types[type](name, 100, 20); // одинаковые статы
  storage.add(unit);
  return unit;
}

createUnit('ork', 'Орк');
createUnit('gnome', 'Гномик');
createUnit('elf', 'Ельфик');
createUnit('human', 'Артур');

// нападение
let alive = storage.units;

while (alive.length > 1) {
  // первый рандом персонаж
  const a = alive[0];
  const b = alive[1 + Math.floor(Math.random() * (alive.length - 1))];

  a.hit(b);

  if (!b.isAlive) {
    console.log(` ${b.name} Смерт`);
    alive = alive.filter(u => u.isAlive);
  }
}

console.log(`\n Победитель: ${alive[0].name}`);
