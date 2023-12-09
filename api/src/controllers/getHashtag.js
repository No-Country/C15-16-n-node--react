const { Hashtag } = require("../db");

const getOrCreateHashtag = async (name_hashtag) => {

  const hashtag = await Hashtag.findOne({
    where: { name: name_hashtag }
  });

  if (!hashtag) {
    const newHashtag = await Hashtag.create({
      name: name_hashtag,
      erased: false,
    });
    return newHashtag;
  }

  return hashtag;
};

module.exports = getOrCreateHashtag;
