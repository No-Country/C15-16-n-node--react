const getPublicationsbyUserId = require("../../controllers/getPublicationbyUserId");


const handlerGetPublicationbyUserId =async(req, res)=>{
    try {
        const { userid } = req.params;
        const publications = await getPublicationsbyUserId(userid)
       
        res.status(200).json({publications})
    } catch (error) {
        console.log(error.message);
        res.status(400).json({error: error.message})
    }
}

module.exports = handlerGetPublicationbyUserId