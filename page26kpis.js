var csv_manager = require("./create-csv.js");
var utils = require("./utils/utils.js");

const getKPIs = (docsCW) => {
  // ===== BRITISH MENTIONS OF CATEGORIES OF INTEREST FOR SPAIN AND BALEAREN  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Spain
  let categoriesOfInterestSpainNewsFromUnitedKingdom = docsCW
    .filter(utils.spainMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromUnitedKingdom);

  let categoriesOfInterestSpainMentionsFromUnitedKingdom =
    categoriesOfInterestSpainNewsFromUnitedKingdom.length;

  let mentionsTourismSpainFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestSpainMentionsFromUnitedKingdom,
    docsCW
      .filter(utils.spainMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsCovidSpainFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestSpainMentionsFromUnitedKingdom,
    docsCW
      .filter(utils.spainMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsBothSpainFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestSpainMentionsFromUnitedKingdom,
    docsCW
      .filter(utils.spainMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // Balearen
  let categoriesOfInterestBalearenNewsFromUnitedKingdom = docsCW
    .filter(utils.balearenMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromUnitedKingdom);

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
    docsCW
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
  let categoriesOfInterestMallorcaNewsFromUnitedKingdom = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromUnitedKingdom);

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
    docsCW
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
  let categoriesOfInterestMenorcaNewsFromUnitedKingdom = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromUnitedKingdom);

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
    docsCW
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
  let categoriesOfInterestIbizaNewsFromUnitedKingdom = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromUnitedKingdom);

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
    docsCW
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
  let categoriesOfInterestFormenteraNewsFromUnitedKingdom = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromUnitedKingdom);

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
    docsCW
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
  // SOV by country of Formentera
  pageRows.push([
    "MENCIONS A MITJANS BRITÀNICS (Turisme, covid i covid + turisme)",
  ]);
  pageRows.push(["", "Turisme", "COVID", "Turisme + COVID", "Mencions totals"]);
  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromUnitedKingdomPercent,
    mentionsCovidBalearenFromUnitedKingdomPercent,
    mentionsBothBalearenFromUnitedKingdomPercent,
    categoriesOfInterestBalearenMentionsFromUnitedKingdom,
  ]);

  pageRows.push([
    "Espanya",
    mentionsTourismSpainFromUnitedKingdomPercent,
    mentionsCovidSpainFromUnitedKingdomPercent,
    mentionsBothSpainFromUnitedKingdomPercent,
    categoriesOfInterestSpainMentionsFromUnitedKingdom,
  ]);

  pageRows.push([]);

  // SOV of Formentera (Tourism, covid and covid+tourism)
  pageRows.push([
    "CONVERSA  A MITJANS BRITÀNICS PER ILLA (Turisme, covid i covid + turisme)",
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

  // create the page 26 CSV
  csv_manager.create_csv("output/page26_news.csv", pageRows);
};

module.exports = { getKPIs };
