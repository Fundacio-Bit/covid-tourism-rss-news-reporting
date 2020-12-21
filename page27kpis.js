var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== SPANISH MENTIONS OF CATEGORIES OF INTEREST FOR BALEAREN  ========

  //discarded and not discarded news
  let allDocsCW = docsCW.concat(discardedDocsCW);

  let tourismAndBothBalearenNewsFromSpain = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSpain);

  let covidBalearenNewsFromSpain = allDocsCW
    .filter(utils.balearenMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSpain);

  let categoriesOfInterestBalearenNewsFromSpain = tourismAndBothBalearenNewsFromSpain.concat(
    covidBalearenNewsFromSpain
  );

  let categoriesOfInterestBalearenMentionsFromSpain =
    categoriesOfInterestBalearenNewsFromSpain.length;

  let mentionsTourismBalearenFromSpainPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromSpain,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsCovidBalearenFromSpainPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromSpain,
    allDocsCW
      .filter(utils.balearenMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsBothBalearenFromSpainPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromSpain,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSpain).length
  );

  // ===== SPANISH MENTIONS OF CATEGORIES OF INTEREST BY ISLAND  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Mallorca
  let tourismAndBothMallorcaNewsFromSpain = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSpain);

  let covidMallorcaNewsFromSpain = allDocsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSpain);

  let categoriesOfInterestMallorcaNewsFromSpain = tourismAndBothMallorcaNewsFromSpain.concat(
    covidMallorcaNewsFromSpain
  );

  let categoriesOfInterestMallorcaMentionsFromSpain =
    categoriesOfInterestMallorcaNewsFromSpain.length;

  let mentionsTourismMallorcaFromSpainPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromSpain,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsCovidMallorcaFromSpainPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromSpain,
    allDocsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsBothMallorcaFromSpainPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromSpain,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSpain).length
  );

  // Menorca
  let tourismAndBothMenorcaNewsFromSpain = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSpain);

  let covidMenorcaNewsFromSpain = allDocsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSpain);

  let categoriesOfInterestMenorcaNewsFromSpain = tourismAndBothMenorcaNewsFromSpain.concat(
    covidMenorcaNewsFromSpain
  );

  let categoriesOfInterestMenorcaMentionsFromSpain =
    categoriesOfInterestMenorcaNewsFromSpain.length;

  let mentionsTourismMenorcaFromSpainPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromSpain,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsCovidMenorcaFromSpainPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromSpain,
    allDocsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsBothMenorcaFromSpainPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromSpain,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSpain).length
  );

  // Ibiza

  let tourismAndBothIbizaNewsFromSpain = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSpain);

  let covidIbizaNewsFromSpain = allDocsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSpain);

  let categoriesOfInterestIbizaNewsFromSpain = tourismAndBothIbizaNewsFromSpain.concat(
    covidIbizaNewsFromSpain
  );

  let categoriesOfInterestIbizaMentionsFromSpain =
    categoriesOfInterestIbizaNewsFromSpain.length;

  let mentionsTourismIbizaFromSpainPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromSpain,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsCovidIbizaFromSpainPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromSpain,
    allDocsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsBothIbizaFromSpainPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromSpain,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSpain).length
  );

  // Formentera

  let tourismAndBothFormenteraNewsFromSpain = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSpain);

  let covidFormenteraNewsFromSpain = allDocsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSpain);

  let categoriesOfInterestFormenteraNewsFromSpain = tourismAndBothFormenteraNewsFromSpain.concat(
    covidFormenteraNewsFromSpain
  );

  let categoriesOfInterestFormenteraMentionsFromSpain =
    categoriesOfInterestFormenteraNewsFromSpain.length;

  let mentionsTourismFormenteraFromSpainPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromSpain,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsCovidFormenteraFromSpainPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromSpain,
    allDocsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsBothFormenteraFromSpainPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromSpain,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSpain).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV from SPAIN by island (Tourism, covid and covid+tourism)

  pageRows.push([
    "CONVERSA A MITJANS ESPANYOLS PER ILLA (Turisme, covid i covid + turisme)",
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
    mentionsTourismMallorcaFromSpainPercent,
    mentionsCovidMallorcaFromSpainPercent,
    mentionsBothMallorcaFromSpainPercent,
    categoriesOfInterestMallorcaMentionsFromSpain,
  ]);

  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaFromSpainPercent,
    mentionsCovidMenorcaFromSpainPercent,
    mentionsBothMenorcaFromSpainPercent,
    categoriesOfInterestMenorcaMentionsFromSpain,
  ]);

  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaFromSpainPercent,
    mentionsCovidIbizaFromSpainPercent,
    mentionsBothIbizaFromSpainPercent,
    categoriesOfInterestIbizaMentionsFromSpain,
  ]);

  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraFromSpainPercent,
    mentionsCovidFormenteraFromSpainPercent,
    mentionsBothFormenteraFromSpainPercent,
    categoriesOfInterestFormenteraMentionsFromSpain,
  ]);

  pageRows.push([]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromSpainPercent,
    mentionsCovidBalearenFromSpainPercent,
    mentionsBothBalearenFromSpainPercent,
    categoriesOfInterestBalearenMentionsFromSpain,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
