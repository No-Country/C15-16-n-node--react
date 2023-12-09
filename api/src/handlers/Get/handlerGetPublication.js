const getAllPublications =require("../../controllers/getAllPublications");

const handlerGetPublication = async(req, res)=>{
   
    try {
        const { pg } = req.params
       // console.log(pg)
        const allPublications = await getAllPublications(pg)
        //console.log(allPublications)
        if(allPublications.length === 0){
            res.status(200).json({pagination: pg, message: "No hay mas contenido"})
        }
        res.status(200).json(
            {
                pagination: pg,
                publications : allPublications,
            })
        
    } catch (error) {
        console.log(error.message)
        res.status(400).json({message : error.message})
    }
}

module.exports = handlerGetPublication;