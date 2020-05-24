var d3 = require("d3");

var fetchData = require("./fetch-data.js");
var addData = require("./add-processed-data.js");

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

fetchData.getNews().then((docs) => {
  // enrich documents/news adding country and category (results of processing their current content)
  let docsWithCountry = addData.addCountry(docs);
  let docsWithCountryAndCategory = addData.addCategory(docsWithCountry);
  // get news count grouped by brand, market and category (in this order)
  getNewsByBrandMarketCategory(docsWithCountryAndCategory);
});
