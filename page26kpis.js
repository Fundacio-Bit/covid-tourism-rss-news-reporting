var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== BRITISH MENTIONS OF CATEGORIES OF INTEREST FOR BALEAREN  ========

  //discarded and not discarded news
  let allDocsCW = docsCW.concat(discardedDocsCW);

  let tourismAndBothBalearenNewsFromUnitedKingdom = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromUnitedKingdom);

  let covidBalearenNewsFromUnitedKingdom = allDocsCW
    .filter(utils.balearenMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromUnitedKingdom);

  let categoriesOfInterestBalearenNewsFromUnitedKingdom = tourismAndBothBalearenNewsFromUnitedKingdom.concat(
    covidBalearenNewsFromUnitedKingdom
  );

  let categoriesOfInterestBalearenMentionsFromUnitedKingdom =
    categoriesOfInterestBalearenNewsFromUnitedKingdom.length;

  let mentionsTourismBalearenFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromUnitedKingdom,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsCovidBalearenFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromUnitedKingdom,
    allDocsCW
      .filter(utils.balearenMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsBothBalearenFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromUnitedKingdom,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // ===== BRITISH MENTIONS OF CATEGORIES OF INTEREST BY ISLAND  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Mallorca
  let tourismAndBothMallorcaNewsFromUnitedKingdom = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromUnitedKingdom);

  let covidMallorcaNewsFromUnitedKingdom = allDocsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromUnitedKingdom);

  let categoriesOfInterestMallorcaNewsFromUnitedKingdom = tourismAndBothMallorcaNewsFromUnitedKingdom.concat(
    covidMallorcaNewsFromUnitedKingdom
  );

  let categoriesOfInterestMallorcaMentionsFromUnitedKingdom =
    categoriesOfInterestMallorcaNewsFromUnitedKingdom.length;

  let mentionsTourismMallorcaFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromUnitedKingdom,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsCovidMallorcaFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromUnitedKingdom,
    allDocsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsBothMallorcaFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromUnitedKingdom,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // Menorca
  let tourismAndBothMenorcaNewsFromUnitedKingdom = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromUnitedKingdom);

  let covidMenorcaNewsFromUnitedKingdom = allDocsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromUnitedKingdom);

  let categoriesOfInterestMenorcaNewsFromUnitedKingdom = tourismAndBothMenorcaNewsFromUnitedKingdom.concat(
    covidMenorcaNewsFromUnitedKingdom
  );

  let categoriesOfInterestMenorcaMentionsFromUnitedKingdom =
    categoriesOfInterestMenorcaNewsFromUnitedKingdom.length;

  let mentionsTourismMenorcaFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromUnitedKingdom,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsCovidMenorcaFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromUnitedKingdom,
    allDocsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsBothMenorcaFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromUnitedKingdom,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // Ibiza

  let tourismAndBothIbizaNewsFromUnitedKingdom = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromUnitedKingdom);

  let covidIbizaNewsFromUnitedKingdom = allDocsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromUnitedKingdom);

  let categoriesOfInterestIbizaNewsFromUnitedKingdom = tourismAndBothIbizaNewsFromUnitedKingdom.concat(
    covidIbizaNewsFromUnitedKingdom
  );

  let categoriesOfInterestIbizaMentionsFromUnitedKingdom =
    categoriesOfInterestIbizaNewsFromUnitedKingdom.length;

  let mentionsTourismIbizaFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromUnitedKingdom,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsCovidIbizaFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromUnitedKingdom,
    allDocsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsBothIbizaFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromUnitedKingdom,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // Formentera

  let tourismAndBothFormenteraNewsFromUnitedKingdom = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromUnitedKingdom);

  let covidFormenteraNewsFromUnitedKingdom = allDocsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromUnitedKingdom);

  let categoriesOfInterestFormenteraNewsFromUnitedKingdom = tourismAndBothFormenteraNewsFromUnitedKingdom.concat(
    covidFormenteraNewsFromUnitedKingdom
  );

  let categoriesOfInterestFormenteraMentionsFromUnitedKingdom =
    categoriesOfInterestFormenteraNewsFromUnitedKingdom.length;

  let mentionsTourismFormenteraFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromUnitedKingdom,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsCovidFormenteraFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromUnitedKingdom,
    allDocsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsBothFormenteraFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromUnitedKingdom,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV from United Kingdom by island (Tourism, covid and covid+tourism)

  pageRows.push([
    "CONVERSA A MITJANS BRITÀNICS PER ILLA (Turisme, covid i covid + turisme)",
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
    mentionsTourismMallorcaFromUnitedKingdomPercent,
    mentionsCovidMallorcaFromUnitedKingdomPercent,
    mentionsBothMallorcaFromUnitedKingdomPercent,
    categoriesOfInterestMallorcaMentionsFromUnitedKingdom,
  ]);

  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaFromUnitedKingdomPercent,
    mentionsCovidMenorcaFromUnitedKingdomPercent,
    mentionsBothMenorcaFromUnitedKingdomPercent,
    categoriesOfInterestMenorcaMentionsFromUnitedKingdom,
  ]);

  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaFromUnitedKingdomPercent,
    mentionsCovidIbizaFromUnitedKingdomPercent,
    mentionsBothIbizaFromUnitedKingdomPercent,
    categoriesOfInterestIbizaMentionsFromUnitedKingdom,
  ]);

  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraFromUnitedKingdomPercent,
    mentionsCovidFormenteraFromUnitedKingdomPercent,
    mentionsBothFormenteraFromUnitedKingdomPercent,
    categoriesOfInterestFormenteraMentionsFromUnitedKingdom,
  ]);

  pageRows.push([]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromUnitedKingdomPercent,
    mentionsCovidBalearenFromUnitedKingdomPercent,
    mentionsBothBalearenFromUnitedKingdomPercent,
    categoriesOfInterestBalearenMentionsFromUnitedKingdom,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
