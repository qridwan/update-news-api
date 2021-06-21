const express = require('express')
const Router = express.Router()
const newsData = require('../../homeEn.data.json')

Router.get("/", (req, res) => {
    const SliderNews = (category) => {
      const news_by_category = newsData.find(
        (obj) => obj.category_id === category
      );
      return news_by_category;
    };
    const topNews = [
      SliderNews("Sports"),
      SliderNews("India"),
      SliderNews("International"),
      SliderNews("Tamilnadu"),
      SliderNews("Cinema"),
      SliderNews("Economy"),
    ];
    res.send(topNews);
  });

  module.exports = Router