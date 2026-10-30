// Escribe aquí las funciones auxiliares del ejercicio 36.
export function evaluarEstado(estado) {
    return new Promise ((resolve, reject) => {
        if (!estado) {
            reject("Operación cancelada por el usuario");
        } else {
            resolve("Operación aceptada por el usuario");
        }
    });
}