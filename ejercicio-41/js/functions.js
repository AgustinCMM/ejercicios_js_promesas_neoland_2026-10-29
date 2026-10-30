// Escribe aquí las funciones auxiliares del ejercicio 41.
export function saludarConDelay(mensaje, tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mensaje);
        }, tiempo);
    });
}