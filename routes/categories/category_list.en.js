const express = require("express");
const Router = express.Router();
const categories = [
  `India`,
  `International`,
  `Tamilnadu`,
  `Sports`,
  `Cinema`,
  `Economy`,
  `Lifestyles`,
];


Router.get('/', (req, res) => {
res.send(categories)
})

module.exports = Router, categories;
