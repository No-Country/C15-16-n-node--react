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
      images: {
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
    },
    {
      timestamps: true,
    }
  );
};