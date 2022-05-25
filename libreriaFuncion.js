
function sumaVector1(v1, v2) {
    let v3 = Array();
    if (v1.length == v2.length) {
        v1.forEach((value, index) => {
        
            v3.push(value + v2[index]);
        });

        return v3;
    }

}
function sumaVector2(v1, v2) {
    if (v1.length == v2.length) {
        let v3 = v1.map((value, index) => {
            return value + v2[index];
        });

        return v3;
    }

}
function filtarPares(v) {
    return v.filter(value => {
        if (value % 2 == 0) {
            return value;
        }
    });
}
function sumatorio(v) {
    return v.reduce((suma, value) => {
        return suma + value;

    });
}
module.exports =  {sumaVector1, sumaVector2, filtarPares, sumatorio};


