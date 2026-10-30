// Escribe aquí la solución del ejercicio 29.
import { login } from "./functions.js";

try {
    console.log("Intentando iniciar sesión con datos erróneos...");
    const resultado = await login("hacker", "4321");
    console.log(resultado);
} catch (error) {
    console.error(error);

    console.log("Ejecutando reintento con credenciales correctas...");

    try {
        const resultadoReintento = await login("admin", "1234");
        console.log("¡Reintento exitoso!", resultadoReintento);
    } catch (errorReintento) {
        console.error("El reintento también falló:", errorReintento);
    }
}