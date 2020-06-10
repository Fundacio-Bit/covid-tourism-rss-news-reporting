var csv_manager = require("./create-csv.js");
var utils = require("./utils/utils.js");

const getKPIs = (docsCW) => {
  // ===== AUSTRIAN MENTIONS OF CATEGORIES OF INTEREST FOR SPAIN AND BALEAREN  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Spain
  let categoriesOfInterestSpainNewsFromAustria = docsCW
    .filter(utils.spainMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromAustria);

  let categoriesOfInterestSpainMentionsFromAustria =
    categoriesOfInterestSpainNewsFromAustria.length;

  let mentionsTourismSpainFromAustriaPercent = utils.getPercent(
    categoriesOfInterestSpainMentionsFromAustria,
    docsCW
      .filter(utils.spainMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsCovidSpainFromAustriaPercent = utils.getPercent(
    categoriesOfInterestSpainMentionsFromAustria,
    docsCW
      .filter(utils.spainMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsBothSpainFromAustriaPercent = utils.getPercent(
    categoriesOfInterestSpainMentionsFromAustria,
    docsCW
      .filter(utils.spainMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromAustria).length
  );

  // Balearen
  let categoriesOfInterestBalearenNewsFromAustria = docsCW
    .filter(utils.balearenMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromAustria);

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
    docsCW
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
  let categoriesOfInterestMallorcaNewsFromAustria = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromAustria);

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
    docsCW
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
  let categoriesOfInterestMenorcaNewsFromAustria = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromAustria);

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
    docsCW
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
  let categoriesOfInterestIbizaNewsFromAustria = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromAustria);

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
    docsCW
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
  let categoriesOfInterestFormenteraNewsFromAustria = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromAustria);

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
    docsCW
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
  // SOV by country of Formentera
  pageRows.push([
    "MENCIONS A MITJANS AUSTRIACS (Turisme, covid i covid + turisme)",
  ]);
  pageRows.push(["", "Turisme", "COVID", "Turisme + COVID", "Mencions totals"]);
  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromAustriaPercent,
    mentionsCovidBalearenFromAustriaPercent,
    mentionsBothBalearenFromAustriaPercent,
    categoriesOfInterestBalearenMentionsFromAustria,
  ]);

  pageRows.push([
    "Espanya",
    mentionsTourismSpainFromAustriaPercent,
    mentionsCovidSpainFromAustriaPercent,
    mentionsBothSpainFromAustriaPercent,
    categoriesOfInterestSpainMentionsFromAustria,
  ]);

  pageRows.push([]);

  // SOV of Formentera (Tourism, covid and covid+tourism)
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

  // create the page 33 CSV
  csv_manager.create_csv("output/page33_news.csv", pageRows);
};

module.exports = { getKPIs };
