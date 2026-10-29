// Escribe aquí las funciones auxiliares del ejercicio 18.
export function recibirString(texto) {
    if (texto == "") {
        return new Promise((resolve, reject) => {
            reject("El string está vacío");
        });
    } else {
        return new Promise((resolve) => {
            resolve(texto.toUpperCase());
        });
    }
}