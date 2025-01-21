const fs = require('fs');  // Importamos el módulo fs

const data = "Este es el contenido de archivo.txt";  // Lo que escribiremos en el archivo

// Escribimos el archivo
fs.writeFile('miarchivo.txt', data, (err) => {  
  if (err) {
    console.error("Error al escribir el archivo:", err);
  } else {
    console.log("El archivo se ha escrito correctamente.");
  }
});
