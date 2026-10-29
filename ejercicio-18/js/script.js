// Escribe aquí la solución del ejercicio 18.
import { recibirString } from "./functions.js";

let texto = "";

try {
    const resultado = await recibirString(texto);
    console.log(resultado);
} catch (error) {
    console.error("Error:", error);
}