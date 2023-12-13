const jwt = require("jsonwebtoken");
require("dotenv").config();
const { KEY_SECRET } = process.env;
const createComment = require("../../controllers/createComment");


const handlerCreateComment = async(req, res)=>{
    try {
        const decoToken = await jwt.verify(req.token, KEY_SECRET);

        const comment = await createComment(decoToken.id, req.body); 

        res.status(200).json(comment)
        
    } catch (error) {
        console.log(error.message);
        res.status(400).json({error: error.message})
    }
}

module.exports = handlerCreateComment