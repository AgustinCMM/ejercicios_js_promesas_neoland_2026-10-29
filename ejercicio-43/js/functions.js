// Escribe aquí las funciones auxiliares del ejercicio 43.
export function calcularSaldo(saldo, costoCompra) {
    return new Promise((resolve, reject) => {
        let saldoRestante = saldo - costoCompra;
        if (saldo >= costoCompra) {
            resolve(`Saldo restante: ${saldoRestante}`);
        } else {
            reject(`Saldo restante: ${saldoRestante} (déficit)`);
        }
    })
}