const { Router } = require("express");
const verifyToken = require("../utils/verify");
const handlerCreatePublication = require("../handlers/Post/handlerCreatePublication");
const handlerGetPublication = require("../handlers/Get/handlerGetPublication");

const publication = Router();

publication.post("/create", verifyToken, handlerCreatePublication);
publication.get("/all/:pg", handlerGetPublication)
//publication.put("/");
//publication.get("/all");
//publication.get("/detail");
//publication.get("/me/:user")

module.exports = publication;
