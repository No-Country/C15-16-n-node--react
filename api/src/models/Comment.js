const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "comment",
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