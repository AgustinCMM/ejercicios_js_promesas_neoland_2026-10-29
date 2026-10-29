// Escribe aquí la solución del ejercicio 14.
import { mostrarSaldo } from "./functions.js";

mostrarSaldo()
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error);
  });