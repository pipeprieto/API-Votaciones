const User = require("../models/Usuario");
const Candidato = require("../models/Candidato");
const Carteras = require("../models/Cartera");

const createUser = (body) => {
  let {correo} = body ;
  try {
    const existsUser = User.findOne({correo:correo});
    if (existsUser !==null) {
      return {mensaje:"El usuario ya existe",success:false}
    }else{
      User.create(body);
      return {mensaje:"Usuario creado exitosamente",success:true};
    }
  } catch (e) {
    return e;
  }
};
const createCartera = (body) => {
  try {
    const existsCartera = Carteras.findOne({ hash: body.hash });
    if (existsCartera !== null) {
      return { mensaje: "El usuario ya existe", success: false };
    } else {
      Carteras.create(body);
      return { mensaje: "Usuario creado exitosamente", success: true };
    }
  } catch (e) {
    return e;
  }
};
const getCandidatos = () => {
  try {
    const candidatos = Candidato.find();
    return candidatos;
  } catch (e) {
    return e;
  }
};
const updateUser = (id, body) => {
  try {
    User.findByIdAndUpdate(id, body, { useFindAndModify: false });
    return { updated: true };
  } catch (e) {
    return e;
  }
};
const updateCandidato = (body, id) => {
  try {
    Candidato.findByIdAndUpdate(id, body, { useFindAndModify: false });
    return { updated: true };
  } catch (e) {
    return e;
  }
};

const getCartera = () => {
  try {
    const carteras = Carteras.find();
    return carteras;
  } catch (e) {
    return e;
  }
};

module.exports = {
  createUser,
  getCandidatos,
  updateCandidato,
  getCartera,
  updateUser,
};
