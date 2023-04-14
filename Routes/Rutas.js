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
rutas.get("/", controlador.init);

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
rutas.get("/cartera", controlador.getCarteras);

/**
 * @openapi
 * /candidatos:
 *   get:
 *     description: Obtener listado de candidatos
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
 *                  description: Id del candidato
 *                 nombre:
 *                  type: string
 *                  description: nombre del candidato
 *                 partido:
 *                  type: string
 *                  description: nombre del partido del candidato
 *                 foto:
 *                  type: string
 *                  description: url de la foto del candidato
 *               example:
 *                 _id:'634a0cc1e4ad3231d85d2682'
 *                 nombre:'Gustavo Petro'
 *                 partido:'Colombia humana'
 *                 foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Presidente_Gustavo_Petro_Urrego.jpg/640px-Presidente_Gustavo_Petro_Urrego.jpg'
 */
rutas.get("/candidatos", controlador.getCandidatos);

rutas.post("/login", controlador.login);

/**
 * @openapi
 * /crearcartera:
 *   post:
 *     description: registrar cartera en base de datos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             hash:
 *               type: string
 *               description: direccion hash de la cartera
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
rutas.post("/crearcartera", controlador.createCartera);

rutas.patch("/updateUser", controlador.updateUser);

module.exports = rutas;
