require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const rutas = require("./Routes/Rutas");

const port = process.env.PORT || 3002;

//midelwares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("tiny"));

//Conexión a la BD
mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Base de datos conectada correctamete"))
  .catch((e) => console.log(e));

//Epecificando las rutas
app.use("/", rutas); //No importa por el momento
app.use("/votar", rutas); //No importa
app.use("/registrados", rutas);
app.use("/votado", rutas); //No importa

//Levantando el servidor
app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});
