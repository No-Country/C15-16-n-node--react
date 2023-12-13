const jwt = require("jsonwebtoken");
require("dotenv").config();
const { KEY_SECRET } = process.env;
const createOrPutLike = require("../../controllers/createLike");

const handlerLike = async (req, res) => {
  try {
    const decoToken = await jwt.verify(req.token, KEY_SECRET);

    const searchlike = await createOrPutLike(decoToken.id, req.body);

    res.status(200).json(searchlike);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerLike;
