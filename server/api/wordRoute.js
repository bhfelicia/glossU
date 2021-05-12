const axios = require("axios");
const router = require("express").Router();
require("dotenv").config();

router.get("/:word", async (req, res, next) => {
  try {
    const def = await axios.get(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${req.params.word}?key=${process.env.DICTIONARY_API_KEY}`
    );
    //if multiple defs
    const allDefs = [];

    def.data[0].def[0].sseq.forEach((def) => {
      const newDef = def[0][1].dt[0][1].slice(4);
      if (!newDef.includes("sx")) {
        allDefs.push(newDef);
      }
    });
    // const singleDef = def.data[0].def[0].sseq[0][0][1].dt[0][1];
    // const allDefs = [];
    // def.data[0].def[0].sseq.forEach((elem) => allDefs.push(elem[1].dt[1]));
    res.send(allDefs);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
