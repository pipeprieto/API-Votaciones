const service = require("../services/voteService");
const mailer = require("nodemailer");
let cod = 0;

const init = (req,res)=>{
res.send('Servidor inicializado correctamente');
};

const verify = async (req, res) => {
  //Envia un mensaje con un código al correo especificado
  const code = otpGenerator(4);
  cod = code;
  console.log(cod)
  const body = req.body;
  const { correo } = body;
  const message = await mail(correo, code);
  //Recibe la última respuesta del servidor
  res.send({mensaje:message});
};

const otpGenerator = (limit)=>{
  let digits='0123456789';
  let OTP = '';
  for (let index = 0; index < limit; index++) {
    OTP+=digits[Math.floor(Math.random() * 10)]    
  }
  return OTP;
}

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

const mail = async (correo, codigo) => {
  //Los mensajes de correo permanecen temporalmente en el host especificado
  //Lo que hay que hacer después es usar OAuth2 para poder enviarlos por gmail
  let transpoter = mailer.createTransport({
    service:"gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    // tls: {
    //   rejectUnauthorized: false,
    // },
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_DVPASS,
    },
  });
  let info = await transpoter.sendMail({
    from: process.env.EMAIL, // sender address
    to: `${correo}`, // list of receivers
    subject: "verifircación y Registro", // Subject line
    text: "Tu código de verificación es el siguiente", // plain text body
    html: `<p><strong>${codigo}</strong></p>`,
  });
  return info.response;
};
module.exports = {
  init,
  verify,
  registerUser,
  createCartera,
  getCandidatos,
  updateUser,
  getCarteras,
  updateCandidatos,
};
