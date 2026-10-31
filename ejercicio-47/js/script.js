// Escribe aquí la solución del ejercicio 47.
import { tirarDado } from "./functions.js";

let intentos = 3;

try {
    console.log(await tirarDado(intentos));
} catch (error) {
    console.error(error);
}