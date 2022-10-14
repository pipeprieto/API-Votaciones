const express = require("express");
const rutas = express.Router();
const controlador = require("../conrollers/voteController");

rutas
  .get("/registrados:id", controlador.getUser)
  .get("/cartera", controlador.getCarteras)
  .get("/candidatos", controlador.getCandidatos)
  .patch("/updateUser:id", controlador.updateUser)
  .patch("/updateCandidato:id", controlador.updateCandidatos);

module.exports = rutas;
