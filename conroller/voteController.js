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
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    if (exists.pass !== pass) {
      return res.status(404).json({ message: "Contraseña incorrecta" });
    } else {
      const tokenSession = await tokenSign(exists);
      return res.json({ hadRegistered, tokenSession });
    }
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// const registerUser = async (req, res) => {
//   //Recibe los datos del usuario
//   console.log(cod);
//   const body = req.body;
//   const { codigo } = body[1];
//   if (codigo == cod) {
//     const respuesta = await service.createUser(body[0]);
//     res.send(respuesta);
//   } else {
//     res.send({ mensaje: "El codigo ingresado no es valido" });
//   }
// };

const createCartera = async (req, res) => {
  const body = req.body;
  try {
    const respuesta = await service.createCartera(body);
    res.json(respuesta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  
};

const getCandidatos = async (req, res) => {
  const candidatos = await service.getCandidatos();
  res.json(candidatos);
};

const updateUser = async (req, res) => {
  //Recibe el id del usuario dentro del body
  const body = req.body;
  const { correo } = body;
  try {
    const existsUser = await service.getUser(correo);
    if (existsUser) {
      const updated = await service.updateUser(correo);
      res.json(updated);
    } else {
      res.status(404).json({ mensaje: "El correo ingresado no existe" });
    }
  } catch (error) {
    res.status(500).json({message:error.message});
  }
  
  
};
// const updateCandidatos = async (req, res) => {
//   //Recibe el id del candidato dentro del body
//   const body = req.body;
//   const id = body.id;
//   const updated = await service.updateCandidato(id, body);
//   res.send(updated);
// };
const getCarteras = async (req, res) => {
  //Obtiene las carteras guardadas en base de datos
  try {
    const carteras = await service.getCartera();
    res.json(carteras);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  
};


module.exports = {
  init,
  login,
  createCartera,
  getCandidatos,
  updateUser,
  getCarteras,
};
