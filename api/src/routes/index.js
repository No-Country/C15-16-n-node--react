const { Router } = require("express");
const hello = require("./hello");

//// ENRUTADOR PRINCIPAL ////
const routes = Router();

//// RUTAS DEFINIDAS (ENTRYPOINT) ////
routes.use("/", hello)

// EXPORTAR TODAS LAS RUTAS
module.exports = routes;