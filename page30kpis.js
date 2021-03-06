var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== ITALIAN MENTIONS OF CATEGORIES OF INTEREST FOR BALEAREN  ========

  //discarded and not discarded news
  let allDocsCW = docsCW.concat(discardedDocsCW);

  let tourismAndBothBalearenNewsFromItaly = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromItaly);

  let covidBalearenNewsFromItaly = allDocsCW
    .filter(utils.balearenMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromItaly);

  let categoriesOfInterestBalearenNewsFromItaly = tourismAndBothBalearenNewsFromItaly.concat(
    covidBalearenNewsFromItaly
  );

  let categoriesOfInterestBalearenMentionsFromItaly =
    categoriesOfInterestBalearenNewsFromItaly.length;

  let mentionsTourismBalearenFromItalyPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromItaly,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  let mentionsCovidBalearenFromItalyPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromItaly,
    allDocsCW
      .filter(utils.balearenMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromItaly).length
  );

  let mentionsBothBalearenFromItalyPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromItaly,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromItaly).length
  );

  // ===== ITALIAN MENTIONS OF CATEGORIES OF INTEREST BY ISLAND  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Mallorca
  let tourismAndBothMallorcaNewsFromItaly = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromItaly);

  let covidMallorcaNewsFromItaly = allDocsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromItaly);

  let categoriesOfInterestMallorcaNewsFromItaly = tourismAndBothMallorcaNewsFromItaly.concat(
    covidMallorcaNewsFromItaly
  );

  let categoriesOfInterestMallorcaMentionsFromItaly =
    categoriesOfInterestMallorcaNewsFromItaly.length;

  let mentionsTourismMallorcaFromItalyPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromItaly,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  let mentionsCovidMallorcaFromItalyPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromItaly,
    allDocsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromItaly).length
  );

  let mentionsBothMallorcaFromItalyPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromItaly,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromItaly).length
  );

  // Menorca
  let tourismAndBothMenorcaNewsFromItaly = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromItaly);

  let covidMenorcaNewsFromItaly = allDocsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromItaly);

  let categoriesOfInterestMenorcaNewsFromItaly = tourismAndBothMenorcaNewsFromItaly.concat(
    covidMenorcaNewsFromItaly
  );

  let categoriesOfInterestMenorcaMentionsFromItaly =
    categoriesOfInterestMenorcaNewsFromItaly.length;

  let mentionsTourismMenorcaFromItalyPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromItaly,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  let mentionsCovidMenorcaFromItalyPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromItaly,
    allDocsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromItaly).length
  );

  let mentionsBothMenorcaFromItalyPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromItaly,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromItaly).length
  );

  // Ibiza

  let tourismAndBothIbizaNewsFromItaly = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromItaly);

  let covidIbizaNewsFromItaly = allDocsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromItaly);

  let categoriesOfInterestIbizaNewsFromItaly = tourismAndBothIbizaNewsFromItaly.concat(
    covidIbizaNewsFromItaly
  );

  let categoriesOfInterestIbizaMentionsFromItaly =
    categoriesOfInterestIbizaNewsFromItaly.length;

  let mentionsTourismIbizaFromItalyPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromItaly,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  let mentionsCovidIbizaFromItalyPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromItaly,
    allDocsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromItaly).length
  );

  let mentionsBothIbizaFromItalyPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromItaly,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromItaly).length
  );

  // Formentera

  let tourismAndBothFormenteraNewsFromItaly = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromItaly);

  let covidFormenteraNewsFromItaly = allDocsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromItaly);

  let categoriesOfInterestFormenteraNewsFromItaly = tourismAndBothFormenteraNewsFromItaly.concat(
    covidFormenteraNewsFromItaly
  );

  let categoriesOfInterestFormenteraMentionsFromItaly =
    categoriesOfInterestFormenteraNewsFromItaly.length;

  let mentionsTourismFormenteraFromItalyPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromItaly,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  let mentionsCovidFormenteraFromItalyPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromItaly,
    allDocsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromItaly).length
  );

  let mentionsBothFormenteraFromItalyPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromItaly,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromItaly).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV from ITALY by island (Tourism, covid and covid+tourism)

  pageRows.push([
    "CONVERSA A MITJANS ITALIANS PER ILLA (Turisme, covid i covid + turisme)",
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
    mentionsTourismMallorcaFromItalyPercent,
    mentionsCovidMallorcaFromItalyPercent,
    mentionsBothMallorcaFromItalyPercent,
    categoriesOfInterestMallorcaMentionsFromItaly,
  ]);

  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaFromItalyPercent,
    mentionsCovidMenorcaFromItalyPercent,
    mentionsBothMenorcaFromItalyPercent,
    categoriesOfInterestMenorcaMentionsFromItaly,
  ]);

  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaFromItalyPercent,
    mentionsCovidIbizaFromItalyPercent,
    mentionsBothIbizaFromItalyPercent,
    categoriesOfInterestIbizaMentionsFromItaly,
  ]);

  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraFromItalyPercent,
    mentionsCovidFormenteraFromItalyPercent,
    mentionsBothFormenteraFromItalyPercent,
    categoriesOfInterestFormenteraMentionsFromItaly,
  ]);

  pageRows.push([]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromItalyPercent,
    mentionsCovidBalearenFromItalyPercent,
    mentionsBothBalearenFromItalyPercent,
    categoriesOfInterestBalearenMentionsFromItaly,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
