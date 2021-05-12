const { db } = require("../db");
const { DataTypes, Model } = require("sequelize");

class Tag_Glossary extends Model {}
Tag_Glossary.init({}, { sequelize: db, modelName: "tag_glossaries" });

module.exports = Tag_Glossary;
