// Escribe aquí las funciones auxiliares del ejercicio 16.
export function esperarUnSegundo(tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Tiempo transcurrido: ${tiempo}s.`);
        }, 1000);
    });
}