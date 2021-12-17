var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== SWEDISH MENTIONS OF CATEGORIES OF INTEREST FOR BALEAREN  ========

  let tourismBalearenNewsFromSweden = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSweden);

  let categoriesOfInterestBalearenNewsFromSweden = tourismBalearenNewsFromSweden;

  let categoriesOfInterestBalearenMentionsFromSweden = categoriesOfInterestBalearenNewsFromSweden.length;

  let mentionsTourismBalearenFromSwedenPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromSweden,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  // ===== SWEDISH MENTIONS OF CATEGORIES OF INTEREST BY ISLAND  ========
  // Categories of Interest = tourism

  // Mallorca
  let tourismMallorcaNewsFromSweden = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSweden);

  let categoriesOfInterestMallorcaNewsFromSweden = tourismMallorcaNewsFromSweden;

  let categoriesOfInterestMallorcaMentionsFromSweden = categoriesOfInterestMallorcaNewsFromSweden.length;

  let mentionsTourismMallorcaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromSweden,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  // Menorca
  let tourismMenorcaNewsFromSweden = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSweden);

  let categoriesOfInterestMenorcaNewsFromSweden = tourismMenorcaNewsFromSweden;

  let categoriesOfInterestMenorcaMentionsFromSweden = categoriesOfInterestMenorcaNewsFromSweden.length;

  let mentionsTourismMenorcaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromSweden,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  // Ibiza

  let tourismIbizaNewsFromSweden = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSweden);

  let categoriesOfInterestIbizaNewsFromSweden = tourismIbizaNewsFromSweden;

  let categoriesOfInterestIbizaMentionsFromSweden = categoriesOfInterestIbizaNewsFromSweden.length;

  let mentionsTourismIbizaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromSweden,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  // Formentera

  let tourismFormenteraNewsFromSweden = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSweden);

  let categoriesOfInterestFormenteraNewsFromSweden = tourismFormenteraNewsFromSweden;

  let categoriesOfInterestFormenteraMentionsFromSweden = categoriesOfInterestFormenteraNewsFromSweden.length;

  let mentionsTourismFormenteraFromSwedenPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromSweden,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV from SWEDEN by island (Tourism)

  pageRows.push([
    "CONVERSA A MITJANS SUECS PER ILLA (Turisme)",
  ]);
  pageRows.push([
    "Illa",
    "Turisme",
    "Mencions totals",
  ]);
  pageRows.push([
    "Mallorca",
    mentionsTourismMallorcaFromSwedenPercent,
    categoriesOfInterestMallorcaMentionsFromSweden,
  ]);

  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaFromSwedenPercent,
    categoriesOfInterestMenorcaMentionsFromSweden,
  ]);

  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaFromSwedenPercent,
    categoriesOfInterestIbizaMentionsFromSweden,
  ]);

  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraFromSwedenPercent,
    categoriesOfInterestFormenteraMentionsFromSweden,
  ]);

  pageRows.push([]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromSwedenPercent,
    categoriesOfInterestBalearenMentionsFromSweden,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
