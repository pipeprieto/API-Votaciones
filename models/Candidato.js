const mongoose = require("mongoose");
const { Schema } = mongoose;

const Candidato = new Schema({
  nombre: { type: String, required: true },
  partido: { type: String, required: true },
  foto: { type: String, required: true },
});

const Candidatos = mongoose.model("Candidato", Candidato);
module.exports = Candidatos;
