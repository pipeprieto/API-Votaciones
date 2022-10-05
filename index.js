const express = require("express");
const mongoose = require("mongoose");
const app = express();
const rutas = require("./Routes/Rutas");

require("dotenv").config;

const port = process.env.PORT || 3002;
//Conexión a la BD
const url = `mongodb+srv://votacion:uRP5IHNZI7fiXlcV@cluster0.yudwx.mongodb.net/VotingSystem?retryWrites=true&w=majority`;
mongoose
  .connect(url)
  .then(() => console.log("Base de datos conectada correctamete"))
  .catch((e) => console.log(e));

//Epecificando las rutas
app.use("/", rutas);
app.use("/votar", rutas);
app.use("/registro", rutas);
app.use("/votado", rutas);

//Levantando el servidor
app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});
