// Escribe aquí la solución del ejercicio 49.
import { sumarCarrito } from "./functions.js";

let productos = [
    {precio: 10}, 
    {precio: 20}
];
let impuesto = true;

try {
    console.log(await sumarCarrito(productos, impuesto));
} catch (error) {
    console.error(error);
}