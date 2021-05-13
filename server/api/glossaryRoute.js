const router = require("express").Router();

const {
  Glossary,
  Word,
  Tag,
  Glossary_Word,
  User,
  User_Glossary,
  Tag_Glossary,
} = require("../db/index");

router.get("/glossaries", async (req, res, next) => {
  try {
    const glossaries = await Glossary.findAll({
      include: { all: true },
    });
    res.send(glossaries);
  } catch (error) {
    next(error);
  }
});
router.get("/glossaries/:id", async (req, res, next) => {
  try {
    const glossary = await Glossary.findByPk(req.params.id, {
      include: Word,
    });
    res.send(glossary);
  } catch (error) {
    next(error);
  }
});

router.post("/glossaries", async (req, res, next) => {
  try {
    const newGlossary = await Glossary.create(req.body);
    res.send(newGlossary);
  } catch (error) {
    next(error);
  }
});

router.delete("/glossaries/:id", async (req, res, next) => {
  try {
    const glossary = await Glossary.findByPk(req.params.id);
    await glossary.destroy();
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
