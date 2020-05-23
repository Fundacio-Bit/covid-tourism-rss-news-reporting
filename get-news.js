var MongoClient = require("mongodb").MongoClient;
var d3 = require("d3");

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

// Initialize connection once
MongoClient.connect(
  "mongodb://localhost:27017/",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    // abort and report in case of error
    if (err) throw err;
    // continue if connexion was successfull
    let db = client.db("rss_covid_tourism_db");
    let mongoQuery = {};
    let mongoProjection = {
      projection: {
        _id: 0,
        published: 0,
        extraction_date: 0,
        topics: 0,
        link: 0,
        section: 0,
        source_name: 0,
        selected: 0,
      },
    };
    let collection = db.collection("news");

    collection
      .find(mongoQuery, mongoProjection)
      .sort({ published: -1 })
      .toArray((err, docs) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          // enrich documents/news adding country and category (results of processing their current content)
          let docsWithCountry = addData.addCountry(docs);
          let docsWithCountryAndCategory = addData.addCategory(docsWithCountry);

          // get news count grouped by brand, market and category (in this order)
          getNewsByBrandMarketCategory(docsWithCountryAndCategory);
        }
      });
  }
);
