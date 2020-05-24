// TODO separate grouping
// TODO create CSV (notice that some brands have multiple values)

var d3 = require("d3");

var fetchData = require("./fetch-data.js");
var addData = require("./add-processed-data.js");
var csv_manager = require("./create-csv.js");

let brands = [
  "mallorca",
  "menorca",
  "ibiza",
  "formentera",
  "baleares",
  "españa",
];

let getNewsByBrandMarketCategory = (news) => {
  let newsByBrandByCountry = d3
    .nest()
    .key(function (doc) {
      return doc.brand;
    })
    .key(function (doc) {
      return doc.country;
    })
    .key(function (doc) {
      return doc.category;
    })
    .rollup(function (brandGroup) {
      return brandGroup.length;
    })
    .entries(news);
  console.log(JSON.stringify(newsByBrandByCountry));
};

var spainMention = (doc) => {
  return doc.brand.includes("españa");
};

var tourismCategory = (doc) => {
  return (doc.category == "tourism") | (doc.category == "both");
};

fetchData
  .getNews()
  .then((docs) => {
    // enrich documents/news adding country and category (results of processing their current content)
    let docsWithCountry = addData.addCountry(docs);
    let docsWithCountryAndCategory = addData.addCategory(docsWithCountry);

    // ************* Page 5 KPIs.**************
    // Total Mentions (Balearic Islands + Spain)
    let totalMentions = docsWithCountryAndCategory.length;
    let tourismMentions = docsWithCountryAndCategory.filter(tourismCategory)
      .length;

    let page5Rows = [];
    page5Rows.push(["Total Mentions", totalMentions]);
    page5Rows.push(["Tourism Mentions", tourismMentions]);
    csv_manager.create_csv("output/page5_news.csv", page5Rows);
    console.log("Finished");

    // get news count grouped by brand, market and category (in this order)
    // getNewsByBrandMarketCategory(docsWithCountryAndCategory);
  })
  .catch(console.log);
