//antes que nada quiero decir que este ejercicio casi me hace llorar :D 

let listaLibros = ["Ready player one" , "El nombre del Viento" , "El temor de un hombre sabio", "Cien años de soledad", "Origen"]

function libroLargo(listaLibros) {
    //declaramos variable max para introducir dentro el valor de la longitud de la posicion 0 para usarla de valor comparativo inicial.
    let max = listaLibros[0].length;
    // usamos .map para que nos haga un bucle en el cual se recorran todos los elementos con el resultado de aplicar Math.max para comparar en cada iteración cual es el más largo
    listaLibros.map(libro => max = Math.max(max, libro.length));
    // después usamos filter sobre la nueva variable resultado para crear un array nuevo que cumpla con el condicional, filtrando los resultados cuya longitud sea igual a la variable antes
    //dada de max, de esta manera dejamos dentro del array solo el más largo
    let resultado = listaLibros.filter(libro => libro.length == max);
    return resultado;
  }
  //metemos la función de haber encontrado el nombre más largo
  let libroL = libroLargo(listaLibros)
  //hacemos un bucle for para recorrer el array de nombres de libros
  for(i = 0; i < listaLibros.length ; i++){
    //declaramos la variable para que nos cuente el número de letras
    let numeroLetras = listaLibros[i].length;
    //hacemos un condicional en el cual nos busque dentro de las iteraciones el que sea igual al valor dado por la función de arriba
        if(listaLibros[i] == libroL){
            //si es igual lo sustituye por el resultado de la función y lo guardamos en una variable
           let librolIgual= listaLibros[i] = libroL
           // pasamos el resultado de la función que era un array a string con toString() por que la bendita función de bold() solo funciona con strings (como no)
           let librolString = librolIgual.toString()
           //imprimimos en consola lo que nos manda el ejercicio aplicando el bold
           console.log(librolString.bold() + " [" + numeroLetras + "]")
        }else{
            console.log(listaLibros[i]  + " [" + numeroLetras + "]" )

        }
    }