"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    /**
     * Getter $address
     * @return {string}
     */
    Library.prototype.getAddress = function () {
        return this.address;
    };
    /**
     * Getter $manager
     * @return {string}
     */
    Library.prototype.getManager = function () {
        return this.manager;
    };
    /**
     * Setter $address
     * @param {string} value
     */
    Library.prototype.setAddress = function (value) {
        this.address = value;
    };
    /**
     * Setter $manager
     * @param {string} value
     */
    Library.prototype.setManager = function (value) {
        this.manager = value;
    };
    Library.prototype.toString = function () {
        var text = "";
        for (var i = 0; i < this.books.length; i++) {
            text += "\nBook" + (i + 1) + ":\n";
            text += this.books[i].toString();
        }
        return text;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var list = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() == author) {
                list.push(this.books[i]);
            }
        }
        return list;
    };
    return Library;
}());
exports.Library = Library;
