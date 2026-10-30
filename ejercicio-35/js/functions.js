// Escribe aquí las funciones auxiliares del ejercicio 35.
export function sumarArreglo(numeros) {
    return new Promise ((resolve) => {
        let sumatoria = 0;
        numeros.forEach(element => {
            sumatoria += element;
        });

        resolve(sumatoria);
    })
}