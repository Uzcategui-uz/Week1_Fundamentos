export class Person {
    private address
    public name
    public age
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    printName() {
        console.log(this.name);
    }
    yearOfBirth(currentYear) {
        return currentYear - this.age;
    }
    setAddress(address) {
        this.address = address;
    }
    getAddress() {
        return this.address;
    }
}