const express = require("express");
const HomeRoutes = require("./routes/home/home");
const CategoryEnRoutes = require("./routes/categories/category_ac_page.en.js");
const HomeEnRoutes = require("./routes/home/home.en");
const CategoryEnList = require("./routes/categories/category_list.en");
const categoriesAllEnNews = require("./routes/categories/category_ac_page.en");
const CategoryWiseEnNews = require("./routes/categories/category_wise_news.en");
const SubcategoriesEnList = require("./routes/subcategories/subcategory_list.en");
const SliderEn = require("./routes/home/slider.en");
const SubcategoriesEnNews = require("./routes/subcategories/subcategoryNews.en");
const SubcategoriesEnAcPage = require("./routes/subcategories/subcategory_ac_page.en");

const app = express();
var cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/", HomeRoutes);

// ====== English Version ===== //
app.use("/en/", HomeEnRoutes);
app.use("/en/categories", CategoryEnList);
app.use("/en/subcategories", SubcategoriesEnList);
app.use("/en/allCategories/News", categoriesAllEnNews)
app.use("/en/sliderInfo", SliderEn);
app.use(CategoryEnRoutes);
app.use(CategoryWiseEnNews);
app.use(SubcategoriesEnNews)
app.use(SubcategoriesEnAcPage)

app.listen(5000);
