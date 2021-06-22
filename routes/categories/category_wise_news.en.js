const express = require("express");
const Router = express.Router();
const fetch = require("node-fetch");

Router.get("/en/category/:category", (req, res) => {
  const getCategory = req.params.category;
  async function getCategoryNews() {
    let allNews = [];
    for (let i = 1; i < 10 ; i++) {
      const url = `https://updatenews360.herokuapp.com/en/category/${getCategory}/${i}`;
    await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          allNews = [...allNews , ...data];
        })
        .catch(err => console.log(err));
    }
    console.log(allNews.length);
    // return allNews;
    res.send(allNews);
  }
  getCategoryNews();
});

module.exports = Router;
