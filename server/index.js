const User = require("./db/models/User");
const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const { init } = require("./db/index");
init();
require("dotenv").config();
const port = process.env.PORT || 5781;
const axios = require("axios");
const jwt = require("jsonwebtoken");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "..", "public")));

app.use("/api/words", require("./api/wordRoute"));
app.use("/api", require("./api/glossaryRoute"));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.listen(port, () => console.log(`listening on port ${port}`));
