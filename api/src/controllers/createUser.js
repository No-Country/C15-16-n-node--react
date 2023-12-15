const { User, Profile } = require("../db");
const bcrypt = require("bcrypt");
require("dotenv").config();
const { SALT } = process.env;

const createUser = async ({
  email,
  password,
  username,
  profile_photo,
  first_name,
  last_name,
  description,
  location,
  birthday,
}) => {
  const user = await User.findOne({ where: { email: email } });

  if (user) {
    throw new Error("El usuario ya existe!");
  }

  const newObjUser = {
    email,
    username,
    profile_photo,
  };

  if (password !== undefined) {
    const salt = await bcrypt.genSalt(parseInt(SALT, 10));
    const hashPassword = await bcrypt.hash(password, salt);
    newObjUser.password = hashPassword;
  }

  const newUser = await User.create(newObjUser);
  const { id } = newUser?.dataValues;

  const findProfile = await Profile.findOne({ where: { userId: id } });

  if (!findProfile) {
    await Profile.create({
      userId: id,
      first_name,
      last_name,
      description,
      location,
      birthday,
      number_of_following : 0,
      number_of_followers: 0

    });
  }

  return newUser;
};

module.exports = createUser;
