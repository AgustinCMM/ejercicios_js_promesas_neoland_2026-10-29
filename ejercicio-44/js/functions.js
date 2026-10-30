// Escribe aquí las funciones auxiliares del ejercicio 44.
export function evaluarArreglo(arreglo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i=0; i<arreglo.length; i++) {
                if (typeof arreglo[i] !== "number") {
                    reject(`Tipo de dato inválido detectado en la posición ${i}`);
                    return;
                }
            }
            resolve("Arreglo correcto");
        }, 1500);
    });
}