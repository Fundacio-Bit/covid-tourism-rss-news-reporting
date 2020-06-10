var csv_manager = require("./create-csv.js");
var utils = require("./utils/utils.js");

const getKPIs = (docsCW) => {
  // ===== GERMAN MENTIONS OF CATEGORIES OF INTEREST FOR SPAIN AND BALEAREN  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Spain
  let categoriesOfInterestSpainNewsFromGermany = docsCW
    .filter(utils.spainMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromGermany);

  let categoriesOfInterestSpainMentionsFromGermany =
    categoriesOfInterestSpainNewsFromGermany.length;

  let mentionsTourismSpainFromGermanyPercent = utils.getPercent(
    categoriesOfInterestSpainMentionsFromGermany,
    docsCW
      .filter(utils.spainMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsCovidSpainFromGermanyPercent = utils.getPercent(
    categoriesOfInterestSpainMentionsFromGermany,
    docsCW
      .filter(utils.spainMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsBothSpainFromGermanyPercent = utils.getPercent(
    categoriesOfInterestSpainMentionsFromGermany,
    docsCW
      .filter(utils.spainMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromGermany).length
  );

  // Balearen
  let categoriesOfInterestBalearenNewsFromGermany = docsCW
    .filter(utils.balearenMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromGermany);

  let categoriesOfInterestBalearenMentionsFromGermany =
    categoriesOfInterestBalearenNewsFromGermany.length;

  let mentionsTourismBalearenFromGermanyPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromGermany,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsCovidBalearenFromGermanyPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromGermany,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsBothBalearenFromGermanyPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromGermany,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromGermany).length
  );

  // ===== GERMAN MENTIONS OF CATEGORIES OF INTEREST BY ISLAND  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Mallorca
  let categoriesOfInterestMallorcaNewsFromGermany = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromGermany);

  let categoriesOfInterestMallorcaMentionsFromGermany =
    categoriesOfInterestMallorcaNewsFromGermany.length;

  let mentionsTourismMallorcaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromGermany,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsCovidMallorcaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromGermany,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsBothMallorcaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromGermany,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromGermany).length
  );

  // Menorca
  let categoriesOfInterestMenorcaNewsFromGermany = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromGermany);

  let categoriesOfInterestMenorcaMentionsFromGermany =
    categoriesOfInterestMenorcaNewsFromGermany.length;

  let mentionsTourismMenorcaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromGermany,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsCovidMenorcaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromGermany,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsBothMenorcaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromGermany,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromGermany).length
  );

  // Ibiza
  let categoriesOfInterestIbizaNewsFromGermany = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromGermany);

  let categoriesOfInterestIbizaMentionsFromGermany =
    categoriesOfInterestIbizaNewsFromGermany.length;

  let mentionsTourismIbizaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromGermany,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsCovidIbizaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromGermany,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsBothIbizaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromGermany,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromGermany).length
  );

  // Formentera
  let categoriesOfInterestFormenteraNewsFromGermany = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromGermany);

  let categoriesOfInterestFormenteraMentionsFromGermany =
    categoriesOfInterestFormenteraNewsFromGermany.length;

  let mentionsTourismFormenteraFromGermanyPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromGermany,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsCovidFormenteraFromGermanyPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromGermany,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsBothFormenteraFromGermanyPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromGermany,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromGermany).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV by country of Formentera
  pageRows.push([
    "MENCIONS A MITJANS ALEMANYS (Turisme, covid i covid + turisme)",
  ]);
  pageRows.push(["", "Turisme", "COVID", "Turisme + COVID", "Mencions totals"]);
  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromGermanyPercent,
    mentionsCovidBalearenFromGermanyPercent,
    mentionsBothBalearenFromGermanyPercent,
    categoriesOfInterestBalearenMentionsFromGermany,
  ]);

  pageRows.push([
    "Espanya",
    mentionsTourismSpainFromGermanyPercent,
    mentionsCovidSpainFromGermanyPercent,
    mentionsBothSpainFromGermanyPercent,
    categoriesOfInterestSpainMentionsFromGermany,
  ]);

  pageRows.push([]);

  // SOV of Formentera (Tourism, covid and covid+tourism)
  pageRows.push([
    "CONVERSA A MITJANS ALEMANYS PER ILLA (Turisme, covid i covid + turisme)",
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
    mentionsTourismMallorcaFromGermanyPercent,
    mentionsCovidMallorcaFromGermanyPercent,
    mentionsBothMallorcaFromGermanyPercent,
    categoriesOfInterestMallorcaMentionsFromGermany,
  ]);

  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaFromGermanyPercent,
    mentionsCovidMenorcaFromGermanyPercent,
    mentionsBothMenorcaFromGermanyPercent,
    categoriesOfInterestMenorcaMentionsFromGermany,
  ]);

  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaFromGermanyPercent,
    mentionsCovidIbizaFromGermanyPercent,
    mentionsBothIbizaFromGermanyPercent,
    categoriesOfInterestIbizaMentionsFromGermany,
  ]);

  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraFromGermanyPercent,
    mentionsCovidFormenteraFromGermanyPercent,
    mentionsBothFormenteraFromGermanyPercent,
    categoriesOfInterestFormenteraMentionsFromGermany,
  ]);

  // create the page 25 CSV
  csv_manager.create_csv("output/page25_news.csv", pageRows);
};

module.exports = { getKPIs };
