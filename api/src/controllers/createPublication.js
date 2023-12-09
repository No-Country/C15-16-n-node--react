const { Publication, User, Hashtag, Posttag } = require("../db");
const getOrCreateHashtag = require("../controllers/getHashtag");

//OJO CON EL HASHTAG manejar en caso "Girasol" vs "girasol"

const createPublication = async (body, userId) => {
  const { text, images, video } = body;

  if (body.hashtag) {
    var hashtag = await getOrCreateHashtag(body.hashtag);
  }

  const newPublication = await Publication.create({
    text,
    images,
    video,
    userId,
    erased: false,
  });

  await Posttag.create({
    hashtagId: hashtag?.dataValues.id,
    publicationId: newPublication?.dataValues.id,
  });

  //console.log("24", newPublication)
  //console.log("25", postAndHashtag)

  return {
    message: "¡Publicacion creada exitosamente!",
    post: newPublication?.dataValues.text,
    images: newPublication?.dataValues.images,
    video: newPublication?.dataValues.video,
    hashtag: hashtag?.dataValues.name,
  };
};

module.exports = createPublication;
