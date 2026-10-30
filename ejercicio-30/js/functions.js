// Escribe aquí las funciones auxiliares del ejercicio 30.
export function contarHastaCinco() {
    return new Promise((resolve) => {
        let contador = 0;

        const intervalo = setInterval(() => {
            contador++;
            console.log(`Contador actual: ${contador}`);

            if (contador == 5) {
                clearInterval(intervalo);
                resolve(`Contador llegó a ${contador}`);
            }
        }, 1000);
    });
}