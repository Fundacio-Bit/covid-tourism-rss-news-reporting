var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== ITALIAN MENTIONS OF CATEGORIES OF INTEREST FOR BALEAREN  ========

  let tourismBalearenNewsFromItaly = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromItaly);

  let categoriesOfInterestBalearenNewsFromItaly = tourismBalearenNewsFromItaly;

  let categoriesOfInterestBalearenMentionsFromItaly = categoriesOfInterestBalearenNewsFromItaly.length;

  let mentionsTourismBalearenFromItalyPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromItaly,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  // ===== ITALIAN MENTIONS OF CATEGORIES OF INTEREST BY ISLAND  ========
  // Categories of Interest = tourism

  // Mallorca
  let tourismMallorcaNewsFromItaly = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromItaly);

  let categoriesOfInterestMallorcaNewsFromItaly = tourismMallorcaNewsFromItaly;

  let categoriesOfInterestMallorcaMentionsFromItaly = categoriesOfInterestMallorcaNewsFromItaly.length;

  let mentionsTourismMallorcaFromItalyPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromItaly,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  // Menorca
  let tourismMenorcaNewsFromItaly = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromItaly);

  let categoriesOfInterestMenorcaNewsFromItaly = tourismMenorcaNewsFromItaly;

  let categoriesOfInterestMenorcaMentionsFromItaly = categoriesOfInterestMenorcaNewsFromItaly.length;

  let mentionsTourismMenorcaFromItalyPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromItaly,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

 // Ibiza

  let tourismIbizaNewsFromItaly = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromItaly);

  let categoriesOfInterestIbizaNewsFromItaly = tourismIbizaNewsFromItaly;

  let categoriesOfInterestIbizaMentionsFromItaly = categoriesOfInterestIbizaNewsFromItaly.length;

  let mentionsTourismIbizaFromItalyPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromItaly,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  // Formentera

  let tourismFormenteraNewsFromItaly = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromItaly);

  let categoriesOfInterestFormenteraNewsFromItaly = tourismFormenteraNewsFromItaly;

  let categoriesOfInterestFormenteraMentionsFromItaly = categoriesOfInterestFormenteraNewsFromItaly.length;

  let mentionsTourismFormenteraFromItalyPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromItaly,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV from ITALY by island (Tourism)

  pageRows.push([
    "CONVERSA A MITJANS ITALIANS PER ILLA (Turisme)",
  ]);
  pageRows.push([
    "Illa",
    "Turisme",
    "Mencions totals",
  ]);
  pageRows.push([
    "Mallorca",
    mentionsTourismMallorcaFromItalyPercent,
    categoriesOfInterestMallorcaMentionsFromItaly,
  ]);

  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaFromItalyPercent,
    categoriesOfInterestMenorcaMentionsFromItaly,
  ]);

  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaFromItalyPercent,
    categoriesOfInterestIbizaMentionsFromItaly,
  ]);

  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraFromItalyPercent,
    categoriesOfInterestFormenteraMentionsFromItaly,
  ]);

  pageRows.push([]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromItalyPercent,
    categoriesOfInterestBalearenMentionsFromItaly,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
