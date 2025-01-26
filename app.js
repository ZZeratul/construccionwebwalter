const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 3000;

// Middleware para leer datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Ruta principal para cargar el archivo 'bienvenido.html' desde la carpeta 'public'
app.get('/', (req, res) => {
    res.sendFile('bienvenido.html', { root: __dirname + '/public' });
});

// Ruta para listar los productos desde la base de datos
app.get('/listar', (req, res) => {
    db.query('SELECT id, nombre, precio, stock FROM productos', (error, productos) => {
        if (error) {
            console.log('Error al ejecutar la consulta', error);
            return;
        }
        res.render('listar', { productos });
    });
});

// Mostrar formulario para agregar producto
app.get('/add', (req, res) => {
    res.render('add');
});

// Guardar el producto en la base de datos
app.post('/add', (req, res) => {
    const { nombre, precio, stock } = req.body;
    db.query('INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)', [nombre, precio, stock], (error, resultado) => {
        if (error) {
            console.log('Error al insertar el producto', error);
            return;
        }
        res.redirect('/listar');
    });
});

// Mostrar formulario para editar producto
app.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT id, nombre, precio, stock FROM productos WHERE id = ?', [id], (error, productos) => {
        if (error) {
            console.log('Error al ejecutar la consulta', error);
            return;
        }
        res.render('edit', { producto: productos[0] });
    });
});

// Actualizar el producto en la base de datos
app.post('/edit/:id', (req, res) => {
    const id = req.params.id;
    const { nombre, precio, stock } = req.body;
    db.query('UPDATE productos SET nombre = ?, precio = ?, stock = ? WHERE id = ?', [nombre, precio, stock, id], (error, resultado) => {
        if (error) {
            console.log('Error al actualizar el producto', error);
            return;
        }
        res.redirect('/listar');
    });
});

// Eliminar producto
app.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM productos WHERE id = ?', [id], (error, resultado) => {
        if (error) {
            console.log('Error al eliminar el producto', error);
            return;
        }
        res.redirect('/listar');
    });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});