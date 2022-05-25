class Person {

    constructor(name, weight, height, yearOfBirth, hobbies) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;
    }

    IMC() {
        return this.weight / (this.height * this.height);
    }

    edad(anyo) {
        return anyo - this.yearOfBirth;
    }

    printall() {
        console.log("Nombre - " + this.name);
        console.log("Peso - " + this.weight);
        console.log("Estatura - " + this.height);
        console.log("Año de nacimiento - " + this.yearOfBirth);
        console.log("IMC - " + this.IMC());
        console.log("Edad - " + this.edad(new Date().getFullYear()));
    }

    printHobbies() {
        for (let i = 0; i < this.hobbies.length; i++) {
            console.log(this.hobbies[i]);
        }
    }
}

module.exports = Person;