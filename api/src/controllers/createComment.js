const { Comment } = require("../db");

const createComment = async (userId, { postId, comment }) => {
  const newComment = await Comment.create({
    text: comment,
    publicationId: postId,
    erased: false,
    userId,
  });

  const updatedAt = new Date(newComment?.dataValues.updatedAt);
  const formattedDate = `${updatedAt.getDate()}-${updatedAt.getMonth() + 1}-${updatedAt.getFullYear()}`;
  const formattedTime = `${updatedAt.getHours()}:${String(updatedAt.getMinutes()).padStart(2, "0")}`;

  return {
    message: "Comentario creado exitosamente",
    comment: newComment?.dataValues.text,
    data: formattedDate,
    time: formattedTime,
  };
};

module.exports = createComment;
