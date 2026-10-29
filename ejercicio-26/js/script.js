// Escribe aquí la solución del ejercicio 26.
import { verificarArray } from "./functions.js";

let datos1 = ["manzana", "pera", "banana", "frutilla"];
let datos2 = ["manzana", "pera"];

try {
    const resultado = await verificarArray(datos1);
    console.log("El último elemento es:", resultado); // Imprimirá: "frutilla"
} catch (error) {
    console.error("Error:", error);
}

try {
    const resultado = await verificarArray(datos2);
    console.log("El último elemento es:", resultado); // Imprimirá: "frutilla"
} catch (error) {
    console.error("Error:", error);
}