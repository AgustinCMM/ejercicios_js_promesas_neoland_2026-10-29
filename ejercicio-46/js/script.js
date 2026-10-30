// Escribe aquí la solución del ejercicio 46.
import { bajarTemperatura } from "./functions.js";

let temperatura = 100;

try {
    console.log(await bajarTemperatura(temperatura));
} catch (error) {
    console.error(error);
}