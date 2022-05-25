const Person = require("./person.js");

class Contacts {
    constructor() {
        let per1 = new Person("Pedro", 70, 1.75, 2000, ["Cantar", "Nadar"]);
        let per2 = new Person("Anna", 60, 1.60, 2002, ["Series", "Cocinar"]);
        let per3 = new Person("Luis", 75, 1.72, 1995, ["Videojuegos", "Peliculas"]);
        this.persons = [per1, per2, per3];
    }

    printPersons() {
        for (let i = 0; i < this.persons.length; i++) {
            this.persons[i].printall();
        }
    }
}

module.exports = Contacts;