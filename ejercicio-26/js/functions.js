// Escribe aquí las funciones auxiliares del ejercicio 26.
export function verificarArray(arreglo) {
    return new Promise((resolve, reject) => {
        if (arreglo.length < 3) {
            reject("El array tiene menos de 3 elementos");
        } else {
            const ultimoElemento = arreglo[arreglo.length - 1];
            resolve(ultimoElemento);
        }
    });
}