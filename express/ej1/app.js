// Importar el módulo express
const express = require('express');

// Crear una instancia de la aplicación Express
const app = express();cd

// Definir el puerto donde el servidor escuchará
const port = 3000;

// Ruta para la página principal
app.get("/", (req, res) => {
    res.send("¡Hola desde Express!");
});
app.get("/saludo", (req, res) => {
    res.send("¡Hola desde Express!");
});
// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
