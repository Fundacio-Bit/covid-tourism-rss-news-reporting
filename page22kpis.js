var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== MENTIONS OF CATEGORIES OF INTEREST BY MARKET (formentera)  ========
  // Categories of Interest = tourism, covid and covid + tourism

  //discarded and not discarded news
  let allDocsCW = docsCW.concat(discardedDocsCW);

  let tourismAndBothBalearenNews = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismAndBothCategories);

  let covidBalearenNews = allDocsCW
    .filter(utils.balearenMention)
    .filter(utils.covidCategory);

  let categoriesOfInterestBalearenNews = tourismAndBothBalearenNews.concat(
    covidBalearenNews
  );

  let tourismAndBothFormenteraNews = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismAndBothCategories);

  let covidFormenteraNews = allDocsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.covidCategory);

  let categoriesOfInterestFormenteraNews = tourismAndBothFormenteraNews.concat(
    covidFormenteraNews
  );

  let categoriesOfInterestBalearenMentions =
    categoriesOfInterestBalearenNews.length;

  let categoriesOfInterestFormenteraMentions =
    categoriesOfInterestFormenteraNews.length;

  // Spain
  let mentionsTourismAndBothFormenteraFromSpain = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSpain).length;

  let mentionsCovidFormenteraFromSpain = allDocsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSpain).length;

  let mentionsCategoriesOfInterestFormenteraFromSpain =
    mentionsTourismAndBothFormenteraFromSpain +
    mentionsCovidFormenteraFromSpain;

  let mentionsTourismFormenteraFromSpainPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromSpain,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsCovidFormenteraFromSpainPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromSpain,
    allDocsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsBothFormenteraFromSpainPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromSpain,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSpain).length
  );

  // United Kingdom
  let mentionsTourismAndBothFormenteraFromUnitedKingdom = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromUnitedKingdom).length;

  let mentionsCovidFormenteraFromUnitedKingdom = allDocsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromUnitedKingdom).length;

  let mentionsCategoriesOfInterestFormenteraFromUnitedKingdom =
    mentionsTourismAndBothFormenteraFromUnitedKingdom +
    mentionsCovidFormenteraFromUnitedKingdom;

  let mentionsTourismFormenteraFromUnitedKingdomPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromUnitedKingdom,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsCovidFormenteraFromUnitedKingdomPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromUnitedKingdom,
    allDocsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsBothFormenteraFromUnitedKingdomPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromUnitedKingdom,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // Germany
  let mentionsTourismAndBothFormenteraFromGermany = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromGermany).length;

  let mentionsCovidFormenteraFromGermany = allDocsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromGermany).length;

  let mentionsCategoriesOfInterestFormenteraFromGermany =
    mentionsTourismAndBothFormenteraFromGermany +
    mentionsCovidFormenteraFromGermany;

  let mentionsTourismFormenteraFromGermanyPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromGermany,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsCovidFormenteraFromGermanyPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromGermany,
    allDocsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsBothFormenteraFromGermanyPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromGermany,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromGermany).length
  );

  // Italy
  let mentionsTourismAndBothFormenteraFromItaly = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromItaly).length;

  let mentionsCovidFormenteraFromItaly = allDocsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromItaly).length;

  let mentionsCategoriesOfInterestFormenteraFromItaly =
    mentionsTourismAndBothFormenteraFromItaly +
    mentionsCovidFormenteraFromItaly;

  let mentionsTourismFormenteraFromItalyPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromItaly,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  let mentionsCovidFormenteraFromItalyPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromItaly,
    allDocsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromItaly).length
  );

  let mentionsBothFormenteraFromItalyPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromItaly,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromItaly).length
  );

  // France
  let mentionsTourismAndBothFormenteraFromFrance = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromFrance).length;

  let mentionsCovidFormenteraFromFrance = allDocsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromFrance).length;

  let mentionsCategoriesOfInterestFormenteraFromFrance =
    mentionsTourismAndBothFormenteraFromFrance +
    mentionsCovidFormenteraFromFrance;

  let mentionsTourismFormenteraFromFrancePercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromFrance,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  let mentionsCovidFormenteraFromFrancePercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromFrance,
    allDocsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromFrance).length
  );

  let mentionsBothFormenteraFromFrancePercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromFrance,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromFrance).length
  );

  // Sweden
  let mentionsTourismAndBothFormenteraFromSweden = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSweden).length;

  let mentionsCovidFormenteraFromSweden = allDocsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSweden).length;

  let mentionsCategoriesOfInterestFormenteraFromSweden =
    mentionsTourismAndBothFormenteraFromSweden +
    mentionsCovidFormenteraFromSweden;

  let mentionsTourismFormenteraFromSwedenPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromSweden,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsCovidFormenteraFromSwedenPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromSweden,
    allDocsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsBothFormenteraFromSwedenPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromSweden,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSweden).length
  );

  // Switzerland
  let mentionsTourismAndBothFormenteraFromSwitzerland = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSwitzerland).length;

  let mentionsCovidFormenteraFromSwitzerland = allDocsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSwitzerland).length;

  let mentionsCategoriesOfInterestFormenteraFromSwitzerland =
    mentionsTourismAndBothFormenteraFromSwitzerland +
    mentionsCovidFormenteraFromSwitzerland;

  let mentionsTourismFormenteraFromSwitzerlandPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromSwitzerland,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsCovidFormenteraFromSwitzerlandPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromSwitzerland,
    allDocsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsBothFormenteraFromSwitzerlandPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromSwitzerland,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // Netherlands
  let mentionsTourismAndBothFormenteraFromNetherlands = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromNetherlands).length;

  let mentionsCovidFormenteraFromNetherlands = allDocsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromNetherlands).length;

  let mentionsCategoriesOfInterestFormenteraFromNetherlands =
    mentionsTourismAndBothFormenteraFromNetherlands +
    mentionsCovidFormenteraFromNetherlands;

  let mentionsTourismFormenteraFromNetherlandsPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromNetherlands,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsCovidFormenteraFromNetherlandsPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromNetherlands,
    allDocsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsBothFormenteraFromNetherlandsPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromNetherlands,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // Austria
  let mentionsTourismAndBothFormenteraFromAustria = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromAustria).length;

  let mentionsCovidFormenteraFromAustria = allDocsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromAustria).length;

  let mentionsCategoriesOfInterestFormenteraFromAustria =
    mentionsTourismAndBothFormenteraFromAustria +
    mentionsCovidFormenteraFromAustria;

  let mentionsTourismFormenteraFromAustriaPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromAustria,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsCovidFormenteraFromAustriaPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromAustria,
    allDocsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsBothFormenteraFromAustriaPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromAustria,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromAustria).length
  );

  // ===== MENTIONS OF CATEGORIES OF INTEREST (Formentera)  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Formentera
  let mentionsTourismFormenteraPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentions,
    docsCW.filter(utils.formenteraIslandMention).filter(utils.tourismCategory)
      .length
  );

  let mentionsCovidFormenteraPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentions,
    allDocsCW.filter(utils.formenteraIslandMention).filter(utils.covidCategory)
      .length
  );

  let mentionsBothFormenteraPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentions,
    docsCW.filter(utils.formenteraIslandMention).filter(utils.bothCategory)
      .length
  );

  // Balearen (Balearic islands + Mallorca, Menorca + Formentera + Formentera)
  let mentionsTourismBalearenPercent = utils.getPercent(
    categoriesOfInterestBalearenMentions,
    docsCW.filter(utils.balearenMention).filter(utils.tourismCategory).length
  );

  let mentionsCovidBalearenPercent = utils.getPercent(
    categoriesOfInterestBalearenMentions,
    allDocsCW.filter(utils.balearenMention).filter(utils.covidCategory).length
  );

  let mentionsBothBalearenPercent = utils.getPercent(
    categoriesOfInterestBalearenMentions,
    docsCW.filter(utils.balearenMention).filter(utils.bothCategory).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV by country of Formentera
  pageRows.push([
    "CONVERSA PER PAÏSOS DE FORMENTERA (Turisme, covid i covid + turisme)",
  ]);
  pageRows.push([
    "Pais",
    "Turisme",
    "COVID",
    "Turisme + COVID",
    "Mencions totals",
  ]);
  pageRows.push([
    "España",
    mentionsTourismFormenteraFromSpainPercent,
    mentionsCovidFormenteraFromSpainPercent,
    mentionsBothFormenteraFromSpainPercent,
    mentionsCategoriesOfInterestFormenteraFromSpain,
  ]);

  pageRows.push([
    "Regne Unit",
    mentionsTourismFormenteraFromUnitedKingdomPercent,
    mentionsCovidFormenteraFromUnitedKingdomPercent,
    mentionsBothFormenteraFromUnitedKingdomPercent,
    mentionsCategoriesOfInterestFormenteraFromUnitedKingdom,
  ]);

  pageRows.push([
    "Alemanya",
    mentionsTourismFormenteraFromGermanyPercent,
    mentionsCovidFormenteraFromGermanyPercent,
    mentionsBothFormenteraFromGermanyPercent,
    mentionsCategoriesOfInterestFormenteraFromGermany,
  ]);

  pageRows.push([
    "Itàlia",
    mentionsTourismFormenteraFromItalyPercent,
    mentionsCovidFormenteraFromItalyPercent,
    mentionsBothFormenteraFromItalyPercent,
    mentionsCategoriesOfInterestFormenteraFromItaly,
  ]);

  pageRows.push([
    "França",
    mentionsTourismFormenteraFromFrancePercent,
    mentionsCovidFormenteraFromFrancePercent,
    mentionsBothFormenteraFromFrancePercent,
    mentionsCategoriesOfInterestFormenteraFromFrance,
  ]);

  pageRows.push([
    "Suècia",
    mentionsTourismFormenteraFromSwedenPercent,
    mentionsCovidFormenteraFromSwedenPercent,
    mentionsBothFormenteraFromSwedenPercent,
    mentionsCategoriesOfInterestFormenteraFromSweden,
  ]);

  pageRows.push([
    "Suïssa",
    mentionsTourismFormenteraFromSwitzerlandPercent,
    mentionsCovidFormenteraFromSwitzerlandPercent,
    mentionsBothFormenteraFromSwitzerlandPercent,
    mentionsCategoriesOfInterestFormenteraFromSwitzerland,
  ]);

  pageRows.push([
    "Holanda",
    mentionsTourismFormenteraFromNetherlandsPercent,
    mentionsCovidFormenteraFromNetherlandsPercent,
    mentionsBothFormenteraFromNetherlandsPercent,
    mentionsCategoriesOfInterestFormenteraFromNetherlands,
  ]);

  pageRows.push([
    "Austria",
    mentionsTourismFormenteraFromAustriaPercent,
    mentionsCovidFormenteraFromAustriaPercent,
    mentionsBothFormenteraFromAustriaPercent,
    mentionsCategoriesOfInterestFormenteraFromAustria,
  ]);
  pageRows.push([]);

  // SOV of Formentera (Tourism, covid and covid+tourism)
  pageRows.push(["MENCIONS DE FORMENTERA (Turisme, covid i covid + turisme)"]);
  pageRows.push(["", "Turisme", "COVID", "Turisme + COVID", "Mencions totals"]);
  pageRows.push([
    "Formentera",
    mentionsTourismFormenteraPercent,
    mentionsCovidFormenteraPercent,
    mentionsBothFormenteraPercent,
    categoriesOfInterestFormenteraMentions,
  ]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenPercent,
    mentionsCovidBalearenPercent,
    mentionsBothBalearenPercent,
    categoriesOfInterestBalearenMentions,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
