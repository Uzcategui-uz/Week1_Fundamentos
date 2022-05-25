

class Carro {
    
    constructor(puertas, color, sillas, convertible){
        this.puertas = puertas;
        this.color = color;
        this.sillas = sillas;
        this.convertible = convertible
        this.espejos;
    }

    imprimirPuertas(){
        console.log(this.puertas);
    }

}

let carro1 = new Carro(2, 'Verde', 2, true);
carro1.espejos = 4;

let carro2 = new Carro(4, 'Rojo', 5, false );

// console.log(carro1);

carro1.imprimirPuertas();