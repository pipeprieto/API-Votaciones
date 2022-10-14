const mongoose = require("mongoose");
const { Schema } = mongoose;

const Candidato = new Schema({
  nombre: String,
  partido: String,
  foto: String,
});

const Candidatos = mongoose.model("Candidato", Candidato);
module.exports = Candidatos;
