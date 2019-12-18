const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CalificacioneSchema = new Schema({
    calificacion: String,
    metodo_enseñanza: String,
    recomendaciones: String,
    rutina: String,
    id_instructores: {
        type: Schema.Types.ObjectId,
        ref:"instructores"
    },
    id_usuario: {
        type: Schema.Types.ObjectId,
        ref:"usuario"
    },
})

var Calificacione = mongoose.model("calificacione", CalificacioneSchema);
module.exports = Calificacione;