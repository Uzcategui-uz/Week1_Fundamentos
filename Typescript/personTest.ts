import { Person } from "./person";

let p = new Person("Pedro", 19, "Calle 123");
p.printName();

console.log(p.yearOfBirth(2022));
p.setAddress("Calle 1234");
console.log(p.getAddress());

