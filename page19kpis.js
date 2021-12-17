var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== MENTIONS OF CATEGORIES OF INTEREST BY MARKET (ibiza)  ========
  // Categories of Interest = tourism

  //discarded and not discarded news
  let allDocsCW = docsCW.concat(discardedDocsCW);

  let tourismCategoryBalearenNews = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory);

  let categoriesOfInterestBalearenNews = tourismCategoryBalearenNews;

  let tourismCategoryIbizaNews = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismCategory);

  let categoriesOfInterestIbizaNews = tourismCategoryIbizaNews;

  let categoriesOfInterestBalearenMentions =
    categoriesOfInterestBalearenNews.length;

  let categoriesOfInterestIbizaMentions = categoriesOfInterestIbizaNews.length;

  // Spain
  let mentionsTourismIbizaFromSpain = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSpain).length;

  let mentionsCategoriesOfInterestIbizaFromSpain =
    mentionsTourismIbizaFromSpain;

  let mentionsTourismIbizaFromSpainPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromSpain,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  // United Kingdom
  let mentionsTourismIbizaFromUnitedKingdom = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromUnitedKingdom).length;

  let mentionsCategoriesOfInterestIbizaFromUnitedKingdom =
    mentionsTourismIbizaFromUnitedKingdom;

  let mentionsTourismIbizaFromUnitedKingdomPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromUnitedKingdom,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // Germany
  let mentionsTourismIbizaFromGermany = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromGermany).length;

  let mentionsCategoriesOfInterestIbizaFromGermany =
    mentionsTourismIbizaFromGermany;

  let mentionsTourismIbizaFromGermanyPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromGermany,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  // Italy
  let mentionsTourismIbizaFromItaly = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromItaly).length;

  let mentionsCategoriesOfInterestIbizaFromItaly =
    mentionsTourismIbizaFromItaly;

  let mentionsTourismIbizaFromItalyPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromItaly,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  // France
  let mentionsTourismIbizaFromFrance = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromFrance).length;

  let mentionsCategoriesOfInterestIbizaFromFrance =
    mentionsTourismIbizaFromFrance;

  let mentionsTourismIbizaFromFrancePercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromFrance,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  // Sweden
  let mentionsTourismIbizaFromSweden = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSweden).length;

  let mentionsCategoriesOfInterestIbizaFromSweden =
    mentionsTourismIbizaFromSweden;

  let mentionsTourismIbizaFromSwedenPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromSweden,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  // Switzerland
  let mentionsTourismIbizaFromSwitzerland = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSwitzerland).length;

  let mentionsCategoriesOfInterestIbizaFromSwitzerland =
    mentionsTourismIbizaFromSwitzerland;

  let mentionsTourismIbizaFromSwitzerlandPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromSwitzerland,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // Netherlands
  let mentionsTourismIbizaFromNetherlands = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromNetherlands).length;

  let mentionsCategoriesOfInterestIbizaFromNetherlands =
    mentionsTourismIbizaFromNetherlands;

  let mentionsTourismIbizaFromNetherlandsPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromNetherlands,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // Austria
  let mentionsTourismIbizaFromAustria = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromAustria).length;

  let mentionsCategoriesOfInterestIbizaFromAustria =
    mentionsTourismIbizaFromAustria;

  let mentionsTourismIbizaFromAustriaPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromAustria,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  // ===== MENTIONS OF CATEGORIES OF INTEREST (Ibiza)  ========
  // Categories of Interest = tourism

  // Ibiza
  let mentionsTourismIbizaPercent = utils.getPercent(
    categoriesOfInterestIbizaMentions,
    docsCW.filter(utils.ibizaIslandMention).filter(utils.tourismCategory).length
  );

  // Balearen (Balearic islands + Mallorca, Menorca + Ibiza + Formentera)
  let mentionsTourismBalearenPercent = utils.getPercent(
    categoriesOfInterestBalearenMentions,
    docsCW.filter(utils.balearenMention).filter(utils.tourismCategory).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV by country of Ibiza
  pageRows.push(["CONVERSA PER PAÏSOS DE IBIZA (Turisme)"]);
  pageRows.push(["Pais", "Turisme", "Mencions totals"]);
  pageRows.push([
    "España",
    mentionsTourismIbizaFromSpainPercent,
    mentionsCategoriesOfInterestIbizaFromSpain,
  ]);

  pageRows.push([
    "Regne Unit",
    mentionsTourismIbizaFromUnitedKingdomPercent,
    mentionsCategoriesOfInterestIbizaFromUnitedKingdom,
  ]);

  pageRows.push([
    "Alemanya",
    mentionsTourismIbizaFromGermanyPercent,
    mentionsCategoriesOfInterestIbizaFromGermany,
  ]);

  pageRows.push([
    "Itàlia",
    mentionsTourismIbizaFromItalyPercent,
    mentionsCategoriesOfInterestIbizaFromItaly,
  ]);

  pageRows.push([
    "França",
    mentionsTourismIbizaFromFrancePercent,
    mentionsCategoriesOfInterestIbizaFromFrance,
  ]);

  pageRows.push([
    "Suècia",
    mentionsTourismIbizaFromSwedenPercent,
    mentionsCategoriesOfInterestIbizaFromSweden,
  ]);

  pageRows.push([
    "Suïssa",
    mentionsTourismIbizaFromSwitzerlandPercent,
    mentionsCategoriesOfInterestIbizaFromSwitzerland,
  ]);

  pageRows.push([
    "Holanda",
    mentionsTourismIbizaFromNetherlandsPercent,
    mentionsCategoriesOfInterestIbizaFromNetherlands,
  ]);

  pageRows.push([
    "Austria",
    mentionsTourismIbizaFromAustriaPercent,
    mentionsCategoriesOfInterestIbizaFromAustria,
  ]);
  pageRows.push([]);

  // SOV of Ibiza (Tourism)
  pageRows.push(["MENCIONS DE IBIZA (Turisme)"]);
  pageRows.push(["", "Turisme", "Mencions totals"]);
  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaPercent,
    categoriesOfInterestIbizaMentions,
  ]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenPercent,
    categoriesOfInterestBalearenMentions,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
