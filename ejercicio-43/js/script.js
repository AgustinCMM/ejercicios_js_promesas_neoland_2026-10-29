// Escribe aquí la solución del ejercicio 43.
import { calcularSaldo } from "./functions.js";

let saldo = 50;
let costoCompra = 100;

try {
    console.log(await calcularSaldo(saldo, costoCompra));
} catch (error) {
    console.error(error);
}