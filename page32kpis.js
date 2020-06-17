var csv_manager = require("./create-csv.js");
var utils = require("./utils/utils.js");

const getKPIs = (docsCW) => {
  // ===== SWISS MENTIONS OF CATEGORIES OF INTEREST FOR BALEAREN  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Balearen
  let categoriesOfInterestBalearenNewsFromSwitzerland = docsCW
    .filter(utils.balearenMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSwitzerland);

  let categoriesOfInterestBalearenMentionsFromSwitzerland =
    categoriesOfInterestBalearenNewsFromSwitzerland.length;

  let mentionsTourismBalearenFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromSwitzerland,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsCovidBalearenFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromSwitzerland,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsBothBalearenFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromSwitzerland,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // ===== SWISS MENTIONS OF CATEGORIES OF INTEREST BY ISLAND  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Mallorca
  let categoriesOfInterestMallorcaNewsFromSwitzerland = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSwitzerland);

  let categoriesOfInterestMallorcaMentionsFromSwitzerland =
    categoriesOfInterestMallorcaNewsFromSwitzerland.length;

  let mentionsTourismMallorcaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromSwitzerland,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsCovidMallorcaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromSwitzerland,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsBothMallorcaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromSwitzerland,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // Menorca
  let categoriesOfInterestMenorcaNewsFromSwitzerland = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSwitzerland);

  let categoriesOfInterestMenorcaMentionsFromSwitzerland =
    categoriesOfInterestMenorcaNewsFromSwitzerland.length;

  let mentionsTourismMenorcaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromSwitzerland,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsCovidMenorcaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromSwitzerland,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsBothMenorcaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromSwitzerland,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // Ibiza
  let categoriesOfInterestIbizaNewsFromSwitzerland = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSwitzerland);

  let categoriesOfInterestIbizaMentionsFromSwitzerland =
    categoriesOfInterestIbizaNewsFromSwitzerland.length;

  let mentionsTourismIbizaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromSwitzerland,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsCovidIbizaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromSwitzerland,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsBothIbizaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromSwitzerland,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // Formentera
  let categoriesOfInterestFormenteraNewsFromSwitzerland = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSwitzerland);

  let categoriesOfInterestFormenteraMentionsFromSwitzerland =
    categoriesOfInterestFormenteraNewsFromSwitzerland.length;

  let mentionsTourismFormenteraFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromSwitzerland,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsCovidFormenteraFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromSwitzerland,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsBothFormenteraFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromSwitzerland,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV from Switzerland by island (Tourism, covid and covid+tourism)

  pageRows.push([
    "CONVERSA A MITJANS SUÏSSOS PER ILLA (Turisme, covid i covid + turisme)",
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
    mentionsTourismMallorcaFromSwitzerlandPercent,
    mentionsCovidMallorcaFromSwitzerlandPercent,
    mentionsBothMallorcaFromSwitzerlandPercent,
    categoriesOfInterestMallorcaMentionsFromSwitzerland,
  ]);

  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaFromSwitzerlandPercent,
    mentionsCovidMenorcaFromSwitzerlandPercent,
    mentionsBothMenorcaFromSwitzerlandPercent,
    categoriesOfInterestMenorcaMentionsFromSwitzerland,
  ]);

  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaFromSwitzerlandPercent,
    mentionsCovidIbizaFromSwitzerlandPercent,
    mentionsBothIbizaFromSwitzerlandPercent,
    categoriesOfInterestIbizaMentionsFromSwitzerland,
  ]);

  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraFromSwitzerlandPercent,
    mentionsCovidFormenteraFromSwitzerlandPercent,
    mentionsBothFormenteraFromSwitzerlandPercent,
    categoriesOfInterestFormenteraMentionsFromSwitzerland,
  ]);

  pageRows.push([]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromSwitzerlandPercent,
    mentionsCovidBalearenFromSwitzerlandPercent,
    mentionsBothBalearenFromSwitzerlandPercent,
    categoriesOfInterestBalearenMentionsFromSwitzerland,
  ]);

  // create the page 32 CSV
  csv_manager.create_csv("output/page32_news.csv", pageRows);
};

module.exports = { getKPIs };
