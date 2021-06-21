const express = require("express");
const Router = express.Router();
const { default: fetch } = require("node-fetch");

const sportNews = require("../../sportsEn.data.json");
const economyNews = require("../../economyEn.data.json");
const indiaNews = require("../../indiaEn.data.json");
const internationalNews = require("../../internationalEn.data.json");
const lifestyleNews = require("../../lifestyleEn.data.json");
const cinemaNews = require("../../cinemaEn.data.json");
const tamilnaduNews = require("../../tamilnaduEn.data.json");

Router.get("/en/tags/subcategory/:tag", (req, res) => {
  const allNews = [
    ...cinemaNews,
    ...tamilnaduNews,
    ...economyNews,
    ...internationalNews,
    ...indiaNews,
    ...lifestyleNews,
    ...sportNews,
  ];
  const news_by_subcategory = allNews.filter((obj) => {
    const subCategory = obj.subcategory_id;
    const required = req.params.tag;
    const matched = subCategory.find((cate) => cate === required);
    if (matched) {
      return obj;
    }
  });
  res.send(news_by_subcategory);
});

module.exports = Router;
