// Escribe aquí las funciones auxiliares del ejercicio 51.
export async function protocoloRescate(temperaturaCore, barrasDeControl, energiaAuxiliar, tiempoLimite) {
    const estado = { haExplotado: false };

    const flujoCompleto = (async () => {
        const [resultadoEnfriamiento, resultadoBarras] = await Promise.all([
            enfriarNucleo(temperaturaCore, estado),
            insertarBarras(barrasDeControl, estado)
        ]);

        if (estado.haExplotado) return;

        console.log(`Temperatura: ${resultadoEnfriamiento} (estable)`);
        console.log(`Barra: ${resultadoBarras}`);

        if (resultadoEnfriamiento <= 500 && resultadoBarras == "ok") {
            const estadoEnergia = await encenderEnergiaAuxiliar(energiaAuxiliar, estado);
            console.log(`Energía auxiliar encendida: ${estadoEnergia}`);
        }
    })();

    try {
        await Promise.race([
            flujoCompleto,
            evaluarTiempo(tiempoLimite)
        ]);
    } catch (error) {
        estado.haExplotado = true;
        throw error;
    }
}

function enfriarNucleo(tempInicial, estado) {
    return new Promise((resolve) => {
        let temp = tempInicial;
        const intervaloTemp = setInterval(() => {
            if (estado.haExplotado) {
                clearInterval(intervaloTemp);
                return;
            }
            temp -= 100;
            if (temp <= 500) {
                clearInterval(intervaloTemp);
                resolve(temp);
            } else {
                console.log(`Temperatura: ${temp}`);
            }
        }, 200);
    });
}

function insertarBarras(barras, estado) {
    return new Promise((resolve) => {
        let i = 0;
        const intervaloBarras = setInterval(() => {
            if (estado.haExplotado) {
                clearInterval(intervaloBarras);
                return;
            }
            if (i >= barras.length) {
                clearInterval(intervaloBarras);
                console.log("No se encontró ninguna barra de control válida");
                return;
            }
            if (barras[i] == "ok") {
                resolve(barras[i]);
                clearInterval(intervaloBarras);
            } else {
                console.log(`Barra: ${barras[i]}. Sigue buscando.`);
                i++;
            }
        }, 300);
    });
}

function encenderEnergiaAuxiliar(energia, estado) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (estado.haExplotado) return;
            if (!energia) {
                energia = true;
                resolve(energia);
            }
        }, 1000);
    });
}

function evaluarTiempo(tiempo) {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("💥 KABOOM: El reactor ha explotado"));
        }, tiempo);
    });
}