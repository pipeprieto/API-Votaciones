const mongoose = require("mongoose");
const { Schema } = mongoose;

const Cartera = new Schema({
  hash: {type: String,required:true}
});

const Carteras = mongoose.model("Cartera", Cartera);
module.exports = Carteras;
