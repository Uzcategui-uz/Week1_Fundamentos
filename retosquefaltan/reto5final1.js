let micoleccion = ["Ready player one" , "El nombre del viento" , "El temor de un hombre sabio", "Cien años de soledad", "Origen"]

function libros(micoleccion) {

    let max = micoleccion[0].length;
    
    micoleccion.map(libro => max = Math.max(max, libro.length));
 
    let resultado = micoleccion.filter(libro => libro.length == max);
    return resultado;
  }

  let libro = libros(micoleccion)
 
  for(i = 0; i < micoleccion.length ; i++) {

    let numeroLetras = micoleccion[i].length;

        if(micoleccion[i] == libro) {
            
           let libroresultado= micoleccion[i] = libro
           
           let librolString = libroresultado.toString()
           
           console.log(librolString.bold() + " [" + numeroLetras + "]")
        }else{
            console.log(micoleccion[i]  + " [" + numeroLetras + "]" )

        }
    }