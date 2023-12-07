const jwt = require("jsonwebtoken");
const { KEY_SECRET } = process.env;

const generateToken = async (id, email, username, rol, erased) => {
  const options = {
    expiresIn: "2d", // Cambiar la duración de expiración aquí (30m-1h-2d)
  };

  return jwt.sign({ id, email, username, rol, erased }, KEY_SECRET, options);
};

module.exports = generateToken;
