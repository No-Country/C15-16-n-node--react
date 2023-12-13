const { Comment } = require("../db");

const createComment =async(userId, {postId, comment})=>{
    const newComment = await Comment.create({
        text: comment,
        publicationId: postId,
        erased: false
    })

    return { 
        message: "Comentario creado exitosamente",
        comment: newComment?.dataValues.text,
        fecha: newComment?.dataValues.updatedAt
        /* user ... y hora */
    }


}

module.exports = createComment