const fs = require('fs').promises;  // Asegúrate de usar 'fs.promises' para trabajar con promesas

fs.readFile('miarchivo.txt', 'utf8')  // 'readFile' es un método asíncrono que lee el archivo
    .then((data) => {
        console.log(data);  // Si todo va bien, imprime el contenido del archivo
    })
    .catch((err) => {
        console.error(err);  // Si ocurre un error, lo muestra en la consola
    });
