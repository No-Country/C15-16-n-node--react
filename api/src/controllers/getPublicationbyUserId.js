const { Publication, User } = require("../db");

const getPublicationsbyUserId = async(userId)=>{

    const searchPublications = await Publication.findAll({
        attributes: ['id', 'text', 'images', 'video', 'repost', 'createdAt',],
        where: {
            userId: userId,
            erased: false,
          },
          include: [
            {
                model: User,
                attributes: ['id','username','email']
              }
            ],
            order: [['createdAt', 'DESC']],
    })
   // console.log(searchPublications)

    const respons = searchPublications.map(post=>{

        const createdAt = new Date(post?.dataValues.createdAt);
    const formattedDate = `${createdAt.getDate()}/${createdAt.getMonth() + 1}/${createdAt.getFullYear()}`;
        return{

            username: post?.dataValues.user?.dataValues.username,
        userId: post?.dataValues.user?.dataValues.id,
        email: post?.dataValues.user?.dataValues.email,
        postId : post?.dataValues.id,
        text : post?.dataValues.text,
        images: post?.dataValues.images,
        video: post?.dataValues.video,
        create : formattedDate
        }
    })

   // console.log(respons)

   
    return respons
}




module.exports = getPublicationsbyUserId