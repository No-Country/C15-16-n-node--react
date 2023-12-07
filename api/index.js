const server = require("./src/app");
const { conn } = require("./src/db");
require("dotenv").config();
const { PORT } = process.env || 3001;

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log("%s listening at", PORT);
  });
});

// TRUE para eliminar BD y FALSE para conservar
