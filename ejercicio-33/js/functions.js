// Escribe aquí las funciones auxiliares del ejercicio 33.
export function verificarClave(clave) {
    return new Promise ((resolve) => {
        if (
            // Menos de 8 caracteres
            clave.length < 8 ||
            // No tiene mayúsculas
            !/[A-Z]/.test(clave) ||
            // No tiene números
            !/\d/.test(clave) ||
            // No tiene caracteres especiales
            !/[^A-Za-z0-9]/.test(clave)
        ) {
            console.log("La clave es insegura ❌");
        } else {
            console.log("La clave es segura ✅");
        }
    });
}