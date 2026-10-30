// Escribe aquí la solución del ejercicio 34.
import { aplicarDescuento } from "./functions.js";

let precio = 100;
let descuento = true;

try {
    console.log(await aplicarDescuento(precio, descuento));
} catch (error) {
    console.log(error);
}