"use strict";
exports.__esModule = true;
exports.Contacts = void 0;
var person_1 = require("./person");
var Contacts = /** @class */ (function () {
    function Contacts() {
        var per1 = new person_1.Person("Pedro", 19, "Calle 123");
        var per2 = new person_1.Person("Anna", 22, "Avenida Principal");
        var per3 = new person_1.Person("Luis", 24, "Calle 456");
        this.people = [per1, per2, per3];
    }
    Contacts.prototype.printCalendar = function () {
        for (var i = 0; i < this.people.length; i++) {
            console.log(this.people[i].name + " - " + this.people[i].age + " - " + this.people[i].getAddress());
        }
    };
    return Contacts;
}());
exports.Contacts = Contacts;
