const express = require("express");
const { default: fetch } = require("node-fetch");
const Router = express.Router();

Router.get("/en/subcategory/:subcategory/:pageNumber", (req, res) => {
  const getSubcategory = req.params.subcategory;
  const PageNumber = req.params.pageNumber;

 (() => {
    fetch(`http://localhost:5000/en/tags/subcategory/${getSubcategory}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.length);
       try {
        if (PageNumber == 1) {
          const news_for_show = data.slice(0, 19);
          res.send(news_for_show);
        } else {
          const slice_first = 20 * (number - 1);
          const slice_second = slice_first + 19;
          const news_for_show = data.slice(slice_first, slice_second);
          res.send(news_for_show);
        }
       } catch (error) {
         res.send([])
       }
      });
  })();
  
});

module.exports = Router;
