// Escribe aquí las funciones auxiliares del ejercicio 50.
export function verificarCodigo(codigo) {
    return new Promise((resolve, reject) => {
        if (!codigo || codigo[0] !== "X") {
            reject("Acceso denegado");
            return;
        }

        setTimeout(() => {
            resolve(`Acceso nivel X concedido`);
        }, 3000);
    });
}