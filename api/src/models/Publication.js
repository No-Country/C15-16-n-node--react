const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "publication",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      text: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      image_one: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      image_two: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      image_three: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      image_four: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      video: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      repost: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      erased: {
        type: DataTypes.BOOLEAN,
        //allowNull: false,
        default: false
      },
      number_of_likes: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      number_of_repost: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      number_of_comment: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );
};

