const { Router } = require("express");
const helloHandler = require("../handlers/hello");

const hello = Router();

hello.get("/", helloHandler)

module.exports = hello