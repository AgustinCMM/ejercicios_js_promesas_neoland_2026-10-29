// Escribe aquí las funciones auxiliares del ejercicio 41.
export function saludarConDelay(mensaje, tiempo) {
    return new Promise((resolve) => {
        setInterval(() => {
            resolve(mensaje);
        }, tiempo);
    });
}