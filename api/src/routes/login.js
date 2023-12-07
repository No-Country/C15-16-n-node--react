const { Router } = require("express");
const handlerLogin = require("../handlers/Post/handlerLoginUser");

const login = Router();

login.post("/", handlerLogin);

module.exports = login;
