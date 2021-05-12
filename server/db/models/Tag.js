const { DataTypes, Model } = require("sequelize");
const { db } = require("../db");

class Tag extends Model {}

Tag.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { sequelize: db, modelName: "tags" }
);

module.exports = Tag;
