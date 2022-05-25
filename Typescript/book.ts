export class Book {
    private _title: string;
    private _nPages: number;
    private _isbn: string;
    private _editorial: string;
    private _author: string;

    constructor(title, nPAges, isbn, editorial, author) {
        this._title = title;
        this._nPages = nPAges;
        this._isbn = isbn;
        this._editorial = editorial;
        this._author = author;
    }

    public getTitle(): string {
        return this._title;
    }
    public setTitle(value: string) {
        this._title = value;
    }
    public getnPages(): number {
        return this._nPages;
    }
    public setnPages(value: number) {
        this._nPages = value;
    }
    public getIsbn(): string {
        return this._isbn;
    }
    public setIsbn(value: string) {
        this._isbn = value;
    }
    public getAuthor(): string {
        return this._author;
    }
    public setAuthor(value: string) {
        this._author = value;
    }
    public getEditorial(): string {
        return this._editorial;
    }
    public setEditorial(value: string) {
        this._editorial = value;
    }
    public toString(): string {
        return "Title - " + this._title + "\nNumber of Pages - " + this._nPages + "\nISBN - " + this._isbn + "\nAuthor - " + this._author + "\nEditorial - " + this._editorial;
    }
}