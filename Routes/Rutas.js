const express = require("express");
const rutas = express.Router();
const controlador = require("../conrollers/voteController");

rutas
  .get("/", controlador.getUser)
  .get("/votar", controlador.getCandidatos)
  .post("/registro", controlador.createUser)
  .patch("/votado", controlador.updateCandidato);

module.exports = rutas;
