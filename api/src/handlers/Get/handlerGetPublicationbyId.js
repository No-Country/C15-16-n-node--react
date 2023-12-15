const getPublicationbyId = require("../../controllers/getPublicationbyId");


const handlerGetPublicationbyId =async(req, res)=>{
    try {
        const { postid } = req.params;
        console.log(postid)
        const publication = await getPublicationbyId(postid)

        res.status(200).json({publication})
    } catch (error) {
        console.log(error.message);
        res.status(400).json({error: error.message})
    }
}

module.exports = handlerGetPublicationbyId