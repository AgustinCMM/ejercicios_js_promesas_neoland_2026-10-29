// Escribe aquí las funciones auxiliares del ejercicio 34.
export function aplicarDescuento(precio, descuento) {
    return new Promise ((resolve, reject) => {
        if (descuento) {
            let precioDescuento = precio - (precio * 0.20);
            resolve(precioDescuento);
        } else {
            reject("No se aplica descuento");
        }        
    });
}