const { Publication, User } = require("../db");

const getPublicationbyId = async(postId)=>{
    console.log(postId)
    const post = await Publication.findByPk(postId, {
        attributes: ['text', 'images', 'video'],
    where: {
        erased: false,
      },
      include: [
        {
            model: User,
            attributes: ['email','username']
          },
        ],
    })

    if(!post){
        throw new Error(`No se encontró la publicacion con el id ${postId}`);
    }

    return post
}

module.exports= getPublicationbyId