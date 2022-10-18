const service = require("../services/voteService");
const mailer = require("nodemailer");

const verify = async(req,res)=>{
  const body = req.params.body;
  const {correo} = body
  const message =  await mail(correo);
  res.send(message);
};
const registerUser = async (req, res) => {
  //Recibe los datos del usuario
  const body = req.params.body
  const respuesta = await service.createUser(body);
  res.send(respuesta);
};
const createCartera = async(req,res)=>{
  const body = req.params.body;
  const respuesta = await service.createCartera(body);
  res.send(respuesta)
};
const getCandidatos = async (req, res) => {
  const candidatos = await service.getCandidatos();
  res.send(candidatos);
};
const updateUser = async (req, res) => {
  //Recibe el id del usuario dentro del body
  const body = req.params.body;
  const id = body.id;
  const updated = await service.updateUser(id,body);
  res.send(updated);
};
const updateCandidatos = async (req, res) => {
  //Recibe el id del candidato dentro del body
  const body = req.params.body;
  const id = body.id;
  const updated = await service.updateCandidato(id,body);
  res.send(updated);
};
const getCarteras = async (req, res) => {
  //Obtiene las carteras guardadas en base de datos
  const carteras = await service.getCartera();
  res.send(carteras);
};

const mail = async (correo) => {
  //let testaccount = await mailer.createTestAccount();
  let codigo = (Math.floor(Math.random()*1000 + 1000));
  let transpoter = mailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      user: "jayce.sauer@ethereal.email",
      pass: "BfGDh3exJYjUjQ9PP2",
    },
  });
  let info = await transpoter.sendMail({
    from: `<votesystemun@example.com>`, // sender address
    to: `${correo}`, // list of receivers
    subject: "verifircación y Registro", // Subject line
    text: "Tu código de verificación es el siguiente", // plain text body
    html: `<p><strong>${codigo}</strong></p>`,
  });
  console.log(info.response);
 return info.response
};
module.exports = {
  verify,
  registerUser,
  createCartera,
  getCandidatos,
  updateUser,
  getCarteras,
  updateCandidatos,
};
