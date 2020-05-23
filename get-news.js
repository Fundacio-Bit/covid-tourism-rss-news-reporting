var MongoClient = require("mongodb").MongoClient;
var d3 = require("d3");
var categoriesDict = require("./categories-dictionary.js");

let brands = [
  "mallorca",
  "menorca",
  "ibiza",
  "formentera",
  "baleares",
  "españa",
];

let getNewsPerBrandMarketCategory = (news) => {
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
          // get country from source_id
          let docsWithCountry = docs.map((doc) => {
            if (doc.source_id.includes("AIR")) {
              doc.country = "ES";
            } else {
              doc.country = doc.source_id.split("_")[1];
            }
            return doc;
          });

          let docsWithCountryAndCategory = docsWithCountry.map((doc) => {
            // assign a category for each document after cheking if any term belonging to that category appears in any
            // content field. Category values are: covid, tourism, both and none.
            let concatenatedTexts =
              doc.title +
              " " +
              doc.summary +
              " " +
              doc.description +
              " " +
              doc.content_value +
              " " +
              doc.tags;

            const hasCategoryTerm = (text, category_terms) => {
              for (i = 0; i < category_terms.length; i++) {
                if (text.toLowerCase().includes(category_terms[i])) {
                  return true;
                }
              }
              return false;
            };

            if (
              hasCategoryTerm(concatenatedTexts, categoriesDict["covid"]) &&
              hasCategoryTerm(concatenatedTexts, categoriesDict["tourism"])
            ) {
              doc.category = "both";
              return doc;
            } else if (
              hasCategoryTerm(concatenatedTexts, categoriesDict["covid"])
            ) {
              doc.category = "covid";
              return doc;
            } else if (
              hasCategoryTerm(concatenatedTexts, categoriesDict["tourism"])
            ) {
              doc.category = "tourism";
              return doc;
            } else {
              doc.category = "none";
              return doc;
            }
          });
          getNewsPerBrandMarketCategory(docsWithCountryAndCategory);
        }
      });
  }
);
