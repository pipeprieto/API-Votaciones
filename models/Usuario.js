const mongoose = require("mongoose");

const { Schema } = mongoose;

const Usuario = new Schema(
  {
    tel: { type: String },
    correo: { type: String, required: true },
    hadRegistered: { type: Boolean },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const User = mongoose.model("Usuario", Usuario);
module.exports = User;
