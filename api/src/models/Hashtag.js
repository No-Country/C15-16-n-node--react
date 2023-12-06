const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "hashtag",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      erased: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false
      }
    },
    {
      timestamps: true,
    }
  );
};