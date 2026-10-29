// Escribe aquí las funciones auxiliares del ejercicio 22.
export function comprarCoche(ahorros) {
    if (ahorros > 5000) {
        return Promise.resolve({ 
            coche: "Usado", 
            restante: ahorros - 5000 
        });
    } else {
        return Promise.reject("No hay suficientes ahorros para comprar el coche");
    }
}