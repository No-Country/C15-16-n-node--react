const { Publication, Like } = require("../db");

const createOrPutLike =async(postId, active)=>{
    const searchPost = await Publication.findByPk(postId)

    if(!searchPost){
        throw new Error(`No se encontró la publicacion con el id ${postId}`);
    }


    const searchLike = await Like.create({
    where: {
        publicationId: postId,
        erased: false,
      },
    })

    if(searchLike){
        const updateLike = await Like.update({

        })
    }
}

module.exports = createOrPutLike;