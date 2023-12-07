const { Router } = require("express");
const hello = require("./hello");
const login = require("./login");
const register = require("./register");

//// ENRUTADOR PRINCIPAL ////
const routes = Router();

//// RUTAS DEFINIDAS (ENTRYPOINT) ////
routes.use("/", hello);
routes.use("/register", register);
routes.use("/login", login);
// EXPORTAR TODAS LAS RUTAS
module.exports = routes;
