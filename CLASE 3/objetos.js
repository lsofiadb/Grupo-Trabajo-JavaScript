// const spiderman = {
//     name: 'Peter Parker',
//     age: 20,
//     power: 'Spider-Sense',
//     greet: function() {
//         console.log(`Hi, I'm ${this.name}`);
//     }
// }

// console.log(spiderman.name);
// spiderman.greet();


/////////////////////////////
// const spiderman = {
//     name: 'Peter Parker',
//     age: 20,
//     power: 'Spider-Sense',
// }

// spiderman.greet = function() {
//     console.log(`Hi, I'm ${this.name}`);
// }

// const drStrange = {
//     name: 'Steven Strange',
//     age:    40,
//     power: 'Mind Reading',
// }

// drStrange.greet = function() {
//     console.log(`Hi, I'm ${this.name}`);
// }

// spiderman.greet();
// drStrange.greet();


/////////////////////////////

// function Hero(name, age, power) {
//     const hero = {
//         name: name,
//         age: age,
//         power: power,
//     }

//     hero.greet = function() {
//         console.log(`Hi, I'm ${this.name}`);
//     }

//     return hero;
// }

// const spiderman = Hero('Peter Parker', 20, 'Spider-Sense');
// const drStrange = Hero('Steven Strange', 40, 'Mind Reading');

// spiderman.greet();
// drStrange.greet();

////////////////////////////////

// const heroMethods = {
//     greet: function() {
//         console.log(`Hi, I'm ${this.name}`);
//     }
// }


// function Hero(name, age, power) {
//     const hero = Object.create(heroMethods);
//     hero.name = name;
//     hero.age = age;
//     hero.power = power;
//     return hero;
// }

// const spiderman = Hero('Peter Parker', 20, 'Spider-Sense');
// const drStrange = Hero('Steven Strange', 40, 'Mind Reading');

// spiderman.greet();
// drStrange.greet();


////////////////////////////////
//ASI LO HACE JS

// function Hero(name, age, power) {
//     const hero = Object.create(Hero.prototype);
//     hero.name = name;
//     hero.age = age;
//     hero.power = power;
//     return hero;
// }

// Hero.prototype.greet = function() {
//     console.log(`Hi, I'm ${this.name}`);
// }

// const spiderman = Hero('Peter Parker', 20, 'Spider-Sense');
// const drStrange = Hero('Steven Strange', 40, 'Mind Reading');

// console.log(spiderman);
// spiderman.greet();
// drStrange.greet();

////////////////////////////////

// function Hero(name, age, power) {
//     // const hero = Object.create(Hero.prototype);
//     this.name = name;
//     this.age = age;
//     this.power = power;
//     return this;
// }

// Hero.prototype.greet = function() {
//     console.log(`Hi, I'm ${this.name}`);
// }

// const spiderman = new Hero('Peter Parker', 20, 'Spider-Sense');
// const drStrange = new Hero('Steven Strange', 40, 'Mind Reading');

// console.log(spiderman);
// spiderman.greet();
// drStrange.greet();

// console.log(spiderman.toString())

////////////////////////////////

class Hero {
    constructor(name, age, power) {
        this.name = name;
        this.age = age;
        this.power = power;
        this.health = 100;
    }

    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }

    attack() {
        this.receiveDamage();
    }

    receiveDamage() {
        this.health -= 10;
        console.log(`${this.name} has ${this.health} health left`);
    }
}

const spiderman = new Hero('Peter Parker', 20, 'Spider-Sense');
console.log(spiderman);
spiderman.greet();
spiderman.attack();