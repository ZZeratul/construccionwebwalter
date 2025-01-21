// Importar el módulo express
const express = require('express');

// Crear una instancia de la aplicación Express
const app = express();

// Definir el puerto donde el servidor escuchará
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta para la página principal
app.get("/", (req, res) => {
    res.send("¡Hola desde Express!");
});

// Ruta para crear un usuario
app.post("/usuario", (req, res) => {
    const { nombre, edad } = req.body;  // Desestructuración de datos
    res.send(`¡Usuario creado! Nombre: ${nombre}, Edad: ${edad}`);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
