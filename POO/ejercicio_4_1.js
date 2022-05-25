//ejercicio 1
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
console.log("------------------------------------------");
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
console.log("------------------------------------------");
for (let i = 0; i <= 10; i += 3) {
    if (i % 2 == 1) {
        console.log(i);
    }
}
console.log("------------------------------------------");
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
console.log("------------------------------------------");
i = 0;
while (i < 10) {
    console.log(i);
    i += 2;
}
console.log("------------------------------------------");
i = 0;
while (i < 10) {
    if (i % 2 == 1) {
        console.log(i);
    }
    i += 3;
}
console.log("------------------------------------------");
//ejercicio 4
let n = 5;
let fact = 1;
for (i = 2; i <= n; i++) {
    fact *= i;
}
console.log(fact);
console.log("------------------------------------------");
fact = 1;
i = 2;
while (i <= n) {
    fact *= i;
    i++;
}
console.log(fact);
console.log("------------------------------------------");
let numeros = [3, 5, 7, 8, 1];
i = 0;
while (i < numeros.length) {
    if (numeros[i] % 2 == 0) {
        console.log("El " + numeros[i] + " es multiplo de 2.");
        break;
    }
    i++;
}
console.log("------------------------------------------");
let sum = 0;
for (i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);
console.log("------------------------------------------");
let nombres = ["Juan", "Pedro", "Pepe", "Ana"];
for (i = 0; i < nombres.length; i++) {
    if (nombres[i] == "Pepe") {
        console.log(i);
        break;
    }
}
console.log("------------------------------------------");
let numeros1 = [];
let numeros2 = [];
for (i = 0; i < 100; i++) {
    numeros1.push(Math.floor(Math.random() * 21));
    numeros2.push(Math.floor(Math.random() * 21));
}
console.log(numeros1);
console.log(numeros2);
console.log("------------------------------------------");
sum = 0;
for (i = 0; i < 100; i++) {
    sum += numeros1[i] + numeros2[i];
}
console.log(sum);