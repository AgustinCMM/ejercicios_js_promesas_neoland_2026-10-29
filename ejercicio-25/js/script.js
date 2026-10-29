// Escribe aquí la solución del ejercicio 25.
import { teLoPrometo } from "./functions.js";

try {
    const resultado = await teLoPrometo(true, "$5000");
    console.log(resultado);
} catch (error) {
    console.error(error);
}

try {
    const resultado = await teLoPrometo(false, "$5000");
    console.log(resultado);
} catch (error) {
    console.error(error);
}