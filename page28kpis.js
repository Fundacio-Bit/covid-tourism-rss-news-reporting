var utils = require("./utils/utils.js");

const getKPIs = (docsCW) => {
  // ===== FRENCH MENTIONS OF CATEGORIES OF INTEREST FOR BALEAREN  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Balearen
  let categoriesOfInterestBalearenNewsFromFrance = docsCW
    .filter(utils.balearenMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromFrance);

  let categoriesOfInterestBalearenMentionsFromFrance =
    categoriesOfInterestBalearenNewsFromFrance.length;

  let mentionsTourismBalearenFromFrancePercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromFrance,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  let mentionsCovidBalearenFromFrancePercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromFrance,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromFrance).length
  );

  let mentionsBothBalearenFromFrancePercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromFrance,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromFrance).length
  );

  // ===== FRENCH MENTIONS OF CATEGORIES OF INTEREST BY ISLAND  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Mallorca
  let categoriesOfInterestMallorcaNewsFromFrance = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromFrance);

  let categoriesOfInterestMallorcaMentionsFromFrance =
    categoriesOfInterestMallorcaNewsFromFrance.length;

  let mentionsTourismMallorcaFromFrancePercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromFrance,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  let mentionsCovidMallorcaFromFrancePercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromFrance,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromFrance).length
  );

  let mentionsBothMallorcaFromFrancePercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromFrance,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromFrance).length
  );

  // Menorca
  let categoriesOfInterestMenorcaNewsFromFrance = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromFrance);

  let categoriesOfInterestMenorcaMentionsFromFrance =
    categoriesOfInterestMenorcaNewsFromFrance.length;

  let mentionsTourismMenorcaFromFrancePercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromFrance,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  let mentionsCovidMenorcaFromFrancePercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromFrance,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromFrance).length
  );

  let mentionsBothMenorcaFromFrancePercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromFrance,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromFrance).length
  );

  // Ibiza
  let categoriesOfInterestIbizaNewsFromFrance = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromFrance);

  let categoriesOfInterestIbizaMentionsFromFrance =
    categoriesOfInterestIbizaNewsFromFrance.length;

  let mentionsTourismIbizaFromFrancePercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromFrance,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  let mentionsCovidIbizaFromFrancePercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromFrance,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromFrance).length
  );

  let mentionsBothIbizaFromFrancePercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromFrance,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromFrance).length
  );

  // Formentera
  let categoriesOfInterestFormenteraNewsFromFrance = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromFrance);

  let categoriesOfInterestFormenteraMentionsFromFrance =
    categoriesOfInterestFormenteraNewsFromFrance.length;

  let mentionsTourismFormenteraFromFrancePercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromFrance,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  let mentionsCovidFormenteraFromFrancePercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromFrance,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromFrance).length
  );

  let mentionsBothFormenteraFromFrancePercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromFrance,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromFrance).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV from FRANCE by island (Tourism, covid and covid+tourism)

  pageRows.push([
    "CONVERSA A MITJANS FRANCESOS PER ILLA (Turisme, covid i covid + turisme)",
  ]);
  pageRows.push([
    "Illa",
    "Turisme",
    "COVID",
    "Turisme + COVID",
    "Mencions totals",
  ]);
  pageRows.push([
    "Mallorca",
    mentionsTourismMallorcaFromFrancePercent,
    mentionsCovidMallorcaFromFrancePercent,
    mentionsBothMallorcaFromFrancePercent,
    categoriesOfInterestMallorcaMentionsFromFrance,
  ]);

  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaFromFrancePercent,
    mentionsCovidMenorcaFromFrancePercent,
    mentionsBothMenorcaFromFrancePercent,
    categoriesOfInterestMenorcaMentionsFromFrance,
  ]);

  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaFromFrancePercent,
    mentionsCovidIbizaFromFrancePercent,
    mentionsBothIbizaFromFrancePercent,
    categoriesOfInterestIbizaMentionsFromFrance,
  ]);

  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraFromFrancePercent,
    mentionsCovidFormenteraFromFrancePercent,
    mentionsBothFormenteraFromFrancePercent,
    categoriesOfInterestFormenteraMentionsFromFrance,
  ]);

  pageRows.push([]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromFrancePercent,
    mentionsCovidBalearenFromFrancePercent,
    mentionsBothBalearenFromFrancePercent,
    categoriesOfInterestBalearenMentionsFromFrance,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
