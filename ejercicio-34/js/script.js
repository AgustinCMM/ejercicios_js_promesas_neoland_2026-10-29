// Escribe aquí la solución del ejercicio 34.
import { aplicarDescuento } from "./functions.js";

let precio = 100;
let descuento = 0.20;

try {
    console.log(await aplicarDescuento(precio, descuento));
} catch (error) {
    console.log(error);
}