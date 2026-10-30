// Escribe aquí la solución del ejercicio 30.
import { contarHastaCinco } from "./functions.js";

try {
    const mensaje = await contarHastaCinco();
    console.log(mensaje);
} catch (error) {
    console.error("Error:", error);
}