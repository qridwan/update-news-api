# UpdateNews-API
Introduction
API For UpdateNews360 Mobile application

# Overview
For version change; change the parameter of the "stage"

en For English version
ta For Tamilnadu
GET API
Make things easier for your teammates with a complete folder description.
GET
Data for Home page
https://updatednews360-apis-52kcwwwrwa-el.a.run.app/news/landing?stage=ta
fetch home page news, Topics * 6 Items
- Request Params
stage
ta
## GET

# Data ac to Categories
https://updatednews360-apis-52kcwwwrwa-el.a.run.app/news/category?stage=en&category=cinema&pagenumber=1
fetch news a/c to the categories.
English Categories:
"India", "International", "Tamilnadu", "Sports", "Cinema", "Economy", 
 "Gallery"
Tamil Category path:

"Trending", "Tamilnadu", "India", "World", "Cinema-TV", "Politics", "Crime","Viral-News", "Technology", "Business", "Sports", "Further"
- Request Params
stage
en
category
cinema
pagenumber 1

## GET
# Data ac to Trendings
https://updatednews360-apis-52kcwwwrwa-el.a.run.app/news/trending?stage=ta&subcategory=Coronavirus&pagenumber=1
will give news a/c to
Trendings English tags:

"News",
  "Beast",
  "businesses",
  "company",
  "Covid-19",
  "lockdowns",
  "BSE",
  "Business",
  "economy",
  "Finance",
  "PNB",
  "SEBI",
  "Congress",
  "monsoon",
  "Sonia Gandhi",
  "vaccination",
  "Brazil",
  "Coronavirus",
  "deaths",
  "vaccinations",
  "ATS",
  "Muslims",
  "Uttar Pradesh",
  "China",
  "Guangdong",
  "vaccines",
  "economic",
  "MIT",
  "Tamilnadu",
  "Covid",
  "Covid vaccine",
  "pandemic",
  "MSI",
  "vehicles",
  "buses",
  "Lockdown",
  "Metro",
  "Narendra modi",
  "Madras Cafe",
  "Raashii Khanna",
  "Telugu films",
  "Tholi Prema",
  "Venky Mama",
  "Corona",
  "Lyca Productions",
  "Relief Fund",
  "Tamil nadu",
  "Maari 2",
  "National-award",
  "encounter",
  "Kashmir",
  "terror",
  "French Grand",
  "Red Bull",
  "Virat kohli",
  "WTC final",
Tamil Trendings Tag:

"கொரோனா",
  "Puducherry",
  "Chennai",
  "Coimbatore", 
  "Nilgiris",
  "Tiruppur",
  "Salem",
  "Madurai",
  "Trichy",
  "Tuticorin",
  "Kanyakumari",
  "Villupuram",
  "Vellore"
- Request Params
stage
ta
subcategory
Coronavirus
pagenumber 1
without pageNumber api also work fine

## GET
# Specific News + More Stories
https://updatednews360-apis-52kcwwwrwa-el.a.run.app/news/singleNews?stage=ta&category=trending&newsId=o-panneerselvam-statement-about-private-hospital-vaccine-260621
Make things easier for your teammates with a complete request description.
- Request Params
stage
ta
category
trending
newsId
o-panneerselvam-statement-about-private-hospital-vaccine-260621

## GET
# Get Gallery-slider
https://updatednews360-apis-52kcwwwrwa-el.a.run.app/news/galleryslider?stage=ta
api for gallery slider

- Request Params
stage
ta

## GET
# Get Top-news slider
https://updatednews360-apis-52kcwwwrwa-el.a.run.app/news/topslider?stage=ta
api for header slider

- Request Params
stage
ta

## GET
# Get Cinema-slider
https://updatednews360-apis-52kcwwwrwa-el.a.run.app/news/cinemaslider?stage=ta
for cinema slider

- Request Params
stage
ta

## GET
# Categories Subcategory Info
https://updatednews360-apis-52kcwwwrwa-el.a.run.app/news/subnews?stage=ta&subcategory=mobile-updates&pagenumber=1&category=technology
Gallery-Sub Category parameters are:
🌟 For Tamil:
beauty,
health,
cook-tips,
trending-photos

🌟 For English;
actors
actress
movie-events
nature

- Request Params
stage
ta
subcategory
mobile-updates
pagenumber [without this query by default goes on page 1]
category
technology

## GET
# Getting List of all categories
https://updatednews360-apis-52kcwwwrwa-el.a.run.app/list/categories?stage=ta
gives list of entire categories

- Request Params
stage
ta

## GET
# Getting List of all Trendings
https://updatednews360-apis-52kcwwwrwa-el.a.run.app/list/trending?stage=ta
Get All trednding

- Request Params
stage
ta
No trendings for english

## GET
# Fetch Notification Categories
https://updatednews360-apis-52kcwwwrwa-el.a.run.app/notification/categories
API for fetching list of notification categories

