const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "profile",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      birthday: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      number_of_followers: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      number_of_following: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },

    },
    {
      timestamps: true,
    }
  );
};