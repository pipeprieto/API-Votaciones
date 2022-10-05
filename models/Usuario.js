const mongoose = require("mongoose");

const { Schema } = mongoose;

const Usuario = new Schema({
  tel: String,
  nombre: String,
  correo: String,
  password: String,
  token: String,
  hadVoted: Boolean,
});

const User = mongoose.model("Usuario", Usuario);
module.exports = User;
