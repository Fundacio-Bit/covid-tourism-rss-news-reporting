var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== SPANISH MENTIONS OF CATEGORIES OF INTEREST FOR BALEAREN  ========

  let tourismBalearenNewsFromSpain = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSpain);

  let categoriesOfInterestBalearenNewsFromSpain =
    tourismBalearenNewsFromSpain;

  let categoriesOfInterestBalearenMentionsFromSpain =
    categoriesOfInterestBalearenNewsFromSpain.length;

  let mentionsTourismBalearenFromSpainPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromSpain,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  // ===== SPANISH MENTIONS OF CATEGORIES OF INTEREST BY ISLAND  ========
  // Categories of Interest = tourism

  // Mallorca
  let tourismMallorcaNewsFromSpain = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSpain);

  let categoriesOfInterestMallorcaNewsFromSpain = tourismMallorcaNewsFromSpain;

  let categoriesOfInterestMallorcaMentionsFromSpain = categoriesOfInterestMallorcaNewsFromSpain.length;

  let mentionsTourismMallorcaFromSpainPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromSpain,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  // Menorca
  let tourismMenorcaNewsFromSpain = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSpain);

  let categoriesOfInterestMenorcaNewsFromSpain = tourismMenorcaNewsFromSpain;

  let categoriesOfInterestMenorcaMentionsFromSpain = categoriesOfInterestMenorcaNewsFromSpain.length;

  let mentionsTourismMenorcaFromSpainPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromSpain,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  // Ibiza

  let tourismIbizaNewsFromSpain = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSpain);

  let categoriesOfInterestIbizaNewsFromSpain = tourismIbizaNewsFromSpain;

  let categoriesOfInterestIbizaMentionsFromSpain = categoriesOfInterestIbizaNewsFromSpain.length;

  let mentionsTourismIbizaFromSpainPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromSpain,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  // Formentera

  let tourismFormenteraNewsFromSpain = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSpain);

  let categoriesOfInterestFormenteraNewsFromSpain = tourismFormenteraNewsFromSpain;

  let categoriesOfInterestFormenteraMentionsFromSpain = categoriesOfInterestFormenteraNewsFromSpain.length;

  let mentionsTourismFormenteraFromSpainPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromSpain,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV from SPAIN by island (Tourism)

  pageRows.push([
    "CONVERSA A MITJANS ESPANYOLS PER ILLA (Turisme)",
  ]);
  pageRows.push([
    "Illa",
    "Turisme",
    "Mencions totals",
  ]);
  pageRows.push([
    "Mallorca",
    mentionsTourismMallorcaFromSpainPercent,
    categoriesOfInterestMallorcaMentionsFromSpain,
  ]);

  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaFromSpainPercent,
    categoriesOfInterestMenorcaMentionsFromSpain,
  ]);

  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaFromSpainPercent,
    categoriesOfInterestIbizaMentionsFromSpain,
  ]);

  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraFromSpainPercent,
    categoriesOfInterestFormenteraMentionsFromSpain,
  ]);

  pageRows.push([]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromSpainPercent,
    categoriesOfInterestBalearenMentionsFromSpain,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
