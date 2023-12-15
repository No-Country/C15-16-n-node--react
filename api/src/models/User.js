const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      profile_photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        // allowNull:false
      },
      rol: {
        type: DataTypes.ENUM("admin", "client", "superAdmin"),
        defaultValue: "client",
        allowNull: false,
      },
      erased: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: true }
  );
};