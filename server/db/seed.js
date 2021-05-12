const User = require("./models/User");
const Glossary = require("./models/Glossary");
const Word = require("./models/Word");
const Tag = require("./models/Tag");
const User_Glossary = require("./models/User_Glossary");
const Glossary_Word = require("./models/Glossary_Word");
const Tag_Glossary = require("./models/Tag_Glossary");

const seed = async () => {
  try {
    const felicia = await User.create({
      isAdmin: true,
      first: "Felicia",
      last: "Beth",
      email: "felicia@email.com",
    });
    const joe = await User.create({
      isAdmin: false,
      first: "Joe",
      last: "Alexander",
      email: "joe@email.com",
    });
    const caro = await User.create({
      isAdmin: false,
      first: "Caro",
      last: "Ell",
      email: "caro@email.com",
    });
    const arjan = await User.create({
      first: "Arjan",
      last: "Mitra",
      email: "arjan@email.com",
    });
    const allan = await User.create({
      first: "Allan",
      last: "Joseph",
      email: "allan@email.com",
    });
    const allison = await User.create({
      first: "Allison",
      last: "Sasso",
      email: "allison@gmail.com",
    });
    const softwareTerms = await Glossary.create({ title: "Software Terms" });
    const vocabulary = await Glossary.create({ title: "Vocabulary" });
    const astronomyTerms = await Glossary.create({ title: "Astronomy Terms" });
    await User_Glossary.create({
      glossaryId: softwareTerms.id,
      userId: felicia.id,
    });
    await User_Glossary.create({
      glossaryId: softwareTerms.id,
      userId: arjan.id,
    });
    await User_Glossary.create({
      glossaryId: vocabulary.id,
      userId: felicia.id,
    });
    await User_Glossary.create({ glossaryId: vocabulary.id, userId: caro.id });
    await User_Glossary.create({
      glossaryId: vocabulary.id,
      userId: allison.id,
    });
    await User_Glossary.create({
      glossaryId: astronomyTerms.id,
      userId: joe.id,
    });
    await User_Glossary.create({
      glossaryId: astronomyTerms.id,
      userId: allan.id,
    });
    await User_Glossary.create({
      glossaryId: astronomyTerms.id,
      userId: allison.id,
    });
    const [Express, Sequelize, React] = await Promise.all([
      Word.create({
        term: "Express",
        definition:
          "An NPM module/Node.js web application framework. Calling express() after requiring it creates an application instance, which can be stored in a variable and then used as an app. Express is used to handle delivering content from the server to the client — that is, managing page requests and responses",
      }),
      Word.create({
        term: "Sequelize",
        definition:
          "A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. Sequelize uses our vanilla object-oriented javascript to abstract over SQL rather than us having to write the SQL queries on our own. Meant to make database querying easier for developers.",
      }),
      Word.create({
        term: "React",
        definition:
          "React is a front-end JavaScript library for building user interfaces. React is all about components. A react component is a single object that outputs both HTML and includes the code needed to control that output. The component approach uses both HTML and JavaScript code, and is called ‘JSX’. JSX is not required for functional components. Props - short for “properties” - are how components talk to each other. They get passed down from a Parent to a Child component, as React’s data flow is unilateral. There are two types of components: class and functional. Class components can change state - whereas functional components do not - and have access to component API methods such as ‘render’, ‘setState’, and the ‘constructor’. ",
      }),
    ]);
    const asteroid = await Word.create({
      term: "Asteroid",
      definition:
        "A small rocky body orbiting the sun. Large numbers of these, ranging in size from nearly 600 miles (1,000 km) across (Ceres) to dust particles, are found (as the asteroid belt) especially between the orbits of Mars and Jupiter, though some have more eccentric orbits, and a few pass close to the earth or enter the atmosphere as meteors.",
    });
    const planet = await Word.create({
      term: "Planet",
      definition:
        "An astronomical body orbiting a star or stellar remnant that is massive enough to be rounded by its own gravity, is not massive enough to cause thermonuclear fusion",
    });
    await Glossary_Word.create({
      glossaryId: astronomyTerms.id,
      wordId: asteroid.id,
    });
    await Glossary_Word.create({
      glossaryId: astronomyTerms.id,
      wordId: planet.id,
    });
    await Glossary_Word.create({
      glossaryId: vocabulary.id,
      wordId: asteroid.id,
    });
    await Glossary_Word.create({
      glossaryId: vocabulary.id,
      wordId: planet.id,
    });
    await Glossary_Word.create({
      glossaryId: softwareTerms.id,
      wordId: Express.id,
    });
    await Glossary_Word.create({
      glossaryId: softwareTerms.id,
      wordId: Sequelize.id,
    });
    await Glossary_Word.create({
      glossaryId: softwareTerms.id,
      wordId: React.id,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = seed;
