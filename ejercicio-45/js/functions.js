// Escribe aquí las funciones auxiliares del ejercicio 45.
export function verificarServidor(servidor, token) {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            if (servidor) {
                setInterval(() => {
                    if (token == "") {
                        reject("Token ausente");
                    } else {
                        resolve(`El token es: ${token}`);
                    }
                }, 500)
            } else {
                reject("Servidor inactivo");
            }
        }, 500);
    });
}