const { Router } = require("express");
const hello = require("./hello");
const login = require("./login");
const user = require("./user");
const register = require("./register");
const publication = require("./publications");

//// ENRUTADOR PRINCIPAL ////
const routes = Router();

//// RUTAS DEFINIDAS (ENTRYPOINT) ////
routes.use("/", hello);
routes.use("/user", user);
routes.use("/login", login);
routes.use("/post",publication);
// EXPORTAR TODAS LAS RUTAS
module.exports = routes;
