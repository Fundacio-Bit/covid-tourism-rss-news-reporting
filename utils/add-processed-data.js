// var categoriesDict = require("./categories-dictionary.js");
var moment = require("moment");
var newsContent = require("../utils/getNewsContent")
var deburr = require("lodash")

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

const hasCategoryTerm = (text, category_terms) => {
  for (i = 0; i < category_terms.length; i++) {
    // Check for exact match (search_mode should be "exacte")
    if (category_terms[i].search_mode === "exacte" &&
      new RegExp(
        "(\\W+|^)" + category_terms[i].term + "(\\W+|$)",
        "g"
      ).test(text.toLowerCase())) {
      return true;
    }

    // Check for partial match (search_mode should be "subcadena")
    else if (category_terms[i].search_mode === "subcadena" &&
      text.toLowerCase().includes(category_terms[i].term)) {
      return true;
    }
  }
  return false;
};

// TODO create an "unknown" category and exclude the docs with that category from the analysis
const addCategory = (newsArray, categoriesDict, exclusionTerms) => {
  // assign a category for each document after cheking if any term belonging to that category
  // appears in any content field (title, summary, description, content_value and tags).
  // Category values are: tourism.
  var exclusion_terms_list = exclusionTerms.map(function(obj) {
    return obj.term;
  });
  
  var newsFiltered = exclusion_terms_list.length > 0 
  ? newsArray.filter(obj => {
     const concatenatedTexts = deburr(newsContent.getText(obj));
     // Regexp to replace multiple spaces, tabs, newlines, etc with a single space.
     const has_exclusion_term = exclusion_terms_list.some( exclusion_term => concatenatedTexts.includes(deburr(exclusion_term.replace(/\s\s+/g, ' '))));
     return !has_exclusion_term
  })
  : newsArray

  newsFiltered.map((doc) => {
    const concatenatedTexts = newsContent.getText(doc);
    if (hasCategoryTerm(concatenatedTexts, categoriesDict["tourism"])) {
        doc.category = "tourism";
        return doc;
      } else {
        doc.category = "none";
        return doc;
      }
  });
  return newsFiltered;
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
