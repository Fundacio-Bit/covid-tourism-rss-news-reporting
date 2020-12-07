var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== AUSTRIAN MENTIONS OF CATEGORIES OF INTEREST FOR BALEAREN  ========

  //discarded and not discarded news
  let allDocsCW = docsCW.concat(discardedDocsCW);

  let tourismAndBothBalearenNewsFromAustria = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromAustria);

  let covidBalearenNewsFromAustria = allDocsCW
    .filter(utils.balearenMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromAustria);

  let categoriesOfInterestBalearenNewsFromAustria = tourismAndBothBalearenNewsFromAustria.concat(
    covidBalearenNewsFromAustria
  );

  let categoriesOfInterestBalearenMentionsFromAustria =
    categoriesOfInterestBalearenNewsFromAustria.length;

  let mentionsTourismBalearenFromAustriaPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromAustria,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsCovidBalearenFromAustriaPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromAustria,
    allDocsCW
      .filter(utils.balearenMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsBothBalearenFromAustriaPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromAustria,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromAustria).length
  );

  // ===== AUSTRIAN MENTIONS OF CATEGORIES OF INTEREST BY ISLAND  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Mallorca
  let tourismAndBothMallorcaNewsFromAustria = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromAustria);

  let covidMallorcaNewsFromAustria = allDocsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromAustria);

  let categoriesOfInterestMallorcaNewsFromAustria = tourismAndBothMallorcaNewsFromAustria.concat(
    covidMallorcaNewsFromAustria
  );

  let categoriesOfInterestMallorcaMentionsFromAustria =
    categoriesOfInterestMallorcaNewsFromAustria.length;

  let mentionsTourismMallorcaFromAustriaPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromAustria,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsCovidMallorcaFromAustriaPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromAustria,
    allDocsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsBothMallorcaFromAustriaPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromAustria,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromAustria).length
  );

  // Menorca
  let tourismAndBothMenorcaNewsFromAustria = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromAustria);

  let covidMenorcaNewsFromAustria = allDocsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromAustria);

  let categoriesOfInterestMenorcaNewsFromAustria = tourismAndBothMenorcaNewsFromAustria.concat(
    covidMenorcaNewsFromAustria
  );

  let categoriesOfInterestMenorcaMentionsFromAustria =
    categoriesOfInterestMenorcaNewsFromAustria.length;

  let mentionsTourismMenorcaFromAustriaPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromAustria,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsCovidMenorcaFromAustriaPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromAustria,
    allDocsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsBothMenorcaFromAustriaPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromAustria,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromAustria).length
  );

  // Ibiza

  let tourismAndBothIbizaNewsFromAustria = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromAustria);

  let covidIbizaNewsFromAustria = allDocsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromAustria);

  let categoriesOfInterestIbizaNewsFromAustria = tourismAndBothIbizaNewsFromAustria.concat(
    covidIbizaNewsFromAustria
  );

  let categoriesOfInterestIbizaMentionsFromAustria =
    categoriesOfInterestIbizaNewsFromAustria.length;

  let mentionsTourismIbizaFromAustriaPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromAustria,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsCovidIbizaFromAustriaPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromAustria,
    allDocsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsBothIbizaFromAustriaPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromAustria,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromAustria).length
  );

  // Formentera

  let tourismAndBothFormenteraNewsFromAustria = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromAustria);

  let covidFormenteraNewsFromAustria = allDocsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromAustria);

  let categoriesOfInterestFormenteraNewsFromAustria = tourismAndBothFormenteraNewsFromAustria.concat(
    covidFormenteraNewsFromAustria
  );

  let categoriesOfInterestFormenteraMentionsFromAustria =
    categoriesOfInterestFormenteraNewsFromAustria.length;

  let mentionsTourismFormenteraFromAustriaPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromAustria,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsCovidFormenteraFromAustriaPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromAustria,
    allDocsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsBothFormenteraFromAustriaPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromAustria,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromAustria).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV from AUSTRIAN by island (Tourism, covid and covid+tourism)

  pageRows.push([
    "CONVERSA A MITJANS AUSTRIACS PER ILLA (Turisme, covid i covid + turisme)",
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
    mentionsTourismMallorcaFromAustriaPercent,
    mentionsCovidMallorcaFromAustriaPercent,
    mentionsBothMallorcaFromAustriaPercent,
    categoriesOfInterestMallorcaMentionsFromAustria,
  ]);

  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaFromAustriaPercent,
    mentionsCovidMenorcaFromAustriaPercent,
    mentionsBothMenorcaFromAustriaPercent,
    categoriesOfInterestMenorcaMentionsFromAustria,
  ]);

  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaFromAustriaPercent,
    mentionsCovidIbizaFromAustriaPercent,
    mentionsBothIbizaFromAustriaPercent,
    categoriesOfInterestIbizaMentionsFromAustria,
  ]);

  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraFromAustriaPercent,
    mentionsCovidFormenteraFromAustriaPercent,
    mentionsBothFormenteraFromAustriaPercent,
    categoriesOfInterestFormenteraMentionsFromAustria,
  ]);

  pageRows.push([]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromAustriaPercent,
    mentionsCovidBalearenFromAustriaPercent,
    mentionsBothBalearenFromAustriaPercent,
    categoriesOfInterestBalearenMentionsFromAustria,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
