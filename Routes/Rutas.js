const express = require("express");
const rutas = express.Router();
const controlador = require("../conroller/voteController");

rutas
  .get("/cartera", controlador.getCarteras)
  .get("/candidatos", controlador.getCandidatos)
  .post("/verify",controlador.verify)
  .post("/registrar", controlador.registerUser)
  .post("crearcartera",controlador.createCartera)
  .patch("/updateUser:id", controlador.updateUser)
  .patch("/updateCandidato:id", controlador.updateCandidatos);

module.exports = rutas;
