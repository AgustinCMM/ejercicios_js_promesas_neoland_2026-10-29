// Escribe aquí las funciones auxiliares del ejercicio 37.
export function evaluarStock(stock, pedido) {
    return new Promise((resolve, reject) => {
        if (stock < pedido) {
            let unidadesFaltantes = pedido - stock;
            reject(`Faltan ${unidadesFaltantes} unidades`);
        } else {
            resolve("Unidades dispolnibles");
        }
    });
}