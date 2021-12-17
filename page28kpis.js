var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== FRENCH MENTIONS OF CATEGORIES OF INTEREST FOR BALEAREN  ========

  let tourismBalearenNewsFromFrance = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromFrance);

  let categoriesOfInterestBalearenNewsFromFrance =
    tourismBalearenNewsFromFrance;

  let categoriesOfInterestBalearenMentionsFromFrance =
    categoriesOfInterestBalearenNewsFromFrance.length;

  let mentionsTourismBalearenFromFrancePercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromFrance,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  // ===== FRENCH MENTIONS OF CATEGORIES OF INTEREST BY ISLAND  ========
  // Categories of Interest = tourism

  // Mallorca
  let tourismMallorcaNewsFromFrance = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromFrance);

  let categoriesOfInterestMallorcaNewsFromFrance = tourismMallorcaNewsFromFrance;

  let categoriesOfInterestMallorcaMentionsFromFrance = categoriesOfInterestMallorcaNewsFromFrance.length;

  let mentionsTourismMallorcaFromFrancePercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromFrance,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  // Menorca
  let tourismMenorcaNewsFromFrance = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromFrance);

  let categoriesOfInterestMenorcaNewsFromFrance = tourismMenorcaNewsFromFrance;

  let categoriesOfInterestMenorcaMentionsFromFrance = categoriesOfInterestMenorcaNewsFromFrance.length;

  let mentionsTourismMenorcaFromFrancePercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromFrance,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  // Ibiza

  let tourismIbizaNewsFromFrance = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromFrance);

  let categoriesOfInterestIbizaNewsFromFrance = tourismIbizaNewsFromFrance;

  let categoriesOfInterestIbizaMentionsFromFrance = categoriesOfInterestIbizaNewsFromFrance.length;

  let mentionsTourismIbizaFromFrancePercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromFrance,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  // Formentera

  let tourismFormenteraNewsFromFrance = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromFrance);

  let categoriesOfInterestFormenteraNewsFromFrance = tourismFormenteraNewsFromFrance;

  let categoriesOfInterestFormenteraMentionsFromFrance = categoriesOfInterestFormenteraNewsFromFrance.length;

  let mentionsTourismFormenteraFromFrancePercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromFrance,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV from FRANCE by island (Tourism)

  pageRows.push([
    "CONVERSA A MITJANS FRANCESOS PER ILLA (Turisme)",
  ]);
  pageRows.push([
    "Illa",
    "Turisme",
    "Mencions totals",
  ]);
  pageRows.push([
    "Mallorca",
    mentionsTourismMallorcaFromFrancePercent,
    categoriesOfInterestMallorcaMentionsFromFrance,
  ]);

  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaFromFrancePercent,
    categoriesOfInterestMenorcaMentionsFromFrance,
  ]);

  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaFromFrancePercent,
    categoriesOfInterestIbizaMentionsFromFrance,
  ]);

  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraFromFrancePercent,
    categoriesOfInterestFormenteraMentionsFromFrance,
  ]);

  pageRows.push([]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromFrancePercent,
    categoriesOfInterestBalearenMentionsFromFrance,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
