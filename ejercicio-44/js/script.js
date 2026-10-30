// Escribe aquí la solución del ejercicio 44.
import { evaluarArreglo } from "./functions.js";

let arreglo = [10, 20, "treinta", 40];

try {
    console.log(await evaluarArreglo(arreglo));
} catch (error) {
    console.error(error)
}