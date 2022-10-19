const User = require("../models/Usuario");
const Candidato = require("../models/Candidato");
const Carteras = require("../models/Cartera");

const createUser = async (body) => {
  let { correo } = body;
  try {
    const existsUser = (await User.findOne({ correo: correo })) || null;
    console.log(existsUser);
    if (existsUser != null) {
      return { mensaje: "El usuario ya existe", success: false };
    } else {
      await User.create(body);
      return { mensaje: "Usuario creado exitosamente", success: true };
    }
  } catch (e) {
    return e;
  }
};
const createCartera = async (body) => {
  try {
    const existsCartera = await Carteras.findOne({ hash: body.hash });
    if (existsCartera !== null) {
      return { mensaje: "La cartera ya existe", success: false };
    } else {
      await Carteras.create(body);
      return { mensaje: "Cartera creada exitosamente", success: true };
    }
  } catch (e) {
    return e;
  }
};
const getCandidatos = async () => {
  try {
    const candidatos = await Candidato.find();
    return candidatos;
  } catch (e) {
    return e;
  }
};
const updateUser = async (id, body) => {
  try {
    await User.findByIdAndUpdate(id, body, { useFindAndModify: false });
    return { updated: true };
  } catch (e) {
    return e;
  }
};
const updateCandidato = async (body, id) => {
  try {
    await Candidato.findByIdAndUpdate(id, body, { useFindAndModify: false });
    return { updated: true };
  } catch (e) {
    return e;
  }
};

const getCartera = async () => {
  try {
    const carteras = await Carteras.find();
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
  createCartera,
};
