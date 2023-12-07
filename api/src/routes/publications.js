const { Router } = require("express");
const handlerCreatePublication = require("../handlers/Post/handlerCreatePublication");
const verifyToken = require("../utils/verify");

const publication = Router();

publication.post("/create", verifyToken, handlerCreatePublication);
//publication.put("/");
//publication.get("/all");
//publication.get("/detail");
//publication.get("/me/:user")

module.exports = publication;
