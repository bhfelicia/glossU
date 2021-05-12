const { db } = require("../db");
const { DataTypes, Model } = require("sequelize");

class Glossary_Word extends Model {}
Glossary_Word.init({}, { sequelize: db, modelName: "glossary_words" });

module.exports = Glossary_Word;
