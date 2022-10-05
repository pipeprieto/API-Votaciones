const mongoose = require("mongoose");
const User = require("../models/Usuario");
const Candidato = require("../models/Candidato");

const getUser = (id) => {
  try {
    const user = User.findOne({ _id: id });
    console.log(user);
    return user;
  } catch (e) {
    console.log("Error", e);
    return e;
  }
};
const getCandidatos = () => {
  try {
    const candidatos = Candidato.find();
    console.log(candidatos);
    return candidatos;
  } catch (e) {
    console.log("Error", e);
    return e;
  }
};
const createUser = (body) => {
  const findUser = body.id;
  try {
    const user = User.exists({ _id: findUser });
    if (user) {
      return { existsUser: user, userCreated: false };
    } else {
      User.create(body);
      return { existsUser: user, userCreated: true };
    }
  } catch (e) {
    console.log("Error", e);
    return e;
  }
};
const updateCandidato = (body, id) => {
  const id = id;
  try {
    Candidato.findByIdAndUpdate(id, body, { useFindAndModify: false });
    return { updated: true };
  } catch (e) {
    console.log("Error", e);
    return e;
  }
};

module.exports = { getUser, getCandidatos, createUser, updateCandidato };
