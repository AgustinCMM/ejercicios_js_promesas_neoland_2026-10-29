// Escribe aquí la solución del ejercicio 38.
import { evaluarPalindromo } from "./functions.js";

let palabra = "reconocer";

try {
    console.log(await evaluarPalindromo(palabra));
} catch (error) {
    console.error(error);
}