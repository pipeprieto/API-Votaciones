const service = require("../services/voteService");

const getUser = async (req, res) => {
  const user = await service.getUser(req.params.body.id);
  res.send(user);
};
const getCandidatos = async (req, res) => {
  const candidatos = await service.getCandidatos();
  res.send(candidatos);
};
const updateUser = async (req, res) => {
    const body = req.params.body;
    const id = req.params.body.id;
    const updated = await service.updateCandidato(body, id);
    res.send(updated);
  
};
const updateCandidatos = async (req,res)=>{
  const body = req.params.body;
  const id = req.params.body.id;
  const updated = await service.updateCandidato(body, id);
  res.send(updated);

}
const getCarteras = async (req, res) => {

};
module.exports = {
  getUser,
  getCandidatos,
  updateUser,
  getCarteras,
  updateCandidatos
};
