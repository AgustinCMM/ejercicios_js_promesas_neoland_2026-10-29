// Escribe aquí la solución del ejercicio 10.
import { promesa } from "./functions.js";

promesa()
  .then((resultado) => {
    resultado += 5;
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error);
  });
