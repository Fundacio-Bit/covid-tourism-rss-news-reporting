var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== GERMAN MENTIONS OF CATEGORIES OF INTEREST FOR BALEAREN  ========

  //discarded and not discarded news
  let allDocsCW = docsCW.concat(discardedDocsCW);

  let tourismAndBothBalearenNewsFromGermany = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromGermany);

  let covidBalearenNewsFromGermany = allDocsCW
    .filter(utils.balearenMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromGermany);

  let categoriesOfInterestBalearenNewsFromGermany = tourismAndBothBalearenNewsFromGermany.concat(
    covidBalearenNewsFromGermany
  );

  let categoriesOfInterestBalearenMentionsFromGermany =
    categoriesOfInterestBalearenNewsFromGermany.length;

  let mentionsTourismBalearenFromGermanyPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromGermany,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsCovidBalearenFromGermanyPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromGermany,
    allDocsCW
      .filter(utils.balearenMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsBothBalearenFromGermanyPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromGermany,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromGermany).length
  );

  // ===== GERMAN MENTIONS OF CATEGORIES OF INTEREST BY ISLAND  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Mallorca
  let tourismAndBothMallorcaNewsFromGermany = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromGermany);

  let covidMallorcaNewsFromGermany = allDocsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromGermany);

  let categoriesOfInterestMallorcaNewsFromGermany = tourismAndBothMallorcaNewsFromGermany.concat(
    covidMallorcaNewsFromGermany
  );

  let categoriesOfInterestMallorcaMentionsFromGermany =
    categoriesOfInterestMallorcaNewsFromGermany.length;

  let mentionsTourismMallorcaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromGermany,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsCovidMallorcaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromGermany,
    allDocsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsBothMallorcaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromGermany,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromGermany).length
  );

  // Menorca
  let tourismAndBothMenorcaNewsFromGermany = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromGermany);

  let covidMenorcaNewsFromGermany = allDocsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromGermany);

  let categoriesOfInterestMenorcaNewsFromGermany = tourismAndBothMenorcaNewsFromGermany.concat(
    covidMenorcaNewsFromGermany
  );

  let categoriesOfInterestMenorcaMentionsFromGermany =
    categoriesOfInterestMenorcaNewsFromGermany.length;

  let mentionsTourismMenorcaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromGermany,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsCovidMenorcaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromGermany,
    allDocsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsBothMenorcaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromGermany,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromGermany).length
  );

  // Ibiza

  let tourismAndBothIbizaNewsFromGermany = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromGermany);

  let covidIbizaNewsFromGermany = allDocsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromGermany);

  let categoriesOfInterestIbizaNewsFromGermany = tourismAndBothIbizaNewsFromGermany.concat(
    covidIbizaNewsFromGermany
  );

  let categoriesOfInterestIbizaMentionsFromGermany =
    categoriesOfInterestIbizaNewsFromGermany.length;

  let mentionsTourismIbizaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromGermany,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsCovidIbizaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromGermany,
    allDocsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsBothIbizaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromGermany,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromGermany).length
  );

  // Formentera

  let tourismAndBothFormenteraNewsFromGermany = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromGermany);

  let covidFormenteraNewsFromGermany = allDocsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromGermany);

  let categoriesOfInterestFormenteraNewsFromGermany = tourismAndBothFormenteraNewsFromGermany.concat(
    covidFormenteraNewsFromGermany
  );

  let categoriesOfInterestFormenteraMentionsFromGermany =
    categoriesOfInterestFormenteraNewsFromGermany.length;

  let mentionsTourismFormenteraFromGermanyPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromGermany,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsCovidFormenteraFromGermanyPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromGermany,
    allDocsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsBothFormenteraFromGermanyPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromGermany,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromGermany).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV from Germany by island (Tourism, covid and covid+tourism)

  pageRows.push([
    "CONVERSA A MITJANS ALEMANYS PER ILLA (Turisme, covid i covid + turisme)",
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
    mentionsTourismMallorcaFromGermanyPercent,
    mentionsCovidMallorcaFromGermanyPercent,
    mentionsBothMallorcaFromGermanyPercent,
    categoriesOfInterestMallorcaMentionsFromGermany,
  ]);

  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaFromGermanyPercent,
    mentionsCovidMenorcaFromGermanyPercent,
    mentionsBothMenorcaFromGermanyPercent,
    categoriesOfInterestMenorcaMentionsFromGermany,
  ]);

  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaFromGermanyPercent,
    mentionsCovidIbizaFromGermanyPercent,
    mentionsBothIbizaFromGermanyPercent,
    categoriesOfInterestIbizaMentionsFromGermany,
  ]);

  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraFromGermanyPercent,
    mentionsCovidFormenteraFromGermanyPercent,
    mentionsBothFormenteraFromGermanyPercent,
    categoriesOfInterestFormenteraMentionsFromGermany,
  ]);

  pageRows.push([]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromGermanyPercent,
    mentionsCovidBalearenFromGermanyPercent,
    mentionsBothBalearenFromGermanyPercent,
    categoriesOfInterestBalearenMentionsFromGermany,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
