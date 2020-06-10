var csv_manager = require("./create-csv.js");
var utils = require("./utils/utils.js");

const getKPIs = (docsCW) => {
  // ===== DUTCH MENTIONS OF CATEGORIES OF INTEREST FOR SPAIN AND BALEAREN  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Spain
  let categoriesOfInterestSpainNewsFromNetherlands = docsCW
    .filter(utils.spainMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromNetherlands);

  let categoriesOfInterestSpainMentionsFromNetherlands =
    categoriesOfInterestSpainNewsFromNetherlands.length;

  let mentionsTourismSpainFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestSpainMentionsFromNetherlands,
    docsCW
      .filter(utils.spainMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsCovidSpainFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestSpainMentionsFromNetherlands,
    docsCW
      .filter(utils.spainMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsBothSpainFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestSpainMentionsFromNetherlands,
    docsCW
      .filter(utils.spainMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // Balearen
  let categoriesOfInterestBalearenNewsFromNetherlands = docsCW
    .filter(utils.balearenMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromNetherlands);

  let categoriesOfInterestBalearenMentionsFromNetherlands =
    categoriesOfInterestBalearenNewsFromNetherlands.length;

  let mentionsTourismBalearenFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromNetherlands,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsCovidBalearenFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromNetherlands,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsBothBalearenFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromNetherlands,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // ===== DUTCH MENTIONS OF CATEGORIES OF INTEREST BY ISLAND  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Mallorca
  let categoriesOfInterestMallorcaNewsFromNetherlands = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromNetherlands);

  let categoriesOfInterestMallorcaMentionsFromNetherlands =
    categoriesOfInterestMallorcaNewsFromNetherlands.length;

  let mentionsTourismMallorcaFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromNetherlands,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsCovidMallorcaFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromNetherlands,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsBothMallorcaFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromNetherlands,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // Menorca
  let categoriesOfInterestMenorcaNewsFromNetherlands = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromNetherlands);

  let categoriesOfInterestMenorcaMentionsFromNetherlands =
    categoriesOfInterestMenorcaNewsFromNetherlands.length;

  let mentionsTourismMenorcaFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromNetherlands,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsCovidMenorcaFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromNetherlands,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsBothMenorcaFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromNetherlands,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // Ibiza
  let categoriesOfInterestIbizaNewsFromNetherlands = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromNetherlands);

  let categoriesOfInterestIbizaMentionsFromNetherlands =
    categoriesOfInterestIbizaNewsFromNetherlands.length;

  let mentionsTourismIbizaFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromNetherlands,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsCovidIbizaFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromNetherlands,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsBothIbizaFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromNetherlands,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // Formentera
  let categoriesOfInterestFormenteraNewsFromNetherlands = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromNetherlands);

  let categoriesOfInterestFormenteraMentionsFromNetherlands =
    categoriesOfInterestFormenteraNewsFromNetherlands.length;

  let mentionsTourismFormenteraFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromNetherlands,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsCovidFormenteraFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromNetherlands,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsBothFormenteraFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromNetherlands,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV by country of Formentera
  pageRows.push([
    "MENCIONS A MITJANS HOLANDESOS (Turisme, covid i covid + turisme)",
  ]);
  pageRows.push(["", "Turisme", "COVID", "Turisme + COVID", "Mencions totals"]);
  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromNetherlandsPercent,
    mentionsCovidBalearenFromNetherlandsPercent,
    mentionsBothBalearenFromNetherlandsPercent,
    categoriesOfInterestBalearenMentionsFromNetherlands,
  ]);

  pageRows.push([
    "Espanya",
    mentionsTourismSpainFromNetherlandsPercent,
    mentionsCovidSpainFromNetherlandsPercent,
    mentionsBothSpainFromNetherlandsPercent,
    categoriesOfInterestSpainMentionsFromNetherlands,
  ]);

  pageRows.push([]);

  // SOV of Formentera (Tourism, covid and covid+tourism)
  pageRows.push([
    "CONVERSA A MITJANS HOLANDESOS PER ILLA (Turisme, covid i covid + turisme)",
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
    mentionsTourismMallorcaFromNetherlandsPercent,
    mentionsCovidMallorcaFromNetherlandsPercent,
    mentionsBothMallorcaFromNetherlandsPercent,
    categoriesOfInterestMallorcaMentionsFromNetherlands,
  ]);

  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaFromNetherlandsPercent,
    mentionsCovidMenorcaFromNetherlandsPercent,
    mentionsBothMenorcaFromNetherlandsPercent,
    categoriesOfInterestMenorcaMentionsFromNetherlands,
  ]);

  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaFromNetherlandsPercent,
    mentionsCovidIbizaFromNetherlandsPercent,
    mentionsBothIbizaFromNetherlandsPercent,
    categoriesOfInterestIbizaMentionsFromNetherlands,
  ]);

  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraFromNetherlandsPercent,
    mentionsCovidFormenteraFromNetherlandsPercent,
    mentionsBothFormenteraFromNetherlandsPercent,
    categoriesOfInterestFormenteraMentionsFromNetherlands,
  ]);

  // create the page 29 CSV
  csv_manager.create_csv("output/page29_news.csv", pageRows);
};

module.exports = { getKPIs };
