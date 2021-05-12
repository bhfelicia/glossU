const { db } = require("../db");
const { DataTypes, Model } = require("sequelize");

class User_Glossary extends Model {}
User_Glossary.init({}, { sequelize: db, modelName: "user_glossaries" });

module.exports = User_Glossary;
