// Escribe aquí la solución del ejercicio 4.
import { devolverError } from "./functions.js";

try {
    const resultado = await devolverError();
    console.log(resultado);
} catch (error) {
    console.error("Se atrapó el error:", error); 
}