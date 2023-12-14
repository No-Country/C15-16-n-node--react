const { Publication, Like } = require("../db");
const formatDataTime = require("../utils/formatDataTime");

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
    // Verificar si el usuario ya ha dado like antes de crear uno nuevo
    const userLikedBefore = await Like.findOne({
      where: {
        publicationId: postId,
        userId: userId,
        erased: false,
      },
    });

    if (!userLikedBefore) {
      const createLike = await Like.create({
        publicationId: postId,
        userId,
        erased: false,
      });

      const updatePublication = await searchPost.update({
        number_of_likes: searchPost?.dataValues.number_of_likes + 1,
      });

      if (updatePublication?.dataValues.number_of_likes < 0) {
        await searchPost.update({
          number_of_likes: 0,
        });
      }

      const formattedDate = formatDataTime(updatePublication?.dataValues.createdAt);

      return {
        message: "Le diste like",
        active: !createLike?.dataValues.erased,
        publication: {
          postId: updatePublication?.dataValues.id,
          likes: updatePublication?.dataValues.number_of_likes,
          comments: updatePublication?.dataValues.number_of_comment,
          reposts: updatePublication?.dataValues.number_of_comment,
          ...formattedDate,
        },
      };
    } else {
      // El usuario ya dio like antes, no se permite dar like nuevamente
      return {
        message: "Ya diste like a esta publicación",
        active: false,
      };
    }
  } else {
    const updateLike = await searchLike.update({
      erased: !active,
    });

    const updatedLikesCount = active
      ? searchPost?.dataValues.number_of_likes + 1
      : searchPost?.dataValues.number_of_likes - 1;

    const newLikesCount = Math.max(updatedLikesCount, 0);

    const updatePublication = await searchPost.update({
      number_of_likes: newLikesCount,
    });

    const formattedDate = formatDataTime(updatePublication?.dataValues.createdAt);

    return {
      message: updateLike?.dataValues.erased ? "Le diste dislike" : "Le diste like",
      active: !updateLike?.dataValues.erased,
      publication: {
        postId: updatePublication?.dataValues.id,
        likes: updatePublication?.dataValues.number_of_likes,
        comments: updatePublication?.dataValues.number_of_comment,
        reposts: updatePublication?.dataValues.number_of_comment,
        ...formattedDate,
      },
    };
  }
};

module.exports = createOrPutLike;
