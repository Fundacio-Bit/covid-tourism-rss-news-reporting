var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== DUTCH MENTIONS OF CATEGORIES OF INTEREST FOR BALEAREN  ========

  let tourismBalearenNewsFromNetherlands = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromNetherlands);

  let categoriesOfInterestBalearenNewsFromNetherlands = tourismBalearenNewsFromNetherlands;

  let categoriesOfInterestBalearenMentionsFromNetherlands = categoriesOfInterestBalearenNewsFromNetherlands.length;

  let mentionsTourismBalearenFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestBalearenMentionsFromNetherlands,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // ===== DUTCH MENTIONS OF CATEGORIES OF INTEREST BY ISLAND  ========
  // Categories of Interest = tourism

  // Mallorca
  let tourismMallorcaNewsFromNetherlands = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromNetherlands);

  let categoriesOfInterestMallorcaNewsFromNetherlands = tourismMallorcaNewsFromNetherlands;

  let categoriesOfInterestMallorcaMentionsFromNetherlands =
    categoriesOfInterestMallorcaNewsFromNetherlands.length;

  let mentionsTourismMallorcaFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentionsFromNetherlands,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // Menorca
  let tourismMenorcaNewsFromNetherlands = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromNetherlands);

  let categoriesOfInterestMenorcaNewsFromNetherlands =
    tourismMenorcaNewsFromNetherlands;

  let categoriesOfInterestMenorcaMentionsFromNetherlands =
    categoriesOfInterestMenorcaNewsFromNetherlands.length;

  let mentionsTourismMenorcaFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentionsFromNetherlands,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // Ibiza

  let tourismIbizaNewsFromNetherlands = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromNetherlands);

  let categoriesOfInterestIbizaNewsFromNetherlands = tourismIbizaNewsFromNetherlands;

  let categoriesOfInterestIbizaMentionsFromNetherlands = categoriesOfInterestIbizaNewsFromNetherlands.length;

  let mentionsTourismIbizaFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestIbizaMentionsFromNetherlands,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // Formentera

  let tourismFormenteraNewsFromNetherlands = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromNetherlands);


  let categoriesOfInterestFormenteraNewsFromNetherlands = tourismFormenteraNewsFromNetherlands;

  let categoriesOfInterestFormenteraMentionsFromNetherlands = categoriesOfInterestFormenteraNewsFromNetherlands.length;

  let mentionsTourismFormenteraFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentionsFromNetherlands,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV from THE NETHERLANDS by island (Tourism)

  pageRows.push([
    "CONVERSA A MITJANS HOLANDESOS PER ILLA (Turisme)",
  ]);
  pageRows.push([
    "Illa",
    "Turisme",
    "Mencions totals",
  ]);
  pageRows.push([
    "Mallorca",
    mentionsTourismMallorcaFromNetherlandsPercent,
    categoriesOfInterestMallorcaMentionsFromNetherlands,
  ]);

  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaFromNetherlandsPercent,
    categoriesOfInterestMenorcaMentionsFromNetherlands,
  ]);

  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaFromNetherlandsPercent,
    categoriesOfInterestIbizaMentionsFromNetherlands,
  ]);

  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraFromNetherlandsPercent,
    categoriesOfInterestFormenteraMentionsFromNetherlands,
  ]);

  pageRows.push([]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromNetherlandsPercent,
    categoriesOfInterestBalearenMentionsFromNetherlands,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
