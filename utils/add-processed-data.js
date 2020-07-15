var categoriesDict = require("./categories-dictionary.js");
var moment = require("moment");

const addCountry = (newsArray) => {
  // get country from source_id
  newsArray.map((doc) => {
    if (
      !("source_id" in doc) ||
      doc.source_id === undefined ||
      typeof doc.source_id !== "string" ||
      doc.source_id.split("_").length !== 3
    ) {
      doc.country = "unknown";
    } else if (doc.source_id.split("_")[1] == "AIR") {
      doc.country = "ES";
    } else {
      doc.country = doc.source_id.split("_")[1];
    }
    return doc;
  });
  return newsArray;
};

// TODO create an "unknown" category and exclude the docs with that categroy from the analysis
const addCategory = (newsArray) => {
  // assign a category for each document after cheking if any term belonging to that category
  // appears in any content field (title, summary, description, content_value and tags).
  // Category values are: covid, tourism, both and none.
  newsArray.map((doc) => {
    const title =
      "title" in doc && doc.title !== undefined && typeof doc.title === "string"
        ? doc.title
        : "";

    const summary =
      "summary" in doc &&
      doc.summary !== undefined &&
      typeof doc.summary === "string"
        ? doc.summary
        : "";

    const description =
      "description" in doc &&
      doc.description !== undefined &&
      typeof doc.description === "string"
        ? doc.description
        : "";

    const content_value =
      "content_value" in doc &&
      doc.content_value !== undefined &&
      typeof doc.content_value === "string"
        ? doc.content_value
        : "";

    const tags =
      "tags" in doc && doc.tags !== undefined && typeof doc.tags === "string"
        ? doc.tags
        : "";

    let concatenatedTexts =
      title +
      " " +
      summary +
      " " +
      description +
      " " +
      content_value +
      " " +
      tags;

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

// TODO control KPIs calculation for docs without publishedFormatted date
const addFormattedDate = (newsArray) => {
  // format date in catalan
  moment.locale("ca");
  newsArray.map((doc) => {
    if ("published" in doc && doc.published !== undefined) {
      doc.publishedFormatted = moment(doc.published).format("ll");
    }
    return doc;
  });
  return newsArray;
};

module.exports = { addCountry, addCategory, addFormattedDate };
