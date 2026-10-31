// Escribe aquí las funciones auxiliares del ejercicio 49.
export function sumarCarrito(productos, impuesto) {
    return new Promise((resolve) => {
        let total = 0;
        productos.forEach(element => {
            total += element.precio;
        });
        
        console.log("Calculando carrito...");

        setTimeout(() => {
            if (impuesto) {
                console.log("Calculando impuesto...");
                setTimeout(() => {
                    let totalConImpuesto = total * 1.21;
                    resolve(totalConImpuesto);
                }, 500);
            } else {
                resolve(total);
            }
        }, 1000);
    });
}