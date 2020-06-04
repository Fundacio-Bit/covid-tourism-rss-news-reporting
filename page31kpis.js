var csv_manager = require("./create-csv.js");
var utils = require("./utils/utils.js");

const getKPIs = (docsCW) => {
  // ===== SWEDISH MENTIONS OF CATEGORIES OF INTEREST FOR SPAIN AND BALEAREN  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Spain
  let categoriesOfInterestSpainNewsFromSweden = docsCW
    .filter(utils.spainMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSweden);

  let categoriesOfInterestSpainMentionsFromSweden =
    categoriesOfInterestSpainNewsFromSweden.length;

  let mentionsTourismSpainFromSwedenPercent = utils.getPercent(
    categoriesOfInterestSpainMentionsFromSweden,
    docsCW
      .filter(utils.spainMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsCovidSpainFromSwedenPercent = utils.getPercent(
    categoriesOfInterestSpainMentionsFromSweden,
    docsCW
      .filter(utils.spainMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsBothSpainFromSwedenPercent = utils.getPercent(
    categoriesOfInterestSpainMentionsFromSweden,
    docsCW
      .filter(utils.spainMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSweden).length
  );

  // Balearen
  let categoriesOfInterestBalearenNewsFromSweden = docsCW
    .filter(utils.balearenMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSweden);

  let categoriesOfInterestBalearenMentionsFromSweden =
    categoriesOfInterestBalearenNewsFromSweden.length;

  let mentionsTourismBalearenFromSwedenPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromSweden,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsCovidBalearenFromSwedenPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromSweden,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsBothBalearenFromSwedenPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromSweden,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSweden).length
  );

  // ===== SWEDISH MENTIONS OF CATEGORIES OF INTEREST BY ISLAND  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Mallorca
  let categoriesOfInterestMallorcaNewsFromSweden = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSweden);

  let categoriesOfInterestMallorcaMentionsFromSweden =
    categoriesOfInterestMallorcaNewsFromSweden.length;

  let mentionsTourismMallorcaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromSweden,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsCovidMallorcaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromSweden,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsBothMallorcaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromSweden,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSweden).length
  );

  // Menorca
  let categoriesOfInterestMenorcaNewsFromSweden = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSweden);

  let categoriesOfInterestMenorcaMentionsFromSweden =
    categoriesOfInterestMenorcaNewsFromSweden.length;

  let mentionsTourismMenorcaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromSweden,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsCovidMenorcaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromSweden,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsBothMenorcaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromSweden,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSweden).length
  );

  // Ibiza
  let categoriesOfInterestIbizaNewsFromSweden = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSweden);

  let categoriesOfInterestIbizaMentionsFromSweden =
    categoriesOfInterestIbizaNewsFromSweden.length;

  let mentionsTourismIbizaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromSweden,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsCovidIbizaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromSweden,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsBothIbizaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromSweden,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSweden).length
  );

  // Formentera
  let categoriesOfInterestFormenteraNewsFromSweden = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSweden);

  let categoriesOfInterestFormenteraMentionsFromSweden =
    categoriesOfInterestFormenteraNewsFromSweden.length;

  let mentionsTourismFormenteraFromSwedenPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromSweden,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsCovidFormenteraFromSwedenPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromSweden,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsBothFormenteraFromSwedenPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromSweden,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSweden).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV by country of Formentera
  pageRows.push([
    "MENCIONS A MITJANS SUECS (Turisme, covid i covid + turisme)",
  ]);
  pageRows.push(["", "Turisme", "COVID", "Turisme + COVID", "Mencions totals"]);
  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromSwedenPercent,
    mentionsCovidBalearenFromSwedenPercent,
    mentionsBothBalearenFromSwedenPercent,
    categoriesOfInterestBalearenMentionsFromSweden,
  ]);

  pageRows.push([
    "Espanya",
    mentionsTourismSpainFromSwedenPercent,
    mentionsCovidSpainFromSwedenPercent,
    mentionsBothSpainFromSwedenPercent,
    categoriesOfInterestSpainMentionsFromSweden,
  ]);

  pageRows.push([]);

  // SOV of Formentera (Tourism, covid and covid+tourism)
  pageRows.push([
    "CONVERSA A MITJANS SUECS PER ILLA (Turisme, covid i covid + turisme)",
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
    mentionsTourismMallorcaFromSwedenPercent,
    mentionsCovidMallorcaFromSwedenPercent,
    mentionsBothMallorcaFromSwedenPercent,
    categoriesOfInterestMallorcaMentionsFromSweden,
  ]);

  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaFromSwedenPercent,
    mentionsCovidMenorcaFromSwedenPercent,
    mentionsBothMenorcaFromSwedenPercent,
    categoriesOfInterestMenorcaMentionsFromSweden,
  ]);

  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaFromSwedenPercent,
    mentionsCovidIbizaFromSwedenPercent,
    mentionsBothIbizaFromSwedenPercent,
    categoriesOfInterestIbizaMentionsFromSweden,
  ]);

  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraFromSwedenPercent,
    mentionsCovidFormenteraFromSwedenPercent,
    mentionsBothFormenteraFromSwedenPercent,
    categoriesOfInterestFormenteraMentionsFromSweden,
  ]);

  // create the page 31 CSV
  csv_manager.create_csv("output/page31_news.csv", pageRows);
};

module.exports = { getKPIs };