const { Publication, User, Hashtag, Posttag } = require("../db");
const getOrCreateHashtag = require("../controllers/getHashtag");

//OJO CON EL HASHTAG manejar en caso "Girasol" vs "girasol"

const createPublication = async (body, userId) => {
  const { text, image_one, image_two, image_three, image_four, video } = body;

  if (body.hashtag) {
    var hashtag = await getOrCreateHashtag(body.hashtag);
  }

  const newPublication = await Publication.create({
    text,
    image_one,
    image_two,
    image_three,
    image_four,
    video,
    userId,
    erased: false,
    number_of_likes: 0,
    number_of_repost: 0,
    number_of_comment: 0,
  });

  await Posttag.create({
    hashtagId: hashtag?.dataValues.id,
    publicationId: newPublication?.dataValues.id,
  });

  const updatedAt = new Date(newPublication?.dataValues.updatedAt);
  const formattedDate = `${updatedAt.getDate()}-${updatedAt.getMonth() + 1}-${updatedAt.getFullYear()}`;
  const formattedTime = `${updatedAt.getHours()}:${String(updatedAt.getMinutes()).padStart(2, "0")}`;

  return {
    message: "¡Publicacion creada exitosamente!",
    post: newPublication?.dataValues.text,
    image_one: newPublication?.dataValues.image_one,
    image_two: newPublication?.dataValues.image_two,
    image_three: newPublication?.dataValues.image_three,
    image_four: newPublication?.dataValues.image_four,
    video: newPublication?.dataValues.video,
    hashtag: hashtag?.dataValues.name,
    likes: newPublication?.dataValues.number_of_likes,
    comments: newPublication?.dataValues.number_of_comment,
    reposts: newPublication?.dataValues.number_of_repost,
    data: formattedDate,
    time: formattedTime,
  };
};

module.exports = createPublication;
