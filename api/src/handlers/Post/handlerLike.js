const createOrPutLike = require("../../controllers/createLike");
const handlerLike =async(req, res)=>{
    try {
        const { active, postId } = req.body
        const searchlike = await createOrPutLike(postId, active)

    } catch (error) {
        console.log(error.message)
        res.status(400).json({error: error.message})
    }
}

module.exports = handlerLike