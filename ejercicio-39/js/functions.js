// Escribe aquí las funciones auxiliares del ejercicio 39.
export function dividir(dividendo, divisor) {
    return new Promise((resolve, reject) => {
        if (divisor != 0) {
            let resultado = dividendo / divisor;
            resolve(resultado);
        } else {
            reject("No se puede dividir por 0");
        }
    })
}