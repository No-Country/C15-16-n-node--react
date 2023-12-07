const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "posttag",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
    },
    {
      timestamps: false,
    }
  );
};