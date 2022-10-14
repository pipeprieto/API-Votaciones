const User = require("../models/Usuario");
const Candidato = require("../models/Candidato");
const Carteras = require("../models/Cartera");

const getUser = (_id) => {
  let id = _id
  try {
    const user = User.findById(id);
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
const updateUser = (id,body) => {
  try{
    User.findByIdAndUpdate(id,body, {useFindAndModify:false});
    return {updated:true};
  }catch(e){
    return e;
  }
};
const updateCandidato = (body, id) => {
  try {
    Candidato.findByIdAndUpdate(id, body, { useFindAndModify: false });
    return { updated: true };
  } catch (e) {
    console.log("Error", e);
    return e;
  }
};

const getCartera = ()=>{
  try{
   const carteras = Carteras.find();
   console.log(carteras);
   return carteras;
  }catch(e){
    console.log(e)
    return e;
  }
}

module.exports = { getUser, getCandidatos, updateCandidato,getCartera,updateUser };
