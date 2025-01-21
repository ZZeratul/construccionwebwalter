const express = require('express');
const app = express();
const port = 3000;
// Configuramos EJS como motor de plantillas
app.set('views', './views');
app.set('view engine', 'ejs');
// Middleware para parsear datos de formularios
app.use(express.urlencoded({ extended: false }));
// Ruta para mostrar el formulario


app.get('/', (req, res) => {
    const productos = [
        { nombre: 'Manzana', precio: 4.5 },
        { nombre: 'Banana', precio: 1.8 },
        { nombre: 'Naranja', precio: 3.2 }
    ];

    res.render('index', { productos });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  });
  