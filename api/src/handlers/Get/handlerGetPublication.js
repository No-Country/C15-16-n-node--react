const getAllPublications =require("../../controllers/getAllPublications");

const handlerGetPublication = async(req, res)=>{
   
    try {
        const { pg } = req.params
        console.log(pg)
        const allPublications = await getAllPublications(pg)
        console.log(allPublications)
        res.status(200).json({message: "hola"})
        
    } catch (error) {
        console.log(error.message)
        res.status(400).json({message : error.message})
    }
}

module.exports = handlerGetPublication;