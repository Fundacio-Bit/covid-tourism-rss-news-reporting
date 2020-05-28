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
    categoriesOfInterestSpainNewsfromGermany.length;

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
  let categoriesOfInterestBalearenNews = docsCW
    .filter(utils.balearenMention)
    .filter(utils.categoriesOfInterest);

  let categoriesOfInterestFormenteraNews = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.categoriesOfInterest);

  let categoriesOfInterestBalearenMentions =
    categoriesOfInterestBalearenNews.length;

  let categoriesOfInterestFormenteraMentions =
    categoriesOfInterestFormenteraNews.length;

  // Spain
  let mentionsCategoriesOfInterestFormenteraFromSpain = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSpain).length;

  let mentionsTourismFormenteraFromSpainPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromSpain,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsCovidFormenteraFromSpainPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromSpain,
    docsCW
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
  let mentionsCategoriesOfInterestFormenteraFromUnitedKingdom = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromUnitedKingdom).length;

  let mentionsTourismFormenteraFromUnitedKingdomPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromUnitedKingdom,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsCovidFormenteraFromUnitedKingdomPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromUnitedKingdom,
    docsCW
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
  let mentionsCategoriesOfInterestFormenteraFromGermany = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromGermany).length;

  let mentionsTourismFormenteraFromGermanyPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromGermany,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsCovidFormenteraFromGermanyPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromGermany,
    docsCW
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
  let mentionsCategoriesOfInterestFormenteraFromItaly = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromItaly).length;

  let mentionsTourismFormenteraFromItalyPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromItaly,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  let mentionsCovidFormenteraFromItalyPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromItaly,
    docsCW
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
  let mentionsCategoriesOfInterestFormenteraFromFrance = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromFrance).length;

  let mentionsTourismFormenteraFromFrancePercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromFrance,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  let mentionsCovidFormenteraFromFrancePercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromFrance,
    docsCW
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
  let mentionsCategoriesOfInterestFormenteraFromSweden = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSweden).length;

  let mentionsTourismFormenteraFromSwedenPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromSweden,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsCovidFormenteraFromSwedenPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromSweden,
    docsCW
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
  let mentionsCategoriesOfInterestFormenteraFromSwitzerland = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSwitzerland).length;

  let mentionsTourismFormenteraFromSwitzerlandPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromSwitzerland,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsCovidFormenteraFromSwitzerlandPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromSwitzerland,
    docsCW
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
  let mentionsCategoriesOfInterestFormenteraFromNetherlands = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromNetherlands).length;

  let mentionsTourismFormenteraFromNetherlandsPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromNetherlands,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsCovidFormenteraFromNetherlandsPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromNetherlands,
    docsCW
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
  let mentionsCategoriesOfInterestFormenteraFromAustria = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromAustria).length;

  let mentionsTourismFormenteraFromAustriaPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromAustria,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsCovidFormenteraFromAustriaPercent = utils.getPercent(
    mentionsCategoriesOfInterestFormenteraFromAustria,
    docsCW
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

  // ===== MENTIONS OF CATEGORIES OF INTEREST (FORMENTERA)  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Formentera
  let mentionsTourismFormenteraPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentions,
    docsCW.filter(utils.formenteraIslandMention).filter(utils.tourismCategory)
      .length
  );

  let mentionsCovidFormenteraPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentions,
    docsCW.filter(utils.formenteraIslandMention).filter(utils.covidCategory)
      .length
  );

  let mentionsBothFormenteraPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentions,
    docsCW.filter(utils.formenteraIslandMention).filter(utils.bothCategory)
      .length
  );

  // Balearen (Balearic islands + Formentera, Formentera + Formentera + Formentera)
  let mentionsTourismBalearenPercent = utils.getPercent(
    categoriesOfInterestBalearenMentions,
    docsCW.filter(utils.balearenMention).filter(utils.tourismCategory).length
  );

  let mentionsCovidBalearenPercent = utils.getPercent(
    categoriesOfInterestBalearenMentions,
    docsCW.filter(utils.balearenMention).filter(utils.covidCategory).length
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

  // create the page 22 CSV
  csv_manager.create_csv("output/page22_news.csv", pageRows);
};

module.exports = { getKPIs };
