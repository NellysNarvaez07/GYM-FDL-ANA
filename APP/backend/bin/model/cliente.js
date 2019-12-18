const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
       email: String,
       password: String,
       nombre: String,
       apellido: String,
       cedula: String,
       telefono: String,
       sexo: String,
       peso: String,
       id_usuarios: [
              { 
                     type: Schema.Types.ObjectId,
                     ref:"usuarios"
              }
       ]

})

var Cliente = mongoose.model("cliente", ClienteSchema);
module.exports = Cliente;