"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var p = new person_1.Person("Pedro", 19, "Calle 123");
p.printName();
console.log(p.yearOfBirth(2022));
p.setAddress("Calle 1234");
console.log(p.getAddress());
