// Escribe aquí la solución del ejercicio 51.
import { protocoloRescate } from "./functions.js";

let temperaturaCore = 1000;
let barrasDeControl = ["fallo", "fallo", "ok", "fallo", "fallo"];
let energiaAuxiliar = false;
let tiempoLimite = 3000;

try {
    await protocoloRescate(temperaturaCore, barrasDeControl, energiaAuxiliar, tiempoLimite);
} catch (error) {
    console.error(error);
}