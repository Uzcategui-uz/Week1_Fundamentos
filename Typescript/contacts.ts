import { Person } from "./person";
export class Contacts {
    public people;

    constructor() {
        let per1 = new Person("Pedro", 19, "Calle 123");
        let per2 = new Person("Anna", 22, "Avenida Principal");
        let per3 = new Person("Luis", 24, "Calle 456");
        this.people = [per1, per2, per3];
    }

    printCalendar() {
        for (let i = 0; i < this.people.length; i++) {
            console.log(this.people[i].name + " - " + this.people[i].age + " - " + this.people[i].getAddress());
        }
    }
}