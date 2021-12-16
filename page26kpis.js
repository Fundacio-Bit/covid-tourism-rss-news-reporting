var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== BRITISH MENTIONS OF CATEGORIES OF INTEREST FOR BALEAREN  ========

  let tourismBalearenNewsFromUnitedKingdom = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromUnitedKingdom);

  let categoriesOfInterestBalearenNewsFromUnitedKingdom =
    tourismBalearenNewsFromUnitedKingdom;

  let categoriesOfInterestBalearenMentionsFromUnitedKingdom =
    categoriesOfInterestBalearenNewsFromUnitedKingdom.length;

  let mentionsTourismBalearenFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromUnitedKingdom,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // ===== BRITISH MENTIONS OF CATEGORIES OF INTEREST BY ISLAND  ========
  // Categories of Interest = tourism

  // Mallorca
  let tourismMallorcaNewsFromUnitedKingdom = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromUnitedKingdom);

  let categoriesOfInterestMallorcaNewsFromUnitedKingdom =
    tourismMallorcaNewsFromUnitedKingdom;

  let categoriesOfInterestMallorcaMentionsFromUnitedKingdom =
    categoriesOfInterestMallorcaNewsFromUnitedKingdom.length;

  let mentionsTourismMallorcaFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromUnitedKingdom,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // Menorca
  let tourismMenorcaNewsFromUnitedKingdom = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromUnitedKingdom);

  let categoriesOfInterestMenorcaNewsFromUnitedKingdom =
    tourismMenorcaNewsFromUnitedKingdom;

  let categoriesOfInterestMenorcaMentionsFromUnitedKingdom =
    categoriesOfInterestMenorcaNewsFromUnitedKingdom.length;

  let mentionsTourismMenorcaFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromUnitedKingdom,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // Ibiza

  let tourismIbizaNewsFromUnitedKingdom = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromUnitedKingdom);

  let categoriesOfInterestIbizaNewsFromUnitedKingdom =
    tourismIbizaNewsFromUnitedKingdom;

  let categoriesOfInterestIbizaMentionsFromUnitedKingdom =
    categoriesOfInterestIbizaNewsFromUnitedKingdom.length;

  let mentionsTourismIbizaFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromUnitedKingdom,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // Formentera

  let tourismFormenteraNewsFromUnitedKingdom = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromUnitedKingdom);

  let categoriesOfInterestFormenteraNewsFromUnitedKingdom =
    tourismFormenteraNewsFromUnitedKingdom;

  let categoriesOfInterestFormenteraMentionsFromUnitedKingdom =
    categoriesOfInterestFormenteraNewsFromUnitedKingdom.length;

  let mentionsTourismFormenteraFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromUnitedKingdom,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV from United Kingdom by island (Tourism)

  pageRows.push(["CONVERSA A MITJANS BRITÀNICS PER ILLA (Turisme)"]);
  pageRows.push(["Illa", "Turisme", "Mencions totals"]);
  pageRows.push([
    "Mallorca",
    mentionsTourismMallorcaFromUnitedKingdomPercent,
    categoriesOfInterestMallorcaMentionsFromUnitedKingdom,
  ]);

  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaFromUnitedKingdomPercent,
    categoriesOfInterestMenorcaMentionsFromUnitedKingdom,
  ]);

  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaFromUnitedKingdomPercent,
    categoriesOfInterestIbizaMentionsFromUnitedKingdom,
  ]);

  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraFromUnitedKingdomPercent,
    categoriesOfInterestFormenteraMentionsFromUnitedKingdom,
  ]);

  pageRows.push([]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromUnitedKingdomPercent,
    categoriesOfInterestBalearenMentionsFromUnitedKingdom,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
