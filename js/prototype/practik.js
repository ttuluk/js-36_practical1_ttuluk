class Hero {

    constructor(name = 'user', xp = 0 ) {
        this.name = name;
        this.xp = xp;
    }
    // get name() {
    //   console.log(this.name);
    // }
    // set name(value) {
    //     this.name = value;
    // }
    gainXp(amount) {
        console.log(`${this.name} получает ${amount} опыта`);
        this.xp += amount;
    }
  
}

class Warrior extends Hero {
    constructor(name, xp, weapon) {
        super (name, xp);

        this.weapon = weapon;
    }
}

const Arnold = new Warrior('Arnold', 100, 'меч');
console.log(Arnold);
Arnold.gainXp(1000);
console.log(Arnold);
const Avalor = new Hero('Avalor', 500);
console.log(Avalor);
const Artur = new Hero('Artur', 300);
console.log(Artur);
 
class Race extends Warrior {
    constructor(name, xp, weapon, race) {
        super(name, xp, weapon);
        console.log(`${this.name} относиться к  ${race}`);
        
    }
    get race() {
        this.race = race;
    }
}
const Givi = new Race('Givi', 500, 'alebard','gnom')
console.log(Givi);
