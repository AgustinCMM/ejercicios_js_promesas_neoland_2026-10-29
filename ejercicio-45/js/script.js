// Escribe aquí la solución del ejercicio 45.
import { verificarServidor } from "./functions.js";

let servidor = true;
let token = "";

try {
    console.log(await verificarServidor(servidor, token));
} catch (error) {
    console.error(error);
}