// Escribe aquí las funciones auxiliares del ejercicio 46.
export function bajarTemperatura(temperatura) {
    return new Promise((resolve) => {
        const intervalo = setInterval(() => {
            console.log(`Temperatura actual: ${temperatura}°`);
            temperatura -= 10;
            if (temperatura <= 50) {
                clearInterval(intervalo); 
                resolve("Temperatura segura");
            }
        }, 100);
    });
}