// Escribe aquí las funciones auxiliares del ejercicio 42.
export function obtenerPlan(usuarioId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ 
                id: usuarioId, 
                plan: "Premium" 
            });
        }, 1500);
    });
}