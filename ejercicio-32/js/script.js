// Escribe aquí la solución del ejercicio 32.
import { verificarUsuario } from "./functions.js";

let usuario = "juan";

try {
    const resultado = await verificarUsuario(usuario);
    console.log(resultado);
} catch (error) {
    console.log(error);
}