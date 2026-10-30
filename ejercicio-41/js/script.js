// Escribe aquí la solución del ejercicio 41.
import { saludarConDelay } from "./functions.js";

let mensaje = "Hola";
let tiempo = 2000;

try {
    console.log(await saludarConDelay(mensaje, tiempo));
} catch (error) {
    console.error(error);
}