// Escribe aquí las funciones auxiliares del ejercicio 45.
export function verificarServidor(servidor, token) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!servidor) {
                reject("Servidor inactivo");
            } else if (token == "") {
                reject("Token ausente");
            } else {
                resolve(`El token es: ${token}`);
            }
        }, 500);
    });
}