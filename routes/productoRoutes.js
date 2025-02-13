import express from 'express';
import { crearProducto, obtenerProductos } from '../controllers/productoController.js';

const router = express.Router();

// Ruta para crear un nuevo producto
router.post('/', crearProducto);

// Ruta para obtener todos los productos
router.get('/', obtenerProductos);

export default router;
