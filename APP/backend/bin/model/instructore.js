const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InstructoreSchema = new Schema({
    email: String,
    password: String,
    nombre: String,
    apellido: String,
    telefono: String,
    cedula: String,
    sexo: String,
    id_usuarios: [
        {
            type: Schema.Types.ObjectId,
            ref:"cliente"
        }
    ]
})

var Instructores = mongoose.model("instructore", InstructoreSchema);
module.exports = Instructores;
