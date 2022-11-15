const express = require("express");
const rutas = express.Router();
const controlador = require("../conroller/voteController");

/**
 * @openapi
 * /:
 *   get:
 *     description: Servidor Iniciado
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Servidor Iniciado correctamente
 *               
 */
rutas.get('/',controlador.init)

/**
 * @openapi
 * /cartera:
 *   get:
 *     description: Obtener carteras
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                  type: string
 *                  description: Id de la cartera
 *                 hash:
 *                   type: string
 *                   description: dirección hash de la cartera
 *               example:
 *                 _id:'6356aa975aa36a6006f1ad15'
 *                 hash:'sdjansidqwhiasdp20489'               
 */
rutas.get("/cartera", controlador.getCarteras)


rutas.get("/candidatos", controlador.getCandidatos)


rutas.post("/login",controlador.login)


rutas.post("/crearcartera",controlador.createCartera)


rutas.patch("/updateUser", controlador.updateUser)


rutas.patch("/updateCandidato:id", controlador.updateCandidatos);

module.exports = rutas;
