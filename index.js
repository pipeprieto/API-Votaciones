const express = require("express");
const app = express();
const rutas = require("./Routes/Rutas");

require("dotenv").config;
const port = process.env.PORT || 4000;
//Conexión a la BD
const url = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.yudwx.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose
  .connect(url)
  .then(() => console.log("Base de datos conectada correctamete"))
  .catch((e) => console.log(e));

//Epecificando las rutas
app.use("/", rutas);

//Levantando el servidor
app.listen(port, () => {
  console.log("Escuchando en el puerto 4000");
});
