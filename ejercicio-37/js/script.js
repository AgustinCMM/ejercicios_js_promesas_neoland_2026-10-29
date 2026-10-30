// Escribe aquí la solución del ejercicio 37.
import { evaluarStock } from "./functions.js";

let stock = 0;
let pedido = 5;

try {
    console.log(await evaluarStock(stock, pedido));
} catch (error) {
    console.error("Error:", error);
}