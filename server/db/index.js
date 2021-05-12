const { db } = require("./db");
const seed = require("./seed");
const User = require("./models/User");
const Glossary = require("./models/Glossary");
const Word = require("./models/Word");
const Tag = require("./models/Tag");
const User_Glossary = require("./models/User_Glossary");
const Glossary_Word = require("./models/Glossary_Word");
const Tag_Glossary = require("./models/Tag_Glossary");

User.belongsToMany(Glossary, { through: User_Glossary });
Glossary.belongsToMany(User, { through: User_Glossary });

Word.belongsToMany(Glossary, { through: Glossary_Word });
Glossary.belongsToMany(Word, { through: Glossary_Word });

Tag.belongsToMany(Glossary, { through: Tag_Glossary });
Glossary.belongsToMany(Tag, { through: Tag_Glossary });

const init = async () => {
  try {
    await db.sync({ force: true });
    const seedData = await seed();
    console.log("connected");
    return seedData;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { init };
