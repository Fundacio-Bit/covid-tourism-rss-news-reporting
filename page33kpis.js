var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== AUSTRIAN MENTIONS OF CATEGORIES OF INTEREST FOR BALEAREN  ========

  let tourismBalearenNewsFromAustria = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromAustria);

  let categoriesOfInterestBalearenNewsFromAustria = tourismBalearenNewsFromAustria;

  let categoriesOfInterestBalearenMentionsFromAustria = categoriesOfInterestBalearenNewsFromAustria.length;

  let mentionsTourismBalearenFromAustriaPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromAustria,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  // ===== AUSTRIAN MENTIONS OF CATEGORIES OF INTEREST BY ISLAND  ========
  // Categories of Interest = tourism

  // Mallorca
  let tourismMallorcaNewsFromAustria = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromAustria);

  let categoriesOfInterestMallorcaNewsFromAustria = tourismMallorcaNewsFromAustria;

  let categoriesOfInterestMallorcaMentionsFromAustria = categoriesOfInterestMallorcaNewsFromAustria.length;

  let mentionsTourismMallorcaFromAustriaPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromAustria,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  // Menorca
  let tourismMenorcaNewsFromAustria = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromAustria);

  let categoriesOfInterestMenorcaNewsFromAustria = tourismMenorcaNewsFromAustria;

  let categoriesOfInterestMenorcaMentionsFromAustria = categoriesOfInterestMenorcaNewsFromAustria.length;

  let mentionsTourismMenorcaFromAustriaPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromAustria,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  // Ibiza

  let tourismIbizaNewsFromAustria = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromAustria);

  let categoriesOfInterestIbizaNewsFromAustria = tourismIbizaNewsFromAustria;

  let categoriesOfInterestIbizaMentionsFromAustria = categoriesOfInterestIbizaNewsFromAustria.length;

  let mentionsTourismIbizaFromAustriaPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromAustria,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  // Formentera

  let tourismFormenteraNewsFromAustria = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromAustria);

  let categoriesOfInterestFormenteraNewsFromAustria = tourismFormenteraNewsFromAustria;

  let categoriesOfInterestFormenteraMentionsFromAustria = categoriesOfInterestFormenteraNewsFromAustria.length;

  let mentionsTourismFormenteraFromAustriaPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromAustria,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV from AUSTRIAN by island (Tourism)

  pageRows.push([
    "CONVERSA A MITJANS AUSTRIACS PER ILLA (Turisme)",
  ]);
  pageRows.push([
    "Illa",
    "Turisme",
    "Mencions totals",
  ]);
  pageRows.push([
    "Mallorca",
    mentionsTourismMallorcaFromAustriaPercent,
    categoriesOfInterestMallorcaMentionsFromAustria,
  ]);

  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaFromAustriaPercent,
    categoriesOfInterestMenorcaMentionsFromAustria,
  ]);

  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaFromAustriaPercent,
    categoriesOfInterestIbizaMentionsFromAustria,
  ]);

  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraFromAustriaPercent,
    categoriesOfInterestFormenteraMentionsFromAustria,
  ]);

  pageRows.push([]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromAustriaPercent,
    categoriesOfInterestBalearenMentionsFromAustria,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
