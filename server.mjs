import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import cors from 'cors';
import Producto from './models/Producto.js'; // Importa el modelo de Producto
import Cliente from './models/Cliente.js';   // Importa el modelo de Cliente

// Crear una instancia de Express
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos (imágenes)
app.use('/images', express.static(path.join(__dirname, 'images')));

// Ruta para mostrar la tienda
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'tienda-online', 'index.html'));
});

// 📌 Ruta para obtener los productos desde MongoDB
app.get('/productos', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    console.error('Error al obtener los productos', error);
    res.status(500).send('Error al obtener los productos');
  }
});

// 📌 Ruta para obtener los clientes desde MongoDB
app.get('/clientes', async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    console.error('Error al obtener los clientes', error);
    res.status(500).send('Error al obtener los clientes');
  }
});

// 📌 Ruta para agregar un nuevo cliente
app.post('/clientes', async (req, res) => {
  try {
    const nuevoCliente = new Cliente(req.body);
    await nuevoCliente.save();
    res.json({ mensaje: 'Cliente agregado con éxito' });
  } catch (error) {
    console.error('Error al agregar cliente', error);
    res.status(500).send('Error al agregar cliente');
  }
});

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/tienda', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.log('❌ Error de conexión a MongoDB', err));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${port}`);
});
