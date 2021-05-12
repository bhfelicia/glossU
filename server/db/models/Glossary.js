const { DataTypes, Model } = require("sequelize");
const { db } = require("../db");

class Glossary extends Model {}

Glossary.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { sequelize: db, modelName: "glossaries" }
);

module.exports = Glossary;
