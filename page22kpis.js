var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== MENTIONS OF CATEGORIES OF INTEREST BY MARKET (formentera)  ========
  // Categories of Interest = tourism

  //discarded and not discarded news
  let allDocsCW = docsCW.concat(discardedDocsCW);

  let tourismBalearenNews = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory);

  let categoriesOfInterestBalearenNews = tourismBalearenNews;

  let tourismFormenteraNews = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismCategory);

  let categoriesOfInterestFormenteraNews = tourismFormenteraNews;

  let categoriesOfInterestBalearenMentions =
    categoriesOfInterestBalearenNews.length;

  let categoriesOfInterestFormenteraMentions =
    categoriesOfInterestFormenteraNews.length;

  // Spain
  let mentionsTourismFormenteraFromSpain = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSpain).length;

  let mentionsCategoriesOfInterestFormenteraFromSpain =
    mentionsTourismFormenteraFromSpain;

  let mentionsTourismFormenteraFromSpainPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromSpain,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  // United Kingdom
  let mentionsTourismFormenteraFromUnitedKingdom = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromUnitedKingdom).length;

  let mentionsCategoriesOfInterestFormenteraFromUnitedKingdom =
    mentionsTourismFormenteraFromUnitedKingdom;

  let mentionsTourismFormenteraFromUnitedKingdomPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromUnitedKingdom,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // Germany
  let mentionsTourismFormenteraFromGermany = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromGermany).length;

  let mentionsCategoriesOfInterestFormenteraFromGermany =
    mentionsTourismFormenteraFromGermany;

  let mentionsTourismFormenteraFromGermanyPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromGermany,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  // Italy
  let mentionsTourismFormenteraFromItaly = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromItaly).length;

  let mentionsCategoriesOfInterestFormenteraFromItaly =
    mentionsTourismFormenteraFromItaly;

  let mentionsTourismFormenteraFromItalyPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromItaly,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  // France
  let mentionsTourismFormenteraFromFrance = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromFrance).length;

  let mentionsCategoriesOfInterestFormenteraFromFrance =
    mentionsTourismFormenteraFromFrance;

  let mentionsTourismFormenteraFromFrancePercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromFrance,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  // Sweden
  let mentionsTourismFormenteraFromSweden = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSweden).length;

  let mentionsCategoriesOfInterestFormenteraFromSweden =
    mentionsTourismFormenteraFromSweden;

  let mentionsTourismFormenteraFromSwedenPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromSweden,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  // Switzerland
  let mentionsTourismFormenteraFromSwitzerland = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSwitzerland).length;

  let mentionsCategoriesOfInterestFormenteraFromSwitzerland =
    mentionsTourismFormenteraFromSwitzerland;

  let mentionsTourismFormenteraFromSwitzerlandPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromSwitzerland,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // Netherlands
  let mentionsTourismFormenteraFromNetherlands = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromNetherlands).length;

  let mentionsCategoriesOfInterestFormenteraFromNetherlands =
    mentionsTourismFormenteraFromNetherlands;

  let mentionsTourismFormenteraFromNetherlandsPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromNetherlands,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // Austria
  let mentionsTourismFormenteraFromAustria = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromAustria).length;

  let mentionsCategoriesOfInterestFormenteraFromAustria =
    mentionsTourismFormenteraFromAustria;

  let mentionsTourismFormenteraFromAustriaPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromAustria,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  // ===== MENTIONS OF CATEGORIES OF INTEREST (Formentera)  ========
  // Categories of Interest = tourism

  // Formentera
  let mentionsTourismFormenteraPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentions,
    docsCW.filter(utils.formenteraIslandMention).filter(utils.tourismCategory)
      .length
  );

  // Balearen (Balearic islands + Mallorca, Menorca + Formentera + Formentera)
  let mentionsTourismBalearenPercent = utils.getPercent(
    categoriesOfInterestBalearenMentions,
    docsCW.filter(utils.balearenMention).filter(utils.tourismCategory).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV by country of Formentera
  pageRows.push(["CONVERSA PER PAÏSOS DE FORMENTERA (Turisme)"]);
  pageRows.push(["Pais", "Turisme", "Mencions totals"]);
  pageRows.push([
    "España",
    mentionsTourismFormenteraFromSpainPercent,
    mentionsCategoriesOfInterestFormenteraFromSpain,
  ]);

  pageRows.push([
    "Regne Unit",
    mentionsTourismFormenteraFromUnitedKingdomPercent,
    mentionsCategoriesOfInterestFormenteraFromUnitedKingdom,
  ]);

  pageRows.push([
    "Alemanya",
    mentionsTourismFormenteraFromGermanyPercent,
    mentionsCategoriesOfInterestFormenteraFromGermany,
  ]);

  pageRows.push([
    "Itàlia",
    mentionsTourismFormenteraFromItalyPercent,
    mentionsCategoriesOfInterestFormenteraFromItaly,
  ]);

  pageRows.push([
    "França",
    mentionsTourismFormenteraFromFrancePercent,
    mentionsCategoriesOfInterestFormenteraFromFrance,
  ]);

  pageRows.push([
    "Suècia",
    mentionsTourismFormenteraFromSwedenPercent,
    mentionsCategoriesOfInterestFormenteraFromSweden,
  ]);

  pageRows.push([
    "Suïssa",
    mentionsTourismFormenteraFromSwitzerlandPercent,
    mentionsCategoriesOfInterestFormenteraFromSwitzerland,
  ]);

  pageRows.push([
    "Holanda",
    mentionsTourismFormenteraFromNetherlandsPercent,
    mentionsCategoriesOfInterestFormenteraFromNetherlands,
  ]);

  pageRows.push([
    "Austria",
    mentionsTourismFormenteraFromAustriaPercent,
    mentionsCategoriesOfInterestFormenteraFromAustria,
  ]);
  pageRows.push([]);

  // SOV of Formentera (Tourism)
  pageRows.push(["MENCIONS DE FORMENTERA (Turisme)"]);
  pageRows.push(["", "Turisme", "Mencions totals"]);
  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraPercent,
    categoriesOfInterestFormenteraMentions,
  ]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenPercent,
    categoriesOfInterestBalearenMentions,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
