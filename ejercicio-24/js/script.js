// Escribe aquí la solución del ejercicio 24.
import { simularLanzamientoMoneda } from "./functions.js";

// Primer lanzamiento
try {
    console.log("Lanzamiento 1:", await simularLanzamientoMoneda());
} catch (error) {
    console.error("Lanzamiento 1:", error);
}

// Segundo lanzamiento
try {
    console.log("Lanzamiento 2:", await simularLanzamientoMoneda());
} catch (error) {
    console.error("Lanzamiento 2:", error);
}

// Tercer lanzamiento
try {
    console.log("Lanzamiento 3:", await simularLanzamientoMoneda());
} catch (error) {
    console.error("Lanzamiento 3:", error);
}