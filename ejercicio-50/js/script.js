// Escribe aquí la solución del ejercicio 50.
import { verificarCodigo } from "./functions.js";

let codigoAcceso = "X79";

try {
    console.log(await verificarCodigo(codigoAcceso));
} catch (error) {
    console.error(error);
}