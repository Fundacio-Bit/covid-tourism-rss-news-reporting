var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== DUTCH MENTIONS OF CATEGORIES OF INTEREST FOR BALEAREN  ========

  //discarded and not discarded news
  let allDocsCW = docsCW.concat(discardedDocsCW);

  let tourismAndBothBalearenNewsFromNetherlands = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromNetherlands);

  let covidBalearenNewsFromNetherlands = allDocsCW
    .filter(utils.balearenMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromNetherlands);

  let categoriesOfInterestBalearenNewsFromNetherlands = tourismAndBothBalearenNewsFromNetherlands.concat(
    covidBalearenNewsFromNetherlands
  );

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
    allDocsCW
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
  let tourismAndBothMallorcaNewsFromNetherlands = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromNetherlands);

  let covidMallorcaNewsFromNetherlands = allDocsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromNetherlands);

  let categoriesOfInterestMallorcaNewsFromNetherlands = tourismAndBothMallorcaNewsFromNetherlands.concat(
    covidMallorcaNewsFromNetherlands
  );

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
    allDocsCW
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
  let tourismAndBothMenorcaNewsFromNetherlands = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromNetherlands);

  let covidMenorcaNewsFromNetherlands = allDocsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromNetherlands);

  let categoriesOfInterestMenorcaNewsFromNetherlands = tourismAndBothMenorcaNewsFromNetherlands.concat(
    covidMenorcaNewsFromNetherlands
  );

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
    allDocsCW
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

  let tourismAndBothIbizaNewsFromNetherlands = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromNetherlands);

  let covidIbizaNewsFromNetherlands = allDocsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromNetherlands);

  let categoriesOfInterestIbizaNewsFromNetherlands = tourismAndBothIbizaNewsFromNetherlands.concat(
    covidIbizaNewsFromNetherlands
  );

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
    allDocsCW
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

  let tourismAndBothFormenteraNewsFromNetherlands = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromNetherlands);

  let covidFormenteraNewsFromNetherlands = allDocsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromNetherlands);

  let categoriesOfInterestFormenteraNewsFromNetherlands = tourismAndBothFormenteraNewsFromNetherlands.concat(
    covidFormenteraNewsFromNetherlands
  );

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
    allDocsCW
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
  // SOV from THE NETHERLANDS by island (Tourism, covid and covid+tourism)

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

  pageRows.push([]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenFromNetherlandsPercent,
    mentionsCovidBalearenFromNetherlandsPercent,
    mentionsBothBalearenFromNetherlandsPercent,
    categoriesOfInterestBalearenMentionsFromNetherlands,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
