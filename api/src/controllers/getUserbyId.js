const { User, Profile, Publication } = require("../db");

const getUserbyId = async (id) => {
  const user = await User.findByPk(id, {
    attributes: ['username', 'rol', 'createdAt'],
    where: {
        erased: false,
      },
      include: [
        {
            model: Profile,
            attributes: ['first_name','last_name','profile_photo','description','location','birthday','number_of_followers','number_of_following']
          },
          /* {
            model: Publication,
            attributes: ['id', 'text', 'images', 'video', 'repost', 'createdAt'],
            where: {
              erased: false,
            },
          }, */

        ],
  });
  if(!user){
    throw new Error("El usuario no existe!");
  }
  return user;
};

module.exports = getUserbyId;