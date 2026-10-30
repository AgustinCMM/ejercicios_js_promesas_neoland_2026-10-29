// Escribe aquí la solución del ejercicio 42.
import { obtenerPlan } from "./functions.js";

let usuarioId = 101;

try {
    console.log("Consultando servidor (simulando red)...");
    const resultado = await obtenerPlan(usuarioId);
    console.log("Datos recibidos:", resultado);
} catch (error) {
    console.error(error);
}