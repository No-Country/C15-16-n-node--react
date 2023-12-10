const getUserbyId = require("../../controllers/getUserbyId");
const handlerGetUserbyId = async(req, res)=>{
    try {
        const { id } = req.params
        const user = await getUserbyId(id)
        res.status(200).json({user})
        
    } catch (error) {
        console.log(error.message)
        res.status(400).json({message: error.message})
    }
}

module.exports = handlerGetUserbyId