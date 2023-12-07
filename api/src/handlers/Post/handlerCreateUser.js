const createUser = require("../../controllers/createUser");
require("dotenv").config();
const { KEY_SECRET } = process.env;
const jwt = require("jsonwebtoken");

const handlerCreateUser = async (req, res) => {
  const { email } = req.body;
  try {
    const newUser = await createUser(req.body);

    if (newUser) {
      jwt.sign(
        { email, id: newUser?.dataValues.id, rol: newUser?.dataValues.rol },
        KEY_SECRET,
        { expiresIn: "2d" },
        (err, token) => {
          res.status(200).json({
            message: "¡Usuario creado correctamente!",
            token: token,
            erased: newUser?.dataValues.erased,
          });
        }
      );
    } else {
      res.status(404).json({ message: "¡Credenciales Incorrectas!" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
};

module.exports = handlerCreateUser;
