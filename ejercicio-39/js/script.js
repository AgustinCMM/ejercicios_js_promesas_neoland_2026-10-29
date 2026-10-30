// Escribe aquí la solución del ejercicio 39.
import { dividir } from "./functions.js";

let dividendo = 10;
let divisor = 0;

try {
    console.log(await dividir(dividendo, divisor));
} catch (error) {
    console.error(error);
}