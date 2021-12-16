var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== SWISS MENTIONS OF CATEGORIES OF INTEREST FOR BALEAREN  ========

  let tourismBalearenNewsFromSwitzerland = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSwitzerland);

  let categoriesOfInterestBalearenNewsFromSwitzerland = tourismBalearenNewsFromSwitzerland;

  let categoriesOfInterestBalearenMentionsFromSwitzerland = categoriesOfInterestBalearenNewsFromSwitzerland.length;

  let mentionsTourismBalearenFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromSwitzerland,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // ===== SWISS MENTIONS OF CATEGORIES OF INTEREST BY ISLAND  ========
  // Categories of Interest = tourism

  // Mallorca
  let tourismMallorcaNewsFromSwitzerland = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSwitzerland);

  let categoriesOfInterestMallorcaNewsFromSwitzerland = tourismMallorcaNewsFromSwitzerland;

  let categoriesOfInterestMallorcaMentionsFromSwitzerland = categoriesOfInterestMallorcaNewsFromSwitzerland.length;

  let mentionsTourismMallorcaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromSwitzerland,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // Menorca
  let tourismMenorcaNewsFromSwitzerland = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSwitzerland);

  let categoriesOfInterestMenorcaNewsFromSwitzerland = tourismMenorcaNewsFromSwitzerland;

  let categoriesOfInterestMenorcaMentionsFromSwitzerland = categoriesOfInterestMenorcaNewsFromSwitzerland.length;

  let mentionsTourismMenorcaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromSwitzerland,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // Ibiza

  let tourismIbizaNewsFromSwitzerland = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSwitzerland);

  let categoriesOfInterestIbizaNewsFromSwitzerland = tourismIbizaNewsFromSwitzerland;

  let categoriesOfInterestIbizaMentionsFromSwitzerland = categoriesOfInterestIbizaNewsFromSwitzerland.length;

  let mentionsTourismIbizaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromSwitzerland,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // Formentera

  let tourismFormenteraNewsFromSwitzerland = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSwitzerland);

  let categoriesOfInterestFormenteraNewsFromSwitzerland = tourismFormenteraNewsFromSwitzerland;

  let categoriesOfInterestFormenteraMentionsFromSwitzerland = categoriesOfInterestFormenteraNewsFromSwitzerland.length;

  let mentionsTourismFormenteraFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromSwitzerland,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV from SWISS by island (Tourism)

  pageRows.push([
    "CONVERSA A MITJANS SUïSSOS PER ILLA (Turisme)",
  ]);
  pageRows.push([
    "Illa",
    "Turisme",
    "Mencions totals",
  ]);
  pageRows.push([
    "Mallorca",
    mentionsTourismMallorcaFromSwitzerlandPercent,
    categoriesOfInterestMallorcaMentionsFromSwitzerland,
  ]);

  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaFromSwitzerlandPercent,
    categoriesOfInterestMenorcaMentionsFromSwitzerland,
  ]);

  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaFromSwitzerlandPercent,
    categoriesOfInterestIbizaMentionsFromSwitzerland,
  ]);

  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraFromSwitzerlandPercent,
    categoriesOfInterestFormenteraMentionsFromSwitzerland,
  ]);

  pageRows.push([]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromSwitzerlandPercent,
    categoriesOfInterestBalearenMentionsFromSwitzerland,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
