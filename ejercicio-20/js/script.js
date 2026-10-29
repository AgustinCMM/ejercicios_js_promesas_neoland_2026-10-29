// Escribe aquí la solución del ejercicio 20.
import { retornarExito } from "./functions.js";

retornarExito()
    .then((resultado) => {
        console.log("Primer .then:", resultado);
        throw "Error inesperado";
    })
    .then((siguienteResultado) => {
        console.log("Segundo .then:", siguienteResultado);
    })
    .catch((error) => {
        console.error("Error:", error);
    });