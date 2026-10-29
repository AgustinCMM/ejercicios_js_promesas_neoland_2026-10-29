// Escribe aquí las funciones auxiliares del ejercicio 24.
export function simularLanzamientoMoneda() {
    let moneda = Math.random();
    
    if (moneda > 0.5) {
        return Promise.resolve("Cara");
    } else {
        return Promise.reject("Cruz");
    }
}