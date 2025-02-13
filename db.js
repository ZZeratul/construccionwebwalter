<<<<<<< HEAD
// db.js
import mysql from 'mysql2';  // Asegúrate de usar 'import' correctamente
import { MongoClient } from 'mongodb';  // Importa MongoClient para MongoDB

// Conexión a MongoDB
const mongoUrl = 'mongodb://localhost:27017'; // URL de conexión de MongoDB
const dbName = 'tienda'; // Nombre de la base de datos de MongoDB

const client = new MongoClient(mongoUrl);
let db;

// Conectar a MongoDB
const connectToMongo = async () => {
  if (!db) {
    await client.connect();
    db = client.db(dbName);
    console.log('Conectado a MongoDB');
  }
  return db;
};

// Conexión a MySQL
const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Tu usuario de MySQL
  password: '',  // Tu contraseña de MySQL
  database: 'tienda_online'  // El nombre de la base de datos MySQL
});

mysqlConnection.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos MySQL:', err.stack);
  } else {
    console.log('Conectado a la base de datos MySQL');
  }
});

// Exporta las conexiones
export { connectToMongo, mysqlConnection };
=======
const mysql=require('mysql2');

//Configurar la conexion
const conection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'bd_ventas'

});

//Conectar a la base de datos
conection.connect((error)=>{
    if(error){
        console.log('Error al conectar a la base de datos');
        return;
    }
    console.log('Conectado a la base de datos');
});

module.exports=conection;
>>>>>>> 4d1073aff7439a15a9526d2a5a356cb341892007
