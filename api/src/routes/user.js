const { Router } = require("express");
const handlerCreateUser = require("../handlers/Post/handlerCreateUser");
const handlerGetUserbyId = require("../handlers/Get/handlerGetUserbyId");


const user = Router();

user.post("/register", handlerCreateUser);
user.get("/detail/:id", handlerGetUserbyId)


module.exports = user;