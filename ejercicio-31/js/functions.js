// Escribe aquí las funciones auxiliares del ejercicio 31.
export function multiplicar(base, multiplicador) {
    return new Promise((resolve) => {
        const resultado = base * multiplicador;
        resolve(resultado);
    });
}