const { Router } = require("express");
const handlerCreateUser = require("../handlers/Post/handlerCreateUser");

const register = Router();

register.post("/", handlerCreateUser);

module.exports = register;
