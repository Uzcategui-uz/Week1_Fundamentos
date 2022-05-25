let producto = {
    precio: 2500,
    pais: 'China'
}
if (producto.pais == "ES") {
    if (producto.precio >= 2000) {
        producto.precio += producto.precio * 0.16

    } else {
        producto.precio += producto.precio * 0.10

    }

} else {
    if (producto.precio >= 2000) {
        producto.precio += producto.precio * 0.26

    } else {
        producto.precio += producto.precio * 0.20

    }
}
console.log(producto)
