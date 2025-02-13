import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
  ci: String,
  nombres: String,
  apellidos: String,
  celular: String,
  correo: String
});

const Cliente = mongoose.model('Cliente', clienteSchema);

export default Cliente;
