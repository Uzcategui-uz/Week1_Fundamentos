function crearMatriz(k,v){
    let array = new Array(n);
    for(let i = 0; i < k; i++) {
        array[i] = new Array(m);
    for(let j = 0; j < v; j++) {
        array[i][j] = Math.round(Math.random()*51)
    }
        } return array
    } 
 
    let matriz1 = crearMatriz(10,10);
    let matriz2 = crearMatriz(10,10);
    let MatrisProducto = [];
  
    for(i = 0; i < matriz1.length; i++){
        let arr= [];
        for(j = 0; j < matriz1[i].length; j++){
        let resultado= matriz1[i][j] * matriz2[i][j];
        arr.push(resultado)
    } 
    MatrisProducto.push(arr)
}
    console.log(sumaMatriz)

