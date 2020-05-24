var MongoClient = require("mongodb").MongoClient;

// TODO: query jut one week

const fetchNewsData = (dbName) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(
      "mongodb://localhost:27017/",
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
        // abort and report in case of error
        if (err) {
          reject(err);
        }
        // continue if connexion was successfull
        let db = client.db(dbName);
        let mongoQuery = {
          published: {
            $gte: new Date("2020-05-11T00:00:00.000Z"),
            $lt: new Date("2020-05-18T00:00:00.000Z"),
          },
        };
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
              // Close the connection
              client.close();
              reject(err);
            } else {
              // Close the connection
              client.close();
              resolve(docs);
            }
          });
      }
    );
  });
};

const getNews = async () => {
  let escoltaActivaDBNews = await fetchNewsData("rss_fbit_db");
  let covidTourismDBNewsNews = await fetchNewsData("rss_covid_tourism_db");
  // return all news
  return escoltaActivaDBNews.concat(covidTourismDBNewsNews);
};

module.exports = { getNews };
