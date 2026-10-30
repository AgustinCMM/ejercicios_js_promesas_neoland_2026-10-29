// Escribe aquí la solución del ejercicio 36.
import { evaluarEstado } from "./functions.js";

let estado = false;

try {
    console.log(await evaluarEstado(estado));
} catch (error) {
    console.error("Error:", error);
}