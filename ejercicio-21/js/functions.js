// Escribe aquí las funciones auxiliares del ejercicio 21.
export function verificarEdad(edad) {
    if (edad >= 18) {
        return Promise.resolve("Pase");
    } else {
        return Promise.reject("Fuera");
    }
}