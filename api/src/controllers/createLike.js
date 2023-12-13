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

      const updatePublication = await searchPost.update({
      number_of_likes : searchPost?.dataValues.number_of_likes + 1
    })

    
    const createdAt = new Date(updatePublication?.dataValues.createdAt);
    const formattedDate = `${createdAt.getDate()}-${createdAt.getMonth() + 1}-${createdAt.getFullYear()}`;
    const formattedTime = `${createdAt.getHours()}:${String(createdAt.getMinutes()).padStart(2, '0')}`;

    return {
      message: "Le diste like",
      active: !createLike?.dataValues.erased,
      publication:{
        postId : updatePublication?.dataValues.id,
        text : updatePublication?.dataValues.text,
        image_one: updatePublication?.dataValues.image_one,
        image_two: updatePublication?.dataValues.image_two,
        image_three: updatePublication?.dataValues.imagesimage_three,
        image_four: updatePublication?.dataValues.image_four, 
        video: updatePublication?.dataValues.video,
        likes: updatePublication?.dataValues.number_of_likes,
        comments: updatePublication?.dataValues.number_of_comment,
        reposts : updatePublication?.dataValues.number_of_comment,
        data: formattedDate,
        time: formattedTime,
      }
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
