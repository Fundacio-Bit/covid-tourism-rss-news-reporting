var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== MENTIONS OF CATEGORIES OF INTEREST BY MARKET (Menorca)  ========
  // Categories of Interest = tourism

  //discarded and not discarded news
  let allDocsCW = docsCW.concat(discardedDocsCW);

  let tourismBalearenNews = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory);

  let categoriesOfInterestBalearenNews = tourismBalearenNews;

  let tourismMenorcaNews = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismCategory);

  let categoriesOfInterestMenorcaNews = tourismMenorcaNews;

  let categoriesOfInterestBalearenMentions =
    categoriesOfInterestBalearenNews.length;

  let categoriesOfInterestMenorcaMentions =
    categoriesOfInterestMenorcaNews.length;

  // Spain
  let mentionsTourismAndBothMenorcaFromSpain = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSpain).length;

  let mentionsCategoriesOfInterestMenorcaFromSpain =
    mentionsTourismAndBothMenorcaFromSpain;

  let mentionsTourismMenorcaFromSpainPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromSpain,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  // United Kingdom
  let mentionsTourismAndBothMenorcaFromUnitedKingdom = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromUnitedKingdom).length;

  let mentionsCategoriesOfInterestMenorcaFromUnitedKingdom =
    mentionsTourismAndBothMenorcaFromUnitedKingdom;

  let mentionsTourismMenorcaFromUnitedKingdomPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromUnitedKingdom,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // Germany
  let mentionsTourismAndBothMenorcaFromGermany = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromGermany).length;

  let mentionsCategoriesOfInterestMenorcaFromGermany =
    mentionsTourismAndBothMenorcaFromGermany;

  let mentionsTourismMenorcaFromGermanyPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromGermany,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  // Italy
  let mentionsTourismAndBothMenorcaFromItaly = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromItaly).length;

  let mentionsCategoriesOfInterestMenorcaFromItaly =
    mentionsTourismAndBothMenorcaFromItaly;

  let mentionsTourismMenorcaFromItalyPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromItaly,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  // France
  let mentionsTourismAndBothMenorcaFromFrance = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromFrance).length;

  let mentionsCategoriesOfInterestMenorcaFromFrance =
    mentionsTourismAndBothMenorcaFromFrance;

  let mentionsTourismMenorcaFromFrancePercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromFrance,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  // Sweden
  let mentionsTourismAndBothMenorcaFromSweden = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSweden).length;

  let mentionsCategoriesOfInterestMenorcaFromSweden =
    mentionsTourismAndBothMenorcaFromSweden;

  let mentionsTourismMenorcaFromSwedenPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromSweden,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  // Switzerland
  let mentionsTourismAndBothMenorcaFromSwitzerland = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSwitzerland).length;

  let mentionsCategoriesOfInterestMenorcaFromSwitzerland =
    mentionsTourismAndBothMenorcaFromSwitzerland;

  let mentionsTourismMenorcaFromSwitzerlandPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromSwitzerland,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // Netherlands
  let mentionsTourismAndBothMenorcaFromNetherlands = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromNetherlands).length;

  let mentionsCategoriesOfInterestMenorcaFromNetherlands =
    mentionsTourismAndBothMenorcaFromNetherlands;

  let mentionsTourismMenorcaFromNetherlandsPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromNetherlands,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // Austria
  let mentionsTourismAndBothMenorcaFromAustria = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromAustria).length;

  let mentionsCategoriesOfInterestMenorcaFromAustria =
    mentionsTourismAndBothMenorcaFromAustria;

  let mentionsTourismMenorcaFromAustriaPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromAustria,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  // ===== MENTIONS OF CATEGORIES OF INTEREST (Menorca)  ========
  // Categories of Interest = tourism

  // Menorca
  let mentionsTourismMenorcaPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentions,
    docsCW.filter(utils.menorcaIslandMention).filter(utils.tourismCategory)
      .length
  );

  // Balearen (Balearic islands + Menorca, Menorca + Ibiza + Formentera)
  let mentionsTourismBalearenPercent = utils.getPercent(
    categoriesOfInterestBalearenMentions,
    docsCW.filter(utils.balearenMention).filter(utils.tourismCategory).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV by country of Menorca
  pageRows.push(["CONVERSA PER PAÏSOS DE Menorca (Turisme)"]);
  pageRows.push(["Pais", "Turisme", "Mencions totals"]);
  pageRows.push([
    "España",
    mentionsTourismMenorcaFromSpainPercent,
    mentionsCategoriesOfInterestMenorcaFromSpain,
  ]);

  pageRows.push([
    "Regne Unit",
    mentionsTourismMenorcaFromUnitedKingdomPercent,
    mentionsCategoriesOfInterestMenorcaFromUnitedKingdom,
  ]);

  pageRows.push([
    "Alemanya",
    mentionsTourismMenorcaFromGermanyPercent,
    mentionsCategoriesOfInterestMenorcaFromGermany,
  ]);

  pageRows.push([
    "Itàlia",
    mentionsTourismMenorcaFromItalyPercent,
    mentionsCategoriesOfInterestMenorcaFromItaly,
  ]);

  pageRows.push([
    "França",
    mentionsTourismMenorcaFromFrancePercent,
    mentionsCategoriesOfInterestMenorcaFromFrance,
  ]);

  pageRows.push([
    "Suècia",
    mentionsTourismMenorcaFromSwedenPercent,
    mentionsCategoriesOfInterestMenorcaFromSweden,
  ]);

  pageRows.push([
    "Suïssa",
    mentionsTourismMenorcaFromSwitzerlandPercent,
    mentionsCategoriesOfInterestMenorcaFromSwitzerland,
  ]);

  pageRows.push([
    "Holanda",
    mentionsTourismMenorcaFromNetherlandsPercent,
    mentionsCategoriesOfInterestMenorcaFromNetherlands,
  ]);

  pageRows.push([
    "Austria",
    mentionsTourismMenorcaFromAustriaPercent,
    mentionsCategoriesOfInterestMenorcaFromAustria,
  ]);
  pageRows.push([]);

  // SOV of Menorca (Tourism)
  pageRows.push(["MENCIONS DE Menorca (Turisme)"]);
  pageRows.push(["", "Turisme", "Mencions totals"]);
  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaPercent,
    categoriesOfInterestMenorcaMentions,
  ]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenPercent,
    categoriesOfInterestBalearenMentions,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
