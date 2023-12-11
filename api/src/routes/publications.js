const { Router } = require("express");
const verifyToken = require("../utils/verify");
const handlerCreatePublication = require("../handlers/Post/handlerCreatePublication");
const handlerGetPublication = require("../handlers/Get/handlerGetPublication");
const handlerGetPublicationbyId = require("../handlers/Get/handlerGetPublicationbyId");
const handlerGetPublicationbyUserId = require("../handlers/Get/handlerGetPublicationbyUserId");

const publication = Router();

publication.post("/create", verifyToken, handlerCreatePublication);
publication.post("/like");
publication.get("/detail/:postid", handlerGetPublicationbyId)
publication.get("/all/:pg", handlerGetPublication);
publication.get("/user/:userid", handlerGetPublicationbyUserId);
//publication.put("/");
//publication.get("/all");
//publication.get("/detail");
//publication.get("/me/:user")

module.exports = publication;
