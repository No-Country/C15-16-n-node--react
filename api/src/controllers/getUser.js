const { User } = require("../db");

const getUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  if(!user){
    throw new Error("El usuario no existe!");
  }
  return user;
};

module.exports = getUser;