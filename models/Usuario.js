const mongoose = require("mongoose");

const { Schema } = mongoose;

const Usuario = new Schema(
  {
    pass:{type:String,required:true},
    correo: { type: String, required: true },
    hadRegistered: { type: Boolean, default:false },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const User = mongoose.model("Usuario", Usuario);
module.exports = User;
