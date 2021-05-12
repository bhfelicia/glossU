const { DataTypes, Model } = require("sequelize");
const { db } = require("../db");

class Word extends Model {}

Word.init(
  {
    term: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    definition: {
      type: DataTypes.TEXT,
      defaultValue: "To be defined",
    },
  },
  { sequelize: db, modelName: "words" }
);

module.exports = Word;
