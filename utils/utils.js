var moment = require("moment");

const getPercent = (total, part) => {
  if (total == 0) {
    return "0";
  } else {
    return ((parseFloat(part) * 100) / total)
      .toFixed(2)
      .toString()
      .replace(".", ",");
  }
};

// mention to brands (in text)
const balearenMention = (doc) => {
  if (doc && doc.hasOwnProperty("brand") && typeof doc.brand === "string") {
    if (
      doc.brand.includes("baleares") |
      doc.brand.includes("mallorca") |
      doc.brand.includes("menorca") |
      doc.brand.includes("ibiza") |
      doc.brand.includes("formentera")
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const mallorcaIslandMention = (doc) => {
  if (doc && doc.hasOwnProperty("brand") && typeof doc.brand === "string") {
    return doc.brand.includes("mallorca");
  } else {
    return false;
  }
};

const menorcaIslandMention = (doc) => {
  if (doc && doc.hasOwnProperty("brand") && typeof doc.brand === "string") {
    return doc.brand.includes("menorca");
  } else {
    return false;
  }
};

const ibizaIslandMention = (doc) => {
  if (doc && doc.hasOwnProperty("brand") && typeof doc.brand === "string") {
    return doc.brand.includes("ibiza");
  } else {
    return false;
  }
};

const formenteraIslandMention = (doc) => {
  if (doc && doc.hasOwnProperty("brand") && typeof doc.brand === "string") {
    return doc.brand.includes("formentera");
  } else {
    return false;
  }
};

// mentions done from a country source
const mentionFromSpain = (doc) => {
  if (doc && doc.hasOwnProperty("country") && typeof doc.country === "string") {
    return doc.country == "ES";
  } else {
    return false;
  }
};

const mentionFromUnitedKingdom = (doc) => {
  if (doc && doc.hasOwnProperty("country") && typeof doc.country === "string") {
    return doc.country == "UK";
  } else {
    return false;
  }
};

const mentionFromGermany = (doc) => {
  if (doc && doc.hasOwnProperty("country") && typeof doc.country === "string") {
    return doc.country == "DE";
  } else {
    return false;
  }
};

const mentionFromItaly = (doc) => {
  if (doc && doc.hasOwnProperty("country") && typeof doc.country === "string") {
    return doc.country == "IT";
  } else {
    return false;
  }
};
const mentionFromFrance = (doc) => {
  if (doc && doc.hasOwnProperty("country") && typeof doc.country === "string") {
    return doc.country == "FR";
  } else {
    return false;
  }
};

const mentionFromSweden = (doc) => {
  if (doc && doc.hasOwnProperty("country") && typeof doc.country === "string") {
    return doc.country == "SE";
  } else {
    return false;
  }
};

const mentionFromSwitzerland = (doc) => {
  if (doc && doc.hasOwnProperty("country") && typeof doc.country === "string") {
    return doc.country == "SZ";
  } else {
    return false;
  }
};

const mentionFromNetherlands = (doc) => {
  if (doc && doc.hasOwnProperty("country") && typeof doc.country === "string") {
    return doc.country == "NL";
  } else {
    return false;
  }
};

const mentionFromAustria = (doc) => {
  if (doc && doc.hasOwnProperty("country") && typeof doc.country === "string") {
    return doc.country == "AT";
  } else {
    return false;
  }
};

// mentions belonging to a category of interest (tourism)

const categoriesOfInterest = (doc) => {
  if (
    doc &&
    doc.hasOwnProperty("category") &&
    typeof doc.category === "string"
  ) {
    if (
      (doc.category == "tourism")
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// const tourismCategory = (doc) => {
//   if (
//     doc &&
//     doc.hasOwnProperty("category") &&
//     typeof doc.category === "string"
//   ) {
//     if ((doc.category == "tourism") | (doc.category == "both")) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// };

const tourismCategory = (doc) => {
  if (
    doc &&
    doc.hasOwnProperty("category") &&
    typeof doc.category === "string"
  ) {
    return doc.category == "tourism";
  } else {
    return false;
  }
};

const otherCategory = (doc) => {
  if (
    doc &&
    doc.hasOwnProperty("category") &&
    typeof doc.category === "string"
  ) {
    return doc.category == "none";
  } else {
    return false;
  }
};

// Dates management

const getWeekDates = (startDate) => {
  if (startDate === undefined || typeof startDate !== "string") {
    throw new Error("Start date should be a string");
  } else {
    let datesArray = [];
    moment.locale("ca");
    let currentDate = moment(startDate);
    for (i = 0; i < 7; i++) {
      datesArray.push(currentDate.format("ll"));
      currentDate = currentDate.add(1, "days");
    }
    return datesArray;
  }
};

const getWeekAgoDate = (startDate) => {
  let date_el = startDate.split("-");
  let weekAgoDate = new Date(
    new Date(date_el[0], date_el[1] - 1, date_el[2]) - 7 * 24 * 60 * 60 * 1000
  );
  return moment(weekAgoDate).format("YYYY-MM-DD");
};

const getLastWeekDay = (startDate) => {
  return moment(startDate).add(6, "days").format("YYYY-MM-DD");
};

module.exports = {
  getPercent,
  balearenMention,
  mallorcaIslandMention,
  menorcaIslandMention,
  ibizaIslandMention,
  formenteraIslandMention,
  categoriesOfInterest,
  tourismCategory,
  tourismCategory,
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
  getWeekAgoDate,
  getLastWeekDay,
};
