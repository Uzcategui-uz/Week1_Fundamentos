import { Vector } from "./vector";

let v1 = new Vector(10, 100);
let v2 = new Vector(10, 100);
v1.print();
v2.print();
console.log(v1.add(v2));
console.log(v1.subs(v2));
console.log(v1.mult(v2));
console.log(v1.multNumber(10));
