const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "like",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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