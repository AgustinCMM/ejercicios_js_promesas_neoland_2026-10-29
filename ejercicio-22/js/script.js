// Escribe aquí la solución del ejercicio 22.
import { comprarCoche } from "./functions.js";

let misAhorros = 8500;

try {
    const resultado = await comprarCoche(misAhorros);
    console.log("¡Felicidades! Compraste un coche:", resultado.coche);
    console.log("Dinero restante en la cuenta:", resultado.restante);
} catch (error) {
    console.error("Lo siento:", error);
}