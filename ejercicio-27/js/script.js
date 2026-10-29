// Escribe aquí la solución del ejercicio 27.
import { verificarPar } from "./functions.js";

let numero1 = 4;
let numero2 = 5;

try {
    console.log(await verificarPar(numero1));
} catch (error) {
    console.error(error);
}

try {
    console.log(await verificarPar(numero2));
} catch (error) {
    console.error(error);
}