var csv_manager = require("./create-csv.js");
var utils = require("./utils/utils.js");

const getKPIs = (docsCW) => {
  // ===== SPANISH MENTIONS OF CATEGORIES OF INTEREST FOR SPAIN AND BALEAREN  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Spain
  let categoriesOfInterestSpainNewsFromSpain = docsCW
    .filter(utils.spainMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSpain);

  let categoriesOfInterestSpainMentionsFromSpain =
    categoriesOfInterestSpainNewsFromSpain.length;

  let mentionsTourismSpainFromSpainPercent = utils.getPercent(
    categoriesOfInterestSpainMentionsFromSpain,
    docsCW
      .filter(utils.spainMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsCovidSpainFromSpainPercent = utils.getPercent(
    categoriesOfInterestSpainMentionsFromSpain,
    docsCW
      .filter(utils.spainMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsBothSpainFromSpainPercent = utils.getPercent(
    categoriesOfInterestSpainMentionsFromSpain,
    docsCW
      .filter(utils.spainMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSpain).length
  );

  // Balearen
  let categoriesOfInterestBalearenNewsFromSpain = docsCW
    .filter(utils.balearenMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSpain);

  let categoriesOfInterestBalearenMentionsFromSpain =
    categoriesOfInterestBalearenNewsFromSpain.length;

  let mentionsTourismBalearenFromSpainPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromSpain,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsCovidBalearenFromSpainPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromSpain,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsBothBalearenFromSpainPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromSpain,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSpain).length
  );

  // ===== SPANISH MENTIONS OF CATEGORIES OF INTEREST BY ISLAND  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Mallorca
  let categoriesOfInterestMallorcaNewsFromSpain = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSpain);

  let categoriesOfInterestMallorcaMentionsFromSpain =
    categoriesOfInterestMallorcaNewsFromSpain.length;

  let mentionsTourismMallorcaFromSpainPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromSpain,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsCovidMallorcaFromSpainPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromSpain,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsBothMallorcaFromSpainPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromSpain,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSpain).length
  );

  // Menorca
  let categoriesOfInterestMenorcaNewsFromSpain = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSpain);

  let categoriesOfInterestMenorcaMentionsFromSpain =
    categoriesOfInterestMenorcaNewsFromSpain.length;

  let mentionsTourismMenorcaFromSpainPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromSpain,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsCovidMenorcaFromSpainPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromSpain,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsBothMenorcaFromSpainPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromSpain,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSpain).length
  );

  // Ibiza
  let categoriesOfInterestIbizaNewsFromSpain = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSpain);

  let categoriesOfInterestIbizaMentionsFromSpain =
    categoriesOfInterestIbizaNewsFromSpain.length;

  let mentionsTourismIbizaFromSpainPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromSpain,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsCovidIbizaFromSpainPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromSpain,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsBothIbizaFromSpainPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromSpain,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSpain).length
  );

  // Formentera
  let categoriesOfInterestFormenteraNewsFromSpain = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSpain);

  let categoriesOfInterestFormenteraMentionsFromSpain =
    categoriesOfInterestFormenteraNewsFromSpain.length;

  let mentionsTourismFormenteraFromSpainPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromSpain,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsCovidFormenteraFromSpainPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromSpain,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsBothFormenteraFromSpainPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromSpain,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSpain).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV by country of Formentera
  pageRows.push([
    "MENCIONS A MITJANS ESPANYOLS (Turisme, covid i covid + turisme)",
  ]);
  pageRows.push(["", "Turisme", "COVID", "Turisme + COVID", "Mencions totals"]);
  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromSpainPercent,
    mentionsCovidBalearenFromSpainPercent,
    mentionsBothBalearenFromSpainPercent,
    categoriesOfInterestBalearenMentionsFromSpain,
  ]);

  pageRows.push([
    "Espanya",
    mentionsTourismSpainFromSpainPercent,
    mentionsCovidSpainFromSpainPercent,
    mentionsBothSpainFromSpainPercent,
    categoriesOfInterestSpainMentionsFromSpain,
  ]);

  pageRows.push([]);

  // SOV of Formentera (Tourism, covid and covid+tourism)
  pageRows.push([
    "CONVERSA A MITJANS ESPANYOLS PER ILLA (Turisme, covid i covid + turisme)",
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
    mentionsTourismMallorcaFromSpainPercent,
    mentionsCovidMallorcaFromSpainPercent,
    mentionsBothMallorcaFromSpainPercent,
    categoriesOfInterestMallorcaMentionsFromSpain,
  ]);

  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaFromSpainPercent,
    mentionsCovidMenorcaFromSpainPercent,
    mentionsBothMenorcaFromSpainPercent,
    categoriesOfInterestMenorcaMentionsFromSpain,
  ]);

  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaFromSpainPercent,
    mentionsCovidIbizaFromSpainPercent,
    mentionsBothIbizaFromSpainPercent,
    categoriesOfInterestIbizaMentionsFromSpain,
  ]);

  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraFromSpainPercent,
    mentionsCovidFormenteraFromSpainPercent,
    mentionsBothFormenteraFromSpainPercent,
    categoriesOfInterestFormenteraMentionsFromSpain,
  ]);

  // create the page 27 CSV
  csv_manager.create_csv("output/page27_news.csv", pageRows);
};

module.exports = { getKPIs };