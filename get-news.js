// var mongo = require("mongodb");
var MongoClient = require("mongodb").MongoClient;
// var bodyParser = require("body-parser");

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
      _id: 1,
      published: 1,
      extraction_date: 1,
      brand: 1,
      title: 1,
      topics: 1,
      link: 1,
      summary: 1,
      description: 1,
      section: 1,
      source_id: 1,
      source_name: 1,
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
          console.log(docs);
        }
      });
  }
);
