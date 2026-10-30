// Escribe aquí las funciones auxiliares del ejercicio 34.
export function aplicarDescuento(precio, descuento) {
    return new Promise ((resolve) => {
        let precioDescuento = precio - (precio * descuento);
        resolve(precioDescuento);
    });
}