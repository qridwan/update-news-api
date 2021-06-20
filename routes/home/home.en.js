const express = require("express");
const Router = express.Router();
const fs = require("fs");
const Parser = require("rss-parser");
const HtmlParser2 = require("htmlparser2");
const isEquivalent = require("../../rss-parser");
const homeData = require("../../homeEn.data.json");

Router.get("/", (req, res) => {
  (async () => {
    let count = 0;
    const parser = new Parser();
    const feed = await parser.parseURL(
      "https://www.updatenews360.com/english/feed/"
    );

    let items = [];
    const fileName = "homeEn.data.json";
    await Promise.all(
      feed.items.map(async (currentItem) => {
        if (
          items.filter((item) => isEquivalent(item, currentItem)).length <= 0
        ) {
          count++;
          const newsBody = [];
          const images = [];
          const pubDate = currentItem.pubDate;
          const category = currentItem.categories[0];
          const subcategories = currentItem.categories.slice(1);
          const title = currentItem.title;
          const shareUrl = currentItem.link;

          const htmlParser = new HtmlParser2.Parser({
            ontext(text) {
              if (text != "\n" && text != "\n\n\n\n") newsBody.push(text);
            },
            onopentag(name, attributes) {
              if (name === "img") {
                images.push(attributes.src);
              }
            },

            onend() {
              items.push({
                id: count,
                title: title,
                image_url: images,
                news_body: newsBody,
                pubDate: pubDate,
                share_url: shareUrl,
                category_id: category,
                subcategory_id: subcategories,
              });
            },
          });

          htmlParser.write(currentItem["content:encoded"]);
          htmlParser.end();
        }
      })
    );
    // Save the file
    fs.writeFileSync(fileName, JSON.stringify(items));
  })();
  const getTopNews = (category) => {
    const news_by_category = homeData.filter(
      (obj) => obj.category_id === category
    );
    // const topNews_by_category = news_by_category.slice(0, 5);
    // return topNews_by_category;
    return news_by_category
  };

  const topNews = [
    {
      category_name: "Sports",
      news: getTopNews("Sports"),
    },
    { category_name: "India", news: getTopNews("India") },
    {
      category_name: "International",
      news: getTopNews("International"),
    },
    {
      category_name: "Tamilnadu",
      news: getTopNews("Tamilnadu"),
    },
    {
      category_name: "Cinema",
      news: getTopNews("Cinema"),
    },
    {
      category_name: "Economy",
      news: getTopNews("Economy"),
    },
  ];
  res.send(topNews);
});

module.exports = Router;
