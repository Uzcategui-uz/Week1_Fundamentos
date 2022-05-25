function calculadora(operacion, op1, op2=0) {
    if (operacion== "sum") {
        return op1+op2;
    }
    if (operacion== "subs") {
        return op1-op2;
    }
    if (operacion== "mult") {
        return op1*op2;
    }
    if (operacion== "div") {
        return op1/op2;
    }
}

console.log(calculadora("sum", 3,4));
console.log(calculadora("subs", 3,4));
console.log(calculadora("mult", 3));
console.log(calculadora("div", 3,4));

let calculadora1= (operacion, op1, op2=0)=>{
    if (operacion== "sum") {
        return op1+op2;
    }
    if (operacion== "subs") {
        return op1-op2;
    }
    if (operacion== "mult") {
        return op1*op2;
    }
    if (operacion== "div") {
        return op1/op2;
    }
};
console.log(calculadora1("sum", 3,4));
console.log(calculadora1("subs", 3,4));
console.log(calculadora1("mult", 3));
console.log(calculadora1("div", 3,4));


