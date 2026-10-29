// Escribe aquí la solución del ejercicio 12.
import { lanzarFallo } from "./functions.js";

try {
    await lanzarFallo();
} catch (error) {
    console.error("Atrapamos el error:", error.message); 
}