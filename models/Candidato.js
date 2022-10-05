const mongoose = require("mongoose");
const { Schema } = mongoose;

const Candidato = new Schema({
  nombre: String,
  partido: String,
  votos: Number,
});

const Candidate = mongoose.model("Candidato", Candidato);
module.exports = Candidate;
