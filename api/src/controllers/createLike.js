const { Publication, Like } = require("../db");

const createOrPutLike = async (userId, { active, postId }) => {
  const searchPost = await Publication.findByPk(postId);

  if (!searchPost) {
    throw new Error(`No se encontró la publicacion con el id ${postId}`);
  }

  const searchLike = await Like.findOne({
    where: {
      publicationId: postId,
      userId,
    },
  });

  if (!searchLike) {
    const createLike = await Like.create({
      publicationId: postId,
      userId,
      erased: false,
    });

    return {
      message: "Le diste like",
      active: !createLike?.dataValues.erased,
    };
  } else {
    const updateLike = await searchLike.update({
      erased: !active,
    });
    return {
      message: updateLike?.dataValues.erased
        ? "Le diste disLike"
        : "Le diste Like",
      active: !updateLike?.dataValues.erased,
    };
  }
};

module.exports = createOrPutLike;
