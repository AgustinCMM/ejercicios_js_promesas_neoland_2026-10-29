// Escribe aquí la solución del ejercicio 19.
import { recibirString } from "./functions.js";

let texto = "hola";

recibirString(texto)
    .then((resultado) => {
        console.log("Primer .then (Texto):", resultado);

        return resultado.length; 
    })
    .then((longitud) => {
        console.log("Segundo .then (Longitud):", longitud);
    })
    .catch((error) => {
        console.error("Error:", error);
    });