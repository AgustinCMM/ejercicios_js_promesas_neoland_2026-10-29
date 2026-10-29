// Escribe aquí la solución del ejercicio 8.
import { devolverTic } from "./functions.js";

let miIntervalo;
let contador = 1;

miIntervalo = setInterval(() => {
    console.log(devolverTic());

    if (contador >= 10) {
        clearInterval(miIntervalo);
    }

    contador++;
}, 500);
