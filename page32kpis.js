var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== SWISS MENTIONS OF CATEGORIES OF INTEREST FOR BALEAREN  ========

  //discarded and not discarded news
  let allDocsCW = docsCW.concat(discardedDocsCW);

  let tourismAndBothBalearenNewsFromSwitzerland = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSwitzerland);

  let covidBalearenNewsFromSwitzerland = allDocsCW
    .filter(utils.balearenMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSwitzerland);

  let categoriesOfInterestBalearenNewsFromSwitzerland = tourismAndBothBalearenNewsFromSwitzerland.concat(
    covidBalearenNewsFromSwitzerland
  );

  let categoriesOfInterestBalearenMentionsFromSwitzerland =
    categoriesOfInterestBalearenNewsFromSwitzerland.length;

  let mentionsTourismBalearenFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromSwitzerland,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsCovidBalearenFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromSwitzerland,
    allDocsCW
      .filter(utils.balearenMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsBothBalearenFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromSwitzerland,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // ===== SWISS MENTIONS OF CATEGORIES OF INTEREST BY ISLAND  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Mallorca
  let tourismAndBothMallorcaNewsFromSwitzerland = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSwitzerland);

  let covidMallorcaNewsFromSwitzerland = allDocsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSwitzerland);

  let categoriesOfInterestMallorcaNewsFromSwitzerland = tourismAndBothMallorcaNewsFromSwitzerland.concat(
    covidMallorcaNewsFromSwitzerland
  );

  let categoriesOfInterestMallorcaMentionsFromSwitzerland =
    categoriesOfInterestMallorcaNewsFromSwitzerland.length;

  let mentionsTourismMallorcaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromSwitzerland,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsCovidMallorcaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromSwitzerland,
    allDocsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsBothMallorcaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromSwitzerland,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // Menorca
  let tourismAndBothMenorcaNewsFromSwitzerland = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSwitzerland);

  let covidMenorcaNewsFromSwitzerland = allDocsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSwitzerland);

  let categoriesOfInterestMenorcaNewsFromSwitzerland = tourismAndBothMenorcaNewsFromSwitzerland.concat(
    covidMenorcaNewsFromSwitzerland
  );

  let categoriesOfInterestMenorcaMentionsFromSwitzerland =
    categoriesOfInterestMenorcaNewsFromSwitzerland.length;

  let mentionsTourismMenorcaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromSwitzerland,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsCovidMenorcaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromSwitzerland,
    allDocsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsBothMenorcaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromSwitzerland,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // Ibiza

  let tourismAndBothIbizaNewsFromSwitzerland = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSwitzerland);

  let covidIbizaNewsFromSwitzerland = allDocsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSwitzerland);

  let categoriesOfInterestIbizaNewsFromSwitzerland = tourismAndBothIbizaNewsFromSwitzerland.concat(
    covidIbizaNewsFromSwitzerland
  );

  let categoriesOfInterestIbizaMentionsFromSwitzerland =
    categoriesOfInterestIbizaNewsFromSwitzerland.length;

  let mentionsTourismIbizaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromSwitzerland,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsCovidIbizaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromSwitzerland,
    allDocsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsBothIbizaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromSwitzerland,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // Formentera

  let tourismAndBothFormenteraNewsFromSwitzerland = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSwitzerland);

  let covidFormenteraNewsFromSwitzerland = allDocsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSwitzerland);

  let categoriesOfInterestFormenteraNewsFromSwitzerland = tourismAndBothFormenteraNewsFromSwitzerland.concat(
    covidFormenteraNewsFromSwitzerland
  );

  let categoriesOfInterestFormenteraMentionsFromSwitzerland =
    categoriesOfInterestFormenteraNewsFromSwitzerland.length;

  let mentionsTourismFormenteraFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromSwitzerland,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsCovidFormenteraFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromSwitzerland,
    allDocsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsBothFormenteraFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromSwitzerland,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV from SWISS by island (Tourism, covid and covid+tourism)

  pageRows.push([
    "CONVERSA A MITJANS SUïSSOS PER ILLA (Turisme, covid i covid + turisme)",
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
    mentionsTourismMallorcaFromSwitzerlandPercent,
    mentionsCovidMallorcaFromSwitzerlandPercent,
    mentionsBothMallorcaFromSwitzerlandPercent,
    categoriesOfInterestMallorcaMentionsFromSwitzerland,
  ]);

  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaFromSwitzerlandPercent,
    mentionsCovidMenorcaFromSwitzerlandPercent,
    mentionsBothMenorcaFromSwitzerlandPercent,
    categoriesOfInterestMenorcaMentionsFromSwitzerland,
  ]);

  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaFromSwitzerlandPercent,
    mentionsCovidIbizaFromSwitzerlandPercent,
    mentionsBothIbizaFromSwitzerlandPercent,
    categoriesOfInterestIbizaMentionsFromSwitzerland,
  ]);

  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraFromSwitzerlandPercent,
    mentionsCovidFormenteraFromSwitzerlandPercent,
    mentionsBothFormenteraFromSwitzerlandPercent,
    categoriesOfInterestFormenteraMentionsFromSwitzerland,
  ]);

  pageRows.push([]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromSwitzerlandPercent,
    mentionsCovidBalearenFromSwitzerlandPercent,
    mentionsBothBalearenFromSwitzerlandPercent,
    categoriesOfInterestBalearenMentionsFromSwitzerland,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
