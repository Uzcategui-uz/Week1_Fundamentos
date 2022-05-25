import { Book } from "./book";

export class Library {
    private books;
    private address: string;
    private manager: string;
    constructor(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }

    /**
     * Getter $address
     * @return {string}
     */
    public getAddress(): string {
        return this.address;
    }

    /**
     * Getter $manager
     * @return {string}
     */
    public getManager(): string {
        return this.manager;
    }

    /**
     * Setter $address
     * @param {string} value
     */
    public setAddress(value: string) {
        this.address = value;
    }

    /**
     * Setter $manager
     * @param {string} value
     */
    public setManager(value: string) {
        this.manager = value;
    }

    public toString(): string {
        let text = "";
        for (let i = 0; i < this.books.length; i++) {
            text += "\nBook" + (i + 1) + ":\n"
            text += this.books[i].toString();
        }
        return text;
    }

    public getNumberOfBooks(): number {
        return this.books.length;
    }

    public findByAuthor(author: string): Book[] {
        let list = [];
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() == author) {
                list.push(this.books[i]);
            }
        }
        return list;
    }
}