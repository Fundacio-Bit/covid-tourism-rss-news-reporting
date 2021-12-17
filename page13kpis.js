var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== MENTIONS OF CATEGORIES OF INTEREST BY MARKET (MALLORCA)  ========
  // Categories of Interest = tourism

  //discarded and not discarded news
  let allDocsCW = docsCW.concat(discardedDocsCW);

  let tourismBalearenNews = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory);

  let categoriesOfInterestBalearenNews = tourismBalearenNews;

  let tourismMallorcaNews = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismCategory);

  let categoriesOfInterestMallorcaNews = tourismMallorcaNews;

  let categoriesOfInterestBalearenMentions =
    categoriesOfInterestBalearenNews.length;

  let categoriesOfInterestMallorcaMentions =
    categoriesOfInterestMallorcaNews.length;

  // Spain
  let mentionsTourismMallorcaFromSpain = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSpain).length;

  let mentionsCategoriesOfInterestMallorcaFromSpain =
    mentionsTourismMallorcaFromSpain;

  let mentionsTourismMallorcaFromSpainPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromSpain,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  // United Kingdom
  let mentionsTourismMallorcaFromUnitedKingdom = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromUnitedKingdom).length;

  let mentionsCategoriesOfInterestMallorcaFromUnitedKingdom =
    mentionsTourismMallorcaFromUnitedKingdom;

  let mentionsTourismMallorcaFromUnitedKingdomPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromUnitedKingdom,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // Germany
  let mentionsTourismMallorcaFromGermany = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromGermany).length;

  let mentionsCategoriesOfInterestMallorcaFromGermany =
    mentionsTourismMallorcaFromGermany;

  let mentionsTourismMallorcaFromGermanyPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromGermany,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  // Italy
  let mentionsTourismMallorcaFromItaly = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromItaly).length;

  let mentionsCategoriesOfInterestMallorcaFromItaly =
    mentionsTourismMallorcaFromItaly;

  let mentionsTourismMallorcaFromItalyPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromItaly,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  // France
  let mentionsTourismMallorcaFromFrance = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromFrance).length;

  let mentionsCategoriesOfInterestMallorcaFromFrance =
    mentionsTourismMallorcaFromFrance;

  let mentionsTourismMallorcaFromFrancePercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromFrance,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  // Sweden
  let mentionsTourismMallorcaFromSweden = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSweden).length;

  let mentionsCategoriesOfInterestMallorcaFromSweden =
    mentionsTourismMallorcaFromSweden;

  let mentionsTourismMallorcaFromSwedenPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromSweden,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  // Switzerland
  let mentionsTourismMallorcaFromSwitzerland = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSwitzerland).length;

  let mentionsCategoriesOfInterestMallorcaFromSwitzerland =
    mentionsTourismMallorcaFromSwitzerland;

  let mentionsTourismMallorcaFromSwitzerlandPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromSwitzerland,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // Netherlands
  let mentionsTourismMallorcaFromNetherlands = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromNetherlands).length;

  let mentionsCategoriesOfInterestMallorcaFromNetherlands =
    mentionsTourismMallorcaFromNetherlands;

  let mentionsTourismMallorcaFromNetherlandsPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromNetherlands,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // Austria
  let mentionsTourismMallorcaFromAustria = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromAustria).length;

  let mentionsCategoriesOfInterestMallorcaFromAustria =
    mentionsTourismMallorcaFromAustria;

  let mentionsTourismMallorcaFromAustriaPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromAustria,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  // ===== MENTIONS OF CATEGORIES OF INTEREST (MALLORCA)  ========
  // Categories of Interest = tourism

  // Mallorca
  let mentionsTourismMallorcaPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW.filter(utils.mallorcaIslandMention).filter(utils.tourismCategory)
      .length
  );

  // Balearen (Balearic islands + Mallorca, Menorca + Ibiza + Formentera)
  let mentionsTourismBalearenPercent = utils.getPercent(
    categoriesOfInterestBalearenMentions,
    docsCW.filter(utils.balearenMention).filter(utils.tourismCategory).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV by country of Mallorca
  pageRows.push(["CONVERSA PER PAÏSOS DE MALLORCA (Turisme)"]);
  pageRows.push(["Pais", "Turisme", "Mencions totals"]);
  pageRows.push([
    "España",
    mentionsTourismMallorcaFromSpainPercent,
    mentionsCategoriesOfInterestMallorcaFromSpain,
  ]);

  pageRows.push([
    "Regne Unit",
    mentionsTourismMallorcaFromUnitedKingdomPercent,
    mentionsCategoriesOfInterestMallorcaFromUnitedKingdom,
  ]);

  pageRows.push([
    "Alemanya",
    mentionsTourismMallorcaFromGermanyPercent,
    mentionsCategoriesOfInterestMallorcaFromGermany,
  ]);

  pageRows.push([
    "Itàlia",
    mentionsTourismMallorcaFromItalyPercent,
    mentionsCategoriesOfInterestMallorcaFromItaly,
  ]);

  pageRows.push([
    "França",
    mentionsTourismMallorcaFromFrancePercent,
    mentionsCategoriesOfInterestMallorcaFromFrance,
  ]);

  pageRows.push([
    "Suècia",
    mentionsTourismMallorcaFromSwedenPercent,
    mentionsCategoriesOfInterestMallorcaFromSweden,
  ]);

  pageRows.push([
    "Suïssa",
    mentionsTourismMallorcaFromSwitzerlandPercent,
    mentionsCategoriesOfInterestMallorcaFromSwitzerland,
  ]);

  pageRows.push([
    "Holanda",
    mentionsTourismMallorcaFromNetherlandsPercent,
    mentionsCategoriesOfInterestMallorcaFromNetherlands,
  ]);

  pageRows.push([
    "Austria",
    mentionsTourismMallorcaFromAustriaPercent,
    mentionsCategoriesOfInterestMallorcaFromAustria,
  ]);
  pageRows.push([]);

  // SOV of Mallorca (Tourism)
  pageRows.push(["MENCIONS DE MALLORCA (Turisme)"]);
  pageRows.push(["", "Turisme", "Mencions totals"]);
  pageRows.push([
    "Mallorca",
    mentionsTourismMallorcaPercent,
    categoriesOfInterestMallorcaMentions,
  ]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenPercent,
    categoriesOfInterestBalearenMentions,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
