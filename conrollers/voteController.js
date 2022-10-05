const service = require("../services/voteService");

const getUser = async (req, res) => {
  const user = await service.getUser(req.params.id);
  res.json(user);
};
const getCandidatos = async (req, res) => {
  const candidatos = await service.getCandidatos();
  res.json(candidatos);
};
const createUser = async (req, res) => {
  const wasCreated = await service.createUser(req.params.body);
  if (wasCreated.userCreated) {
    res.redirect("/votar");
  } else {
  }
};
const updateCandidato = (req, res) => {
  res.send("Actualizando candidato");
};
module.exports = {
  getUser,
  getCandidatos,
  createUser,
  updateCandidato,
};
