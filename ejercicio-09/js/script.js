// Escribe aquí la solución del ejercicio 9.
import { promesa } from "./functions.js";

promesa()
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error);
  });
