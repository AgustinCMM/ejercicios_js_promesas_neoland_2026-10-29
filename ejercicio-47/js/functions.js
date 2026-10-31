// Escribe aquí las funciones auxiliares del ejercicio 47.
export function tirarDado(intentos) {
    return new Promise((resolve, reject) => {
        const intervaloDado = setInterval(() => {
            if (intentos <= 0) {
                clearInterval(intervaloDado);
                reject("Perdiste");
                return;
            }

            let dado = Math.floor(Math.random() * 6) + 1;

            if (dado === 6) {
                clearInterval(intervaloDado);
                resolve("¡Ganaste!");
            } else {
                console.log(`Salió ${dado}, te quedan ${intentos - 1} intentos.`);
                intentos--;
            }
        }, 200);
    });
}