const { Publication, User } = require("../db");


const getAllPublications = async(pg)=>{

    const limit = 5;
    const offset = (pg - 1) * limit;

   // console.log(limit, offset)

    const searchPublications = await Publication.findAll({
        attributes: ['id', 'text', 'image_one', 'image_two', 'image_three', 'image_four', 'video', 'number_of_likes', 'number_of_repost', 'number_of_comment', 'updatedAt', 'userId'],
        where: {
            erased: false,
          },
          include: [
            {
                model: User,
                attributes: ['id','username','profile_photo']
              }
            ],
            order: [['updatedAt', 'DESC']],
          limit,
          offset,
          
      });

    
    const publications = searchPublications.map(post=>{
      //console.log(post?.dataValues.user)
      const updatedAt = new Date(post?.dataValues.updatedAt);
      const formattedDate = `${updatedAt.getDate()}-${updatedAt.getMonth() + 1}-${updatedAt.getFullYear()}`;
      const formattedTime = `${updatedAt.getHours()}:${String(updatedAt.getMinutes()).padStart(2, '0')}`;

      
      return {
        postId : post?.dataValues.id,
        text : post?.dataValues.text,
        image_one: post?.dataValues.image_one,
        image_two: post?.dataValues.image_two,
        image_three: post?.dataValues.imagesimage_three,
        image_four: post?.dataValues.image_four, 
        video: post?.dataValues.video,
        likes: post?.dataValues.number_of_likes,
        comments: post?.dataValues.number_of_comment,
        reposts : post?.dataValues.number_of_comment,
        data: formattedDate,
        time: formattedTime, 
        user: {
          userId: post?.dataValues.user?.dataValues.id,
          username: post?.dataValues.user?.dataValues.username,
          photo: post?.dataValues.user?.dataValues.profile_photo
          
        }
      }
    })

    return publications

}

module.exports = getAllPublications