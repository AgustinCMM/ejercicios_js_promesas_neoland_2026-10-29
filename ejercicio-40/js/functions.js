// Escribe aquí las funciones auxiliares del ejercicio 40.
export function darBienvenida(objeto) {
    return new Promise((resolve, reject) => {
        if (objeto.rol == "admin") {
            resolve("Bienvenida administradora");
        } else {
            reject("No eres admin");
        }
    });
}