// Escribe aquí la solución del ejercicio 21.
import { verificarEdad } from "./functions.js";

let edades = [15, 18, 20];

for (let edad of edades) {
    try {
        const resultado = await verificarEdad(edad);
        console.log(`Edad ${edad}:`, resultado);
    } catch (error) {
        console.error(`Edad ${edad}:`, error);
    }
}