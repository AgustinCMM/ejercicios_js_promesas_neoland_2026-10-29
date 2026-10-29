// Escribe aquí la solución del ejercicio 11.
import { lanzarFallo } from "./functions.js";

try {
    await lanzarFallo();
} catch (error) {
    console.error("Atrapamos el error:", error.message); 
}