// Escribe aquí las funciones auxiliares del ejercicio 32.
export function verificarUsuario(nombre) {
    return new Promise ((resolve) => {
        let nombreMayuscula = nombre.toUpperCase();

        resolve(`Usuario: ${nombreMayuscula} verificado`)
    });
}