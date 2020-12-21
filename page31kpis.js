var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== SWEDISH MENTIONS OF CATEGORIES OF INTEREST FOR BALEAREN  ========

  //discarded and not discarded news
  let allDocsCW = docsCW.concat(discardedDocsCW);

  let tourismAndBothBalearenNewsFromSweden = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSweden);

  let covidBalearenNewsFromSweden = allDocsCW
    .filter(utils.balearenMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSweden);

  let categoriesOfInterestBalearenNewsFromSweden = tourismAndBothBalearenNewsFromSweden.concat(
    covidBalearenNewsFromSweden
  );

  let categoriesOfInterestBalearenMentionsFromSweden =
    categoriesOfInterestBalearenNewsFromSweden.length;

  let mentionsTourismBalearenFromSwedenPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromSweden,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsCovidBalearenFromSwedenPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromSweden,
    allDocsCW
      .filter(utils.balearenMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsBothBalearenFromSwedenPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromSweden,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSweden).length
  );

  // ===== SWEDISH MENTIONS OF CATEGORIES OF INTEREST BY ISLAND  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Mallorca
  let tourismAndBothMallorcaNewsFromSweden = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSweden);

  let covidMallorcaNewsFromSweden = allDocsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSweden);

  let categoriesOfInterestMallorcaNewsFromSweden = tourismAndBothMallorcaNewsFromSweden.concat(
    covidMallorcaNewsFromSweden
  );

  let categoriesOfInterestMallorcaMentionsFromSweden =
    categoriesOfInterestMallorcaNewsFromSweden.length;

  let mentionsTourismMallorcaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromSweden,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsCovidMallorcaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromSweden,
    allDocsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsBothMallorcaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromSweden,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSweden).length
  );

  // Menorca
  let tourismAndBothMenorcaNewsFromSweden = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSweden);

  let covidMenorcaNewsFromSweden = allDocsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSweden);

  let categoriesOfInterestMenorcaNewsFromSweden = tourismAndBothMenorcaNewsFromSweden.concat(
    covidMenorcaNewsFromSweden
  );

  let categoriesOfInterestMenorcaMentionsFromSweden =
    categoriesOfInterestMenorcaNewsFromSweden.length;

  let mentionsTourismMenorcaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromSweden,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsCovidMenorcaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromSweden,
    allDocsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsBothMenorcaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromSweden,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSweden).length
  );

  // Ibiza

  let tourismAndBothIbizaNewsFromSweden = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSweden);

  let covidIbizaNewsFromSweden = allDocsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSweden);

  let categoriesOfInterestIbizaNewsFromSweden = tourismAndBothIbizaNewsFromSweden.concat(
    covidIbizaNewsFromSweden
  );

  let categoriesOfInterestIbizaMentionsFromSweden =
    categoriesOfInterestIbizaNewsFromSweden.length;

  let mentionsTourismIbizaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromSweden,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsCovidIbizaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromSweden,
    allDocsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsBothIbizaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromSweden,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSweden).length
  );

  // Formentera

  let tourismAndBothFormenteraNewsFromSweden = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSweden);

  let covidFormenteraNewsFromSweden = allDocsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSweden);

  let categoriesOfInterestFormenteraNewsFromSweden = tourismAndBothFormenteraNewsFromSweden.concat(
    covidFormenteraNewsFromSweden
  );

  let categoriesOfInterestFormenteraMentionsFromSweden =
    categoriesOfInterestFormenteraNewsFromSweden.length;

  let mentionsTourismFormenteraFromSwedenPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromSweden,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsCovidFormenteraFromSwedenPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromSweden,
    allDocsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsBothFormenteraFromSwedenPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromSweden,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSweden).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV from SWEDEN by island (Tourism, covid and covid+tourism)

  pageRows.push([
    "CONVERSA A MITJANS SUECS PER ILLA (Turisme, covid i covid + turisme)",
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
    mentionsTourismMallorcaFromSwedenPercent,
    mentionsCovidMallorcaFromSwedenPercent,
    mentionsBothMallorcaFromSwedenPercent,
    categoriesOfInterestMallorcaMentionsFromSweden,
  ]);

  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaFromSwedenPercent,
    mentionsCovidMenorcaFromSwedenPercent,
    mentionsBothMenorcaFromSwedenPercent,
    categoriesOfInterestMenorcaMentionsFromSweden,
  ]);

  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaFromSwedenPercent,
    mentionsCovidIbizaFromSwedenPercent,
    mentionsBothIbizaFromSwedenPercent,
    categoriesOfInterestIbizaMentionsFromSweden,
  ]);

  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraFromSwedenPercent,
    mentionsCovidFormenteraFromSwedenPercent,
    mentionsBothFormenteraFromSwedenPercent,
    categoriesOfInterestFormenteraMentionsFromSweden,
  ]);

  pageRows.push([]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromSwedenPercent,
    mentionsCovidBalearenFromSwedenPercent,
    mentionsBothBalearenFromSwedenPercent,
    categoriesOfInterestBalearenMentionsFromSweden,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
