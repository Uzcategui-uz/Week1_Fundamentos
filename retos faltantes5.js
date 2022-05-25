//reto funciones 3

function isPasswordSecure(password) {
    var reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return reg.test(password)
}
console.log(isPasswordSecure("124A") + " Contraseña insegura: 124A")
console.log(isPasswordSecure("Qwer1tg.") + " Contraseña segura: Qwer1tg.")
console.log("\n")

//reto final1
let listaLibros = [
    "Ready player one",
    "El nombre del viento",
    "El temor de un hombre sabio",
    "Cien años de soledad",
    "Origen"
]

function printBookName(listaLibros) {
    let librosOrdenados = sortBookName(listaLibros)
    for (let i = 0; i < librosOrdenados.length; i++) {
        const libro = librosOrdenados[i];
        if (i == 0) {
            console.log("%c" + libro + "[" + libro.length + "]", "font-weight: bold;")
        } else {
            console.log(libro + "[" + libro.length + "]")
        }


    }
}

function sortBookName(arr) {

    let done = false;
    while (done == false) {
        done = true;
        for (var i = 1; i < arr.length; i += 1) {
            if (arr[i - 1].length < arr[i].length) {
                done = false;
                var tmp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = tmp;
            }
        }
    }
    return arr
}
printBookName(listaLibros)
console.log("\n")

//Reto 2


function createMatrix(size = 10) {
    let mat = []

    for (var i = 0; i < size; i++) {
        mat[i] = []
        for (var j = 0; j < size; j++) {
            mat[i][j] = Math.floor(Math.random() * 50);
        }
    }

    return mat
}

let mat = createMatrix()
let mat2 = createMatrix()


function sumMatrixNumbers(mat) {
    var sum = 0;
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat[i].length; j++) {
            sum += mat[i][j]
        }
    }
    return sum
}
var twoMatrixSum = sumMatrixNumbers(mat)+sumMatrixNumbers(mat2)
console.log(twoMatrixSum)

function multiplyMatrix(mat,n) {
    var res = 0;
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat[i].length; j++) {
            res += (mat[i][j]*n)
        }
    }
    return res
}


let mat3 = createMatrix()
let multipliedResult = multiplyMatrix(mat3,2)
console.log(multipliedResult)

