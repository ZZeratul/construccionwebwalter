import connectToMongo from '../db.js';

export const crearProducto = async (req, res) => {
  const { nombre, precio, imagen, detalle } = req.body;

  try {
    const db = await connectToMongo();
    const productosCollection = db.collection('productos');
    
    const nuevoProducto = { nombre, precio, imagen, detalle };

    const result = await productosCollection.insertOne(nuevoProducto);
    res.status(201).send(`Producto agregado con ID: ${result.insertedId}`);
  } catch (error) {
    res.status(500).send('Error al agregar producto');
  }
};

export const obtenerProductos = async (req, res) => {
  try {
    const db = await connectToMongo();
    const productosCollection = db.collection('productos');

    const productos = await productosCollection.find().toArray();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).send('Error al obtener productos');
  }
};
