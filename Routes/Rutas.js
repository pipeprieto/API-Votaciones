const express = require("express");
const rutas = express.Router();
const controlador = require("../conroller/voteController");

rutas
  .get('/',controlador.init)
  .get("/cartera", controlador.getCarteras)
  .get("/candidatos", controlador.getCandidatos)
  .post("/login",controlador.login)
  .post("/crearcartera",controlador.createCartera)
  .patch("/updateUser", controlador.updateUser)
  .patch("/updateCandidato:id", controlador.updateCandidatos);

module.exports = rutas;
