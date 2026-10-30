// Escribe aquí las funciones auxiliares del ejercicio 43.
export function calcularSaldo(saldo, costoCompra) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let saldoRestante = saldo - costoCompra;

            if (saldo >= costoCompra) {
                resolve(saldoRestante);
            } else {
                reject(saldoRestante);
            }
        }, 1000);
    });
}