const service = require("../services/voteService");
const {tokenSign} = require("../helpers/generateToken")

const init = (req,res)=>{
res.send('Servidor inicializado correctamente');
};

const login = async (req, res) => {
  //Envia un mensaje con un código al correo especificado
  const { correo, pass } = req.body;
  try {
    const exists = await service.getUser(correo);
    const {hadRegistered} = exists;
  
    if (exists === false) {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
    if (exists.pass !== pass) {
      res.status(404).json({ message: "Contraseña incorrecta" });
    } else {
      const tokenSession = await tokenSign(exists);
      res.json({ hadRegistered, tokenSession });
    }
    return
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const registerUser = async (req, res) => {
  //Recibe los datos del usuario
  console.log(cod);
  const body = req.body;
  const { codigo } = body[1];
  if (codigo == cod) {
    const respuesta = await service.createUser(body[0]);
    res.send(respuesta);
  } else {
    res.send({ mensaje: "El codigo ingresado no es valido" });
  }
};

const createCartera = async (req, res) => {
  const body = req.body;
  const respuesta = await service.createCartera(body);
  res.send(respuesta);
};

const getCandidatos = async (req, res) => {
  const candidatos = await service.getCandidatos();
  res.send(candidatos);
};

const updateUser = async (req, res) => {
  //Recibe el id del usuario dentro del body
  const body = req.body;
  const { correo } = body[0];
  const { codigo } = body[1];
  const existsUser = await service.getUser(correo);
  if(codigo === cod && existsUser){
    const updated = await service.updateUser(correo);
    res.send(updated);
  }else{
    res.send({ mensaje: "El codigo ingresado no es valido o el correo ingresado no existe" });
  }
  
};
const updateCandidatos = async (req, res) => {
  //Recibe el id del candidato dentro del body
  const body = req.body;
  const id = body.id;
  const updated = await service.updateCandidato(id, body);
  res.send(updated);
};
const getCarteras = async (req, res) => {
  //Obtiene las carteras guardadas en base de datos
  const carteras = await service.getCartera();
  res.send(carteras);
};


module.exports = {
  init,
  login,
  registerUser,
  createCartera,
  getCandidatos,
  updateUser,
  getCarteras,
  updateCandidatos,
};
