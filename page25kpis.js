var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== GERMAN MENTIONS OF CATEGORIES OF INTEREST FOR BALEAREN  ========

  let tourismBalearenNewsFromGermany = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromGermany);

  let categoriesOfInterestBalearenNewsFromGermany =
    tourismBalearenNewsFromGermany;

  let categoriesOfInterestBalearenMentionsFromGermany =
    categoriesOfInterestBalearenNewsFromGermany.length;

  let mentionsTourismBalearenFromGermanyPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromGermany,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  // ===== GERMAN MENTIONS OF CATEGORIES OF INTEREST BY ISLAND  ========
  // Categories of Interest = tourism

  // Mallorca
  let tourismMallorcaNewsFromGermany = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromGermany);

  let categoriesOfInterestMallorcaNewsFromGermany =
    tourismMallorcaNewsFromGermany;

  let categoriesOfInterestMallorcaMentionsFromGermany =
    categoriesOfInterestMallorcaNewsFromGermany.length;

  let mentionsTourismMallorcaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromGermany,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  // Menorca
  let tourismMenorcaNewsFromGermany = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromGermany);

  let categoriesOfInterestMenorcaNewsFromGermany =
    tourismMenorcaNewsFromGermany;

  let categoriesOfInterestMenorcaMentionsFromGermany =
    categoriesOfInterestMenorcaNewsFromGermany.length;

  let mentionsTourismMenorcaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromGermany,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  // Ibiza

  let tourismIbizaNewsFromGermany = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromGermany);

  let categoriesOfInterestIbizaNewsFromGermany = tourismIbizaNewsFromGermany;

  let categoriesOfInterestIbizaMentionsFromGermany =
    categoriesOfInterestIbizaNewsFromGermany.length;

  let mentionsTourismIbizaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromGermany,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  // Formentera

  let tourismFormenteraNewsFromGermany = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromGermany);

  let categoriesOfInterestFormenteraNewsFromGermany =
    tourismFormenteraNewsFromGermany;

  let categoriesOfInterestFormenteraMentionsFromGermany =
    categoriesOfInterestFormenteraNewsFromGermany.length;

  let mentionsTourismFormenteraFromGermanyPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromGermany,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV from Germany by island (Tourism)

  pageRows.push(["CONVERSA A MITJANS ALEMANYS PER ILLA (Turisme)"]);
  pageRows.push(["Illa", "Turisme", "Mencions totals"]);
  pageRows.push([
    "Mallorca",
    mentionsTourismMallorcaFromGermanyPercent,
    categoriesOfInterestMallorcaMentionsFromGermany,
  ]);

  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaFromGermanyPercent,
    categoriesOfInterestMenorcaMentionsFromGermany,
  ]);

  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaFromGermanyPercent,
    categoriesOfInterestIbizaMentionsFromGermany,
  ]);

  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraFromGermanyPercent,
    categoriesOfInterestFormenteraMentionsFromGermany,
  ]);

  pageRows.push([]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromGermanyPercent,
    categoriesOfInterestBalearenMentionsFromGermany,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
