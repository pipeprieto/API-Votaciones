const mongoose = require("mongoose");
const { Schema } = mongoose;

const Cartera = new Schema({
  hash: String
});

const Carteras = mongoose.model("Cartera", Cartera);
module.exports = Carteras;
