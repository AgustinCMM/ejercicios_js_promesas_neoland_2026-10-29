// Escribe aquí la solución del ejercicio 35.
import { sumarArreglo } from "./functions.js";

let numeros = [1, 2, 3];

try {
    console.log(await sumarArreglo(numeros));
} catch (error) {
    console.log(error);
}