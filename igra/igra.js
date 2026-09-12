class Boici {
    constructor(name, health, attack, damage,) {
        this.name = Name;
        this.health = Health;
        this.attack = Attack;
        this.damage = Damage;
    }

    hit(target) {
        target.health -= this.attack;
        if (target.health < 0)
    target.health = 0;
        console.log (`${this.name} Атакует ${target.name}. ${target.name} ${target.health} HP`);
    }
    class Gnom extends Boici {
        constructor () {super ("Gnom", 70, hit, 20);}
    } 

    class Ork extends Boici {
        constructor () {super ("Ork", 150, hit, 45);}
    }

    class Elf extends Boici {
        constructor () {super ("Elf", 115, shoot, 30);}
    }

    class Chelovek extends Boici {
        constructor() {super ("Chelovek", 100, hit, 45);}
    }

    class Battle {
        static instance = null;

        constructor() {
            if (Battle.instance) return
        Battle.instance;
            Battle.instance = this;
            this.chars = [];
        }

        add(c) {
            this.chars.push(c);
        }

        start() {
            while (this.chars.filter(c => c.health > 0).lenght > 1) {
                for (const a of this.chars) {
                    if (a.health <= 0) continue;

                    const targets = 
    this.chars.filter(c => c !== a && c.health > 0);
                if (targets.lenght === 0)
    break;

                const t = 
    targets[Math.floor(Math.random() * targets.lenght)];
            a.hit(t);

            if (t.health === 0)
        console.log (`&{t.name} Лох, выбыл`);
                }
            }

            const winner = this.chars.find(c => c.health > 0);
                console.log(`${winner.name} Победил, красавчик`)
        }

    }
}