// Escribe aquí la solución del ejercicio 17.
import { recibirString } from "./functions.js";

let texto1 = "";
let texto2 = "hola";

try {
    const resultado1 = await recibirString(texto1);
    console.log(resultado1);
} catch (error) {
    console.error("Error:", error);
}

try {
    const resultado2 = await recibirString(texto2);
    console.log(resultado2);
} catch (error) {
    console.error("Error:", error);
}