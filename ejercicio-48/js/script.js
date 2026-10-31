// Escribe aquí la solución del ejercicio 48.
import { subirArchivos } from "./functions.js";

let archivos = [
    "file1.txt",
     "file2.jpg"
];

try {
    console.log(await subirArchivos(archivos));
} catch (error) {
    console.error(error);
}