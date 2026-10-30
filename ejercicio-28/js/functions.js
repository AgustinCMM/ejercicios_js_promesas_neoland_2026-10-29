// Escribe aquí las funciones auxiliares del ejercicio 28.
export function login(usuario, password) {
    return new Promise((resolve, reject) => {
        if (usuario === "admin" && password === "1234") {
            resolve("Inición Sesiada!");
        } else {
            reject("Error: Usuario o contraseña incorrectos.");
        }
    });
}