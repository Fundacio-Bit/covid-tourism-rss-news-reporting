var moment = require("moment");

const getPercent = (total, part) => {
  return `${((parseFloat(part) * 100) / total).toFixed(2)}%`;
};

// mention to spain (in text)
const spainMention = (doc) => {
  return doc.brand.includes("españa");
};

const balearenMention = (doc) => {
  return (
    doc.brand.includes("baleares") |
    doc.brand.includes("mallorca") |
    doc.brand.includes("menorca") |
    doc.brand.includes("ibiza") |
    doc.brand.includes("formentera")
  );
};

// mentions done from a country source
const mentionFromSpain = (doc) => {
  return doc.country == "ES";
};

const mentionFromUnitedKingdom = (doc) => {
  return doc.country == "UK";
};

const mentionFromGermany = (doc) => {
  return doc.country == "DE";
};

const mentionFromItaly = (doc) => {
  return doc.country == "IT";
};
const mentionFromFrance = (doc) => {
  return doc.country == "FR";
};

const mentionFromSweden = (doc) => {
  return doc.country == "SE";
};

const mentionFromSwitzerland = (doc) => {
  return doc.country == "SZ";
};

const mentionFromNetherlands = (doc) => {
  return doc.country == "NL";
};

const mentionFromAustria = (doc) => {
  return doc.country == "AT";
};

// mentions belonging to a category

const categoriesOfInterest = (doc) => {
  return (
    (doc.category == "tourism") |
    (doc.category == "both") |
    (doc.category == "covid")
  );
};

const tourismAndBothCategories = (doc) => {
  return (doc.category == "tourism") | (doc.category == "both");
};

const tourismCategory = (doc) => {
  return doc.category == "tourism";
};

const bothCategory = (doc) => {
  return doc.category == "both";
};

const covidCategory = (doc) => {
  return doc.category == "covid";
};

const otherCategory = (doc) => {
  return doc.category == "none";
};

// Dates management
// const addDays = (days) => {
//   var date = new Date(this.valueOf());
//   date.setDate(date.getDate() + days);
//   return date;
// };

const getWeekDates = (startDate) => {
  let datesArray = [];
  moment.locale("ca");
  let currentDate = moment(startDate);
  for (i = 0; i < 7; i++) {
    datesArray.push(currentDate.format("ll"));
    currentDate = currentDate.add(1, "days");
  }
  return datesArray;
};

module.exports = {
  getPercent,
  spainMention,
  balearenMention,
  categoriesOfInterest,
  tourismAndBothCategories,
  tourismCategory,
  bothCategory,
  covidCategory,
  otherCategory,
  mentionFromSpain,
  mentionFromUnitedKingdom,
  mentionFromGermany,
  mentionFromItaly,
  mentionFromFrance,
  mentionFromSweden,
  mentionFromSwitzerland,
  mentionFromNetherlands,
  mentionFromAustria,
  getWeekDates,
};
