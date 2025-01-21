const fs = require('fs');  // Correcto: se usa 'require' para importar 'fs'

const data = "Esto es lo que se escribirá en el archivo";  // Corregido: se usa '=' para asignar valor

// Escribir el archivo
fs.writeFile('miarchivo.txt', data, (err) => {  // Correcto: 'writeFile' es la función adecuada
  if (err) {
    console.error("Error al escribir el archivo:", err);
  } else {
    console.log("El archivo se ha escrito correctamente.");
  }
});
