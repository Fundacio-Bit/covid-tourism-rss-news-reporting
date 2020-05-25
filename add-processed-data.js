var categoriesDict = require("./categories-dictionary.js");
var moment = require("moment");

const addCountry = (newsArray) => {
  // get country from source_id
  newsArray.map((doc) => {
    if (!("source_id" in doc)) {
      doc.country = "unknown";
    } else if (doc.source_id.includes("AIR")) {
      doc.country = "ES";
    } else {
      doc.country = doc.source_id.split("_")[1];
    }
    return doc;
  });
  return newsArray;
};

const addCategory = (newsArray) => {
  // assign a category for each document after cheking if any term belonging to that category
  // appears in any content field (title, summary, description, content_value and tags).
  // Category values are: covid, tourism, both and none.
  newsArray.map((doc) => {
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
    } else if (hasCategoryTerm(concatenatedTexts, categoriesDict["covid"])) {
      doc.category = "covid";
      return doc;
    } else if (hasCategoryTerm(concatenatedTexts, categoriesDict["tourism"])) {
      doc.category = "tourism";
      return doc;
    } else {
      doc.category = "none";
      return doc;
    }
  });
  return newsArray;
};

const addFormattedDate = (newsArray) => {
  // format date in catalan
  moment.locale("ca");
  newsArray.map((doc) => {
    doc.publishedFormatted = moment(doc.published).format("ll");
    return doc;
  });
  return newsArray;
};

module.exports = { addCountry, addCategory, addFormattedDate };
