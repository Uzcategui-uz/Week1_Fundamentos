"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPAges, isbn, editorial, author) {
        this._title = title;
        this._nPages = nPAges;
        this._isbn = isbn;
        this._editorial = editorial;
        this._author = author;
    }
    Book.prototype.getTitle = function () {
        return this._title;
    };
    Book.prototype.setTitle = function (value) {
        this._title = value;
    };
    Book.prototype.getnPages = function () {
        return this._nPages;
    };
    Book.prototype.setnPages = function (value) {
        this._nPages = value;
    };
    Book.prototype.getIsbn = function () {
        return this._isbn;
    };
    Book.prototype.setIsbn = function (value) {
        this._isbn = value;
    };
    Book.prototype.getAuthor = function () {
        return this._author;
    };
    Book.prototype.setAuthor = function (value) {
        this._author = value;
    };
    Book.prototype.getEditorial = function () {
        return this._editorial;
    };
    Book.prototype.setEditorial = function (value) {
        this._editorial = value;
    };
    Book.prototype.toString = function () {
        return "Title - " + this._title + "\nNumber of Pages - " + this._nPages + "\nISBN - " + this._isbn + "\nAuthor - " + this._author + "\nEditorial - " + this._editorial;
    };
    return Book;
}());
exports.Book = Book;
