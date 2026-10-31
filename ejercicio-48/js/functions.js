// Escribe aquí las funciones auxiliares del ejercicio 48.
export function subirArchivos(archivos) {
    return new Promise((resolve) => {
        let cantidadArchivos = 0;
        let tiempoTranscurrido = 0;
        
        const intervaloArchivos = setInterval(() => {
            if (cantidadArchivos < archivos.length) {
                console.log(`${archivos[cantidadArchivos]} subido.`);
                cantidadArchivos++;
                tiempoTranscurrido+=1000;
            } else {
                resolve(`${cantidadArchivos} archivos subidos en ${tiempoTranscurrido}ms`);
                clearInterval(intervaloArchivos);
            }
        }, 1000);
    });
}