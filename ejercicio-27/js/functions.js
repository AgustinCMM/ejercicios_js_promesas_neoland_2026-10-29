// Escribe aquí las funciones auxiliares del ejercicio 27.
export function verificarPar(numero) {
    return new Promise((resolve, reject) => {
        if (numero % 2 !== 0) {
            reject(`El número ${numero} es impar`);
        } else {
            console.log("Analizando número...");
            setTimeout(() => {
                resolve(`El número ${numero} es par`);
            }, 1000);
        }
    });
}