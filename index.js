const express = require("express");
const HomeRoutes = require("./routes/home/home")
const CategoryEnRoutes = require("./routes/categories/category.en.js")
const HomeEnRoutes = require("./routes/home/home.en")
const CategoryEnList = require("./routes/categories/category_list.en")
const app = express();


app.use(express.json());

app.use("/", HomeRoutes)


// ====== English Version ===== //
app.use("/en/", HomeEnRoutes)
app.use("/en/categories", CategoryEnList)

app.use(CategoryEnRoutes)


app.listen(5000);
