const { Publication, User, conn } = require("../db");


const getAllPublications = async(pg)=>{

    const limit = 5;
  const offset = (pg - 1) * limit;

    const searchPublications = await Publication.findAll({
        attributes: ['id', 'text', 'images', 'video', 'repost', 'createdAt', 'userId'],
        where: {
            erased: false,
          },
          limit,
          offset,
          
      });

    //console.log(searchPublications)
    const publications = searchPublications.map(post=>{
      //console.log(post?.dataValues.id)
      const createdAt = new Date(post?.dataValues.createdAt);
    const formattedDate = `${createdAt.getDate()}/${createdAt.getMonth() + 1}/${createdAt.getFullYear()}`;
      
      return {
        postId : post?.dataValues.id,
        text : post?.dataValues.text,
        images: post?.dataValues.images,
        video: post?.dataValues.video,
        create : formattedDate 
      }
    })

    return publications

}

module.exports = getAllPublications