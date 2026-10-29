// Escribe aquí las funciones auxiliares del ejercicio 15.
export function esperarUnSegundo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Tiempo terminado");
        }, 1000);
    });
}