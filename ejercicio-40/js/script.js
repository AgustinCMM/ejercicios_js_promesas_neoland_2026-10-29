// Escribe aquí la solución del ejercicio 40.
import { darBienvenida } from "./functions.js";

let objeto = {
    nombre: "Ana",
    rol: "admin"
}

try {
    console.log(await darBienvenida(objeto));
} catch (error) {
    console.error(error);
}