import { Library } from "./library";
import { Book } from "./book";

let b1 = new Book("Harry Potter 1", 500, "EDS345", "Alguna", "JK Rowling");
let b2 = new Book("Harry Potter 2", 500, "EDS345", "Alguna", "JK Rowling");
let b3 = new Book("Harry Potter 3", 500, "EDS345", "Alguna", "JK Rowling 2");

let lib = new Library([b1, b2, b3], "Calles 123", "Juan");

console.log(lib.toString());
console.log(lib.getNumberOfBooks());
console.log(lib.findByAuthor("JK Rowling"));



