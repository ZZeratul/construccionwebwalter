const express = require('express');
const app = express();
const port = 3000;

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');

// Servir archivos estáticos
app.use(express.static('public'));

// Configurar middleware para leer datos del formulario
app.use(express.urlencoded({ extended: true }));

// Ruta principal para cargar la página
app.get('/', (req, res) => {
    res.render('index');
});

// Ruta para realizar las operaciones
app.post('/calcular', (req, res) => {
    const { a, b, operacion } = req.body;
    let resultado;

    switch (operacion) {
        case 'sumar':
            resultado = parseFloat(a) + parseFloat(b);
            break;
        case 'restar':
            resultado = parseFloat(a) - parseFloat(b);
            break;
        case 'multiplicar':
            resultado = parseFloat(a) * parseFloat(b);
            break;
        case 'dividir':
            if (b == 0) {
                resultado = 'Error: No se puede dividir por cero';
            } else {
                resultado = parseFloat(a) / parseFloat(b);
            }
            break;
        default:
            resultado = 'Operación no válida';
    }
    res.render('index', { resultado });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

app.get('/', (req, res) => {
    console.log('Ruta principal cargada');
    res.render('index');
});
