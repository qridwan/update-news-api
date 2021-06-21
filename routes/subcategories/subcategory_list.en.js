const express = require("express");
const Router = express.Router();
const homeData = require("../../homeEn.data.json")

Router.get('/', (req, res) => {
    let subcategories = []
homeData.forEach((item) => {
    item.subcategory_id.forEach((subcategory_name) => {
        const is_category_included = subcategories.find(category => category === subcategory_name)
        if (!is_category_included) {
            subcategories.push(subcategory_name)
        }
    })
    })
    res.send(subcategories)
    })
    
    module.exports = Router;