const fs = require('fs');  // Importamos el módulo fs

// Definimos una función asíncrona
async function leerArchivo() {
    try {
        // Usamos await para esperar la promesa de readFile
        const data = await fs.promises.readFile('miarchivo.txt', 'utf8');
        console.log(data);  // Imprimimos el contenido del archivo
    } catch (err) {
        console.error(err);  // Si hay un error, lo mostramos en consola
    }
}

// Llamamos a la función
leerArchivo();
