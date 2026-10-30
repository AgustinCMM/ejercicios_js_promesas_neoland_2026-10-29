// Escribe aquí las funciones auxiliares del ejercicio 37.
export function evaluarStock(stock, pedido) {
    return new Promise((resolve, reject) => {
        if (stock < pedido) {
            reject("Faltan 5 unidades");
        } else {
            resolve("Unidades dispolnibles");
        }
    });
}