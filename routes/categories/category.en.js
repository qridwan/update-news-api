const express = require("express");
const Router = express.Router();
const fs = require("fs");
const Parser = require("rss-parser");
const HtmlParser2 = require("htmlparser2");
const isEquivalent = require("../../rss-parser");

Router.get("/en/category/:category/:pageNumber", (req, res) => {
  const getCategory = req.params.category
  const getPageNumber = req.params.pageNumber;

  const data_by_category = require(`../../${getCategory}En.data.json`);

  (async () => {
    let count = 0;
    const parser = new Parser();
    const feed = await parser.parseURL(
      `https://www.updatenews360.com/english/category/${getCategory}/feed?paged=${getPageNumber}`
    );

    let items = [];
    const fileName = `${getCategory}En.data.json`;
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

  res.send(data_by_category);
});

module.exports = Router;
