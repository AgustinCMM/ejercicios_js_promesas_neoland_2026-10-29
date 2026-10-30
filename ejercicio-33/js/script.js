// Escribe aquí la solución del ejercicio 33.
import { verificarClave } from "./functions.js";

let clave = "secreta";

try {
    const resultado = await verificarClave(clave);
    console.log(resultado);
} catch (error) {
    console.log(error);
}