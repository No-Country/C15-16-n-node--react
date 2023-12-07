const jwt = require("jsonwebtoken");
require("dotenv").config();
const { KEY_SECRET } = process.env;
const getUser = require("../../controllers/getUser");
const createPublication = require("../../controllers/createPublication");

const handlerCreatePublication = async (req, res) => {
  try {
    const decoToken = await jwt.verify(req.token, KEY_SECRET);
    //console.log(decoToken)
    const user = await getUser(decoToken.email);
    //console.log(user.dataValues)

    const newPublication = await createPublication(
      req.body,
      user.dataValues.id
    );

    res.status(200).json({ message: newPublication });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerCreatePublication;
