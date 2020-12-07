var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== FRENCH MENTIONS OF CATEGORIES OF INTEREST FOR BALEAREN  ========

  //discarded and not discarded news
  let allDocsCW = docsCW.concat(discardedDocsCW);

  let tourismAndBothBalearenNewsFromFrance = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromFrance);

  let covidBalearenNewsFromFrance = allDocsCW
    .filter(utils.balearenMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromFrance);

  let categoriesOfInterestBalearenNewsFromFrance = tourismAndBothBalearenNewsFromFrance.concat(
    covidBalearenNewsFromFrance
  );

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
    allDocsCW
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
  let tourismAndBothMallorcaNewsFromFrance = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromFrance);

  let covidMallorcaNewsFromFrance = allDocsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromFrance);

  let categoriesOfInterestMallorcaNewsFromFrance = tourismAndBothMallorcaNewsFromFrance.concat(
    covidMallorcaNewsFromFrance
  );

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
    allDocsCW
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
  let tourismAndBothMenorcaNewsFromFrance = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromFrance);

  let covidMenorcaNewsFromFrance = allDocsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromFrance);

  let categoriesOfInterestMenorcaNewsFromFrance = tourismAndBothMenorcaNewsFromFrance.concat(
    covidMenorcaNewsFromFrance
  );

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
    allDocsCW
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

  let tourismAndBothIbizaNewsFromFrance = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromFrance);

  let covidIbizaNewsFromFrance = allDocsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromFrance);

  let categoriesOfInterestIbizaNewsFromFrance = tourismAndBothIbizaNewsFromFrance.concat(
    covidIbizaNewsFromFrance
  );

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
    allDocsCW
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

  let tourismAndBothFormenteraNewsFromFrance = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromFrance);

  let covidFormenteraNewsFromFrance = allDocsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromFrance);

  let categoriesOfInterestFormenteraNewsFromFrance = tourismAndBothFormenteraNewsFromFrance.concat(
    covidFormenteraNewsFromFrance
  );

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
    allDocsCW
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
