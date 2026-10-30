// Escribe aquí las funciones auxiliares del ejercicio 38.
export function evaluarPalindromo(palabra) {
    return new Promise((resolve, reject) => {
        let palabraInvertida = palabra.split("").reverse().join("");

        if (palabra === palabraInvertida) {
            resolve("Es un palíndromo");
        } else {
            reject("No es un palíndromo");
        }
    });
}