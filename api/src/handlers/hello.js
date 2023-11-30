const helloHandler = async(req, res)=>{
    try {
        res.status(200).json({message: "hello!"})
    } catch (error) {
        res.status(400).json({message:"algo salió mal"})
    }

}

module.exports = helloHandler