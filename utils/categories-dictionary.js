var MongoClient = require("mongodb").MongoClient;

const url = 'mongodb://localhost:27017';

const fetchData = (dbName, collectionName) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
      // abort and report in case of error
      if (err) {
        reject(err);
      }
      // continue if connexion was successfull
      let db = client.db(dbName);
      let collection = db.collection(collectionName);
      collection
      .find(
        {
        },
        {
          _id: 0,
          term: 1,
          search_mode: 1,
        }
      )
      // .sort({ published: -1 })
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
    });
  });
};

const getTerms = async () => {
  let categoriesDict = {}
  let terms = await fetchData(
    "rss_fbit_db",
    "dictionary"
  );
  categoriesDict["tourism"] = terms;
  return categoriesDict;
};

const getExclusionTerms = async () => {
  let exclusionTerms = await fetchData(
    "rss_fbit_db",
    "dictionary_exclusion_terms",
  );

  return exclusionTerms;
};

module.exports = { getTerms, getExclusionTerms };
