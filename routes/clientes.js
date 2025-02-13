import express from 'express';
import Cliente from '../models/cliente.js';

const router = express.Router();

// Obtener todos los clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener clientes', error });
  }
});

// Agregar un nuevo cliente
router.post('/', async (req, res) => {
  try {
    const nuevoCliente = new Cliente(req.body);
    await nuevoCliente.save();
    res.json({ mensaje: 'Cliente agregado con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al agregar cliente', error });
  }
});

export default router;
