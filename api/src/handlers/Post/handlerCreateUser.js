const createUser = require("../../controllers/createUser");
require("dotenv").config();
const { KEY_SECRET } = process.env;
const jwt = require("jsonwebtoken");

const handlerCreateUser = async (req, res) => {
  
  try {
    if(req.body.email)req.body.email = req.body.email.toLowerCase();
    if(req.body.username)req.body.username = req.body.username.toLowerCase();
    
    const newUser = await createUser(req.body);

    if (newUser) {
      const { email,id, rol, erased } = newUser?.dataValues
      jwt.sign(
        { email, id, rol, erased },
        KEY_SECRET,
        { expiresIn: "2d" },
        (err, token) => {
          res.status(200).json({
            message: "¡Usuario creado correctamente!",
            token: token,
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
