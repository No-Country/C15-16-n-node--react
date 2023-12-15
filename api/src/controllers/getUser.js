const { User } = require("../db");

const getUser = async (email) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error("El usuario no existe!");
  }

  if (user?.dataValues.erased) {
    throw new Error("El usuario fue baneado!");
  }

  return user;
};

module.exports = getUser;
