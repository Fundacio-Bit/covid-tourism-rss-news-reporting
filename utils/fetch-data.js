var MongoClient = require("mongodb").MongoClient;

// TODO: query jut one week

const fetchNewsData = (dbName, collectionName, fromData, toData) => {
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
        let from = new Date(fromData + " 00:00:00");
        let to = new Date(toData + " 00:00:00");
        let toQuery = new Date(to.setDate(to.getDate() + 1));
        let mongoQuery = {
          published: {
            $gte: from,
            $lt: toQuery,
          },
        };
        let mongoProjection = {
          projection: {
            _id: 0,
            extraction_date: 0,
            topics: 0,
            section: 0,
            source_name: 0,
            selected: 0,
          },
        };
        let collection = db.collection(collectionName);

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

const getNews = async (collection, fromDate, toDate) => {
  let escoltaActivaDBNews = await fetchNewsData(
    "rss_fbit_db",
    collection,
    fromDate,
    toDate
  );
  // return all news
  return escoltaActivaDBNews;
};

module.exports = { getNews };
