const service = require("../services/voteService");

const getUser = async (req, res) => {
  const user = await service.getUser();
  res.send(user);
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
const updateCandidato = async (req, res) => {
  const body = req.params.body;
  const id = req.params.body.id;
  const updated = await service.updateCandidato(body, id);
  res.json(updated);
};
module.exports = {
  getUser,
  getCandidatos,
  createUser,
  updateCandidato,
};
