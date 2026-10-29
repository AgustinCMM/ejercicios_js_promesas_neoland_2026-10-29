// Escribe aquí la solución del ejercicio 16.
import { esperarUnSegundo } from "./functions.js";

for (let i=1; i<=3; i++) {
    const resultado = await esperarUnSegundo(i);
    console.log(resultado);
}