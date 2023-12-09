const { Publication, User, conn } = require("../db");


const getAllPublications = async(pg)=>{

    const limit = 5;
  const offset = (pg - 1) * limit;

    const publications = await Publication.findAll({
        attributes: ['id', 'text', 'images', 'video', 'repost', 'createdAt', 'userId'],
        where: {
            erased: false,
          },
          limit,
          offset,
          
      });

    //console.log(publications)
    return publications

}

module.exports = getAllPublications