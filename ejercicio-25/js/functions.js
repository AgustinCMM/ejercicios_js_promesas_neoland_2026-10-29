// Escribe aquí las funciones auxiliares del ejercicio 25.
export function teLoPrometo(dinero, cantidad) {
  return new Promise((res, rej) => {
    if (dinero) {
      res(`Te pago ${cantidad}`);
    } else {
      rej("toy pobre, que te lo pague dios");
    }
  });
}