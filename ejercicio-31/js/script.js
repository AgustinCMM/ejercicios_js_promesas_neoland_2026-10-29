// Escribe aquí la solución del ejercicio 31.
import { multiplicar } from "./functions.js";

let base = 5;
let multiplicador = 3;

try {
    const resultadoFinal = await multiplicar(base, multiplicador);
    console.log("Resultado:", resultadoFinal);
} catch (error) {
    console.error("Error:", error);
}