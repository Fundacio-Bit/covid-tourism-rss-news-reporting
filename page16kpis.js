var csv_manager = require("./create-csv.js");
var utils = require("./utils/utils.js");

const getKPIs = (docsCW) => {
  // ===== MENTIONS OF CATEGORIES OF INTEREST BY MARKET (menorca)  ========
  // Categories of Interest = tourism, covid and covid + tourism
  let categoriesOfInterestBalearenNews = docsCW
    .filter(utils.balearenMention)
    .filter(utils.categoriesOfInterest);

  let categoriesOfInterestMenorcaNews = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.categoriesOfInterest);

  let categoriesOfInterestBalearenMentions =
    categoriesOfInterestBalearenNews.length;

  let categoriesOfInterestMenorcaMentions =
    categoriesOfInterestMenorcaNews.length;

  // Spain
  let mentionsCategoriesOfInterestMenorcaFromSpain = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSpain).length;

  let mentionsTourismMenorcaFromSpainPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromSpain,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsCovidMenorcaFromSpainPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromSpain,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsBothMenorcaFromSpainPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromSpain,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSpain).length
  );

  // United Kingdom
  let mentionsCategoriesOfInterestMenorcaFromUnitedKingdom = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromUnitedKingdom).length;

  let mentionsTourismMenorcaFromUnitedKingdomPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromUnitedKingdom,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsCovidMenorcaFromUnitedKingdomPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromUnitedKingdom,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsBothMenorcaFromUnitedKingdomPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromUnitedKingdom,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // Germany
  let mentionsCategoriesOfInterestMenorcaFromGermany = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromGermany).length;

  let mentionsTourismMenorcaFromGermanyPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromGermany,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsCovidMenorcaFromGermanyPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromGermany,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsBothMenorcaFromGermanyPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromGermany,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromGermany).length
  );

  // Italy
  let mentionsCategoriesOfInterestMenorcaFromItaly = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromItaly).length;

  let mentionsTourismMenorcaFromItalyPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromItaly,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  let mentionsCovidMenorcaFromItalyPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromItaly,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromItaly).length
  );

  let mentionsBothMenorcaFromItalyPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromItaly,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromItaly).length
  );

  // France
  let mentionsCategoriesOfInterestMenorcaFromFrance = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromFrance).length;

  let mentionsTourismMenorcaFromFrancePercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromFrance,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  let mentionsCovidMenorcaFromFrancePercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromFrance,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromFrance).length
  );

  let mentionsBothMenorcaFromFrancePercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromFrance,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromFrance).length
  );

  // Sweden
  let mentionsCategoriesOfInterestMenorcaFromSweden = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSweden).length;

  let mentionsTourismMenorcaFromSwedenPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromSweden,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsCovidMenorcaFromSwedenPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromSweden,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsBothMenorcaFromSwedenPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromSweden,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSweden).length
  );

  // Switzerland
  let mentionsCategoriesOfInterestMenorcaFromSwitzerland = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromSwitzerland).length;

  let mentionsTourismMenorcaFromSwitzerlandPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromSwitzerland,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsCovidMenorcaFromSwitzerlandPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromSwitzerland,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsBothMenorcaFromSwitzerlandPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromSwitzerland,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // Netherlands
  let mentionsCategoriesOfInterestMenorcaFromNetherlands = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromNetherlands).length;

  let mentionsTourismMenorcaFromNetherlandsPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromNetherlands,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsCovidMenorcaFromNetherlandsPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromNetherlands,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsBothMenorcaFromNetherlandsPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromNetherlands,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // Austria
  let mentionsCategoriesOfInterestMenorcaFromAustria = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.categoriesOfInterest)
    .filter(utils.mentionFromAustria).length;

  let mentionsTourismMenorcaFromAustriaPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromAustria,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsCovidMenorcaFromAustriaPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromAustria,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsBothMenorcaFromAustriaPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromAustria,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromAustria).length
  );

  // ===== MENTIONS OF CATEGORIES OF INTEREST (MENORCA)  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Menorca
  let mentionsTourismMenorcaPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentions,
    docsCW.filter(utils.menorcaIslandMention).filter(utils.tourismCategory)
      .length
  );

  let mentionsCovidMenorcaPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentions,
    docsCW.filter(utils.menorcaIslandMention).filter(utils.covidCategory).length
  );

  let mentionsBothMenorcaPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentions,
    docsCW.filter(utils.menorcaIslandMention).filter(utils.bothCategory).length
  );

  // Balearen (Balearic islands + Menorca, Menorca + Ibiza + Formentera)
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
  // SOV by country of Menorca
  pageRows.push([
    "CONVERSA PER PAÏSOS DE MENORCA (Turisme, covid i covid + turisme)",
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
    mentionsTourismMenorcaFromSpainPercent,
    mentionsCovidMenorcaFromSpainPercent,
    mentionsBothMenorcaFromSpainPercent,
    mentionsCategoriesOfInterestMenorcaFromSpain,
  ]);

  pageRows.push([
    "Regne Unit",
    mentionsTourismMenorcaFromUnitedKingdomPercent,
    mentionsCovidMenorcaFromUnitedKingdomPercent,
    mentionsBothMenorcaFromUnitedKingdomPercent,
    mentionsCategoriesOfInterestMenorcaFromUnitedKingdom,
  ]);

  pageRows.push([
    "Alemanya",
    mentionsTourismMenorcaFromGermanyPercent,
    mentionsCovidMenorcaFromGermanyPercent,
    mentionsBothMenorcaFromGermanyPercent,
    mentionsCategoriesOfInterestMenorcaFromGermany,
  ]);

  pageRows.push([
    "Itàlia",
    mentionsTourismMenorcaFromItalyPercent,
    mentionsCovidMenorcaFromItalyPercent,
    mentionsBothMenorcaFromItalyPercent,
    mentionsCategoriesOfInterestMenorcaFromItaly,
  ]);

  pageRows.push([
    "França",
    mentionsTourismMenorcaFromFrancePercent,
    mentionsCovidMenorcaFromFrancePercent,
    mentionsBothMenorcaFromFrancePercent,
    mentionsCategoriesOfInterestMenorcaFromFrance,
  ]);

  pageRows.push([
    "Suècia",
    mentionsTourismMenorcaFromSwedenPercent,
    mentionsCovidMenorcaFromSwedenPercent,
    mentionsBothMenorcaFromSwedenPercent,
    mentionsCategoriesOfInterestMenorcaFromSweden,
  ]);

  pageRows.push([
    "Suïssa",
    mentionsTourismMenorcaFromSwitzerlandPercent,
    mentionsCovidMenorcaFromSwitzerlandPercent,
    mentionsBothMenorcaFromSwitzerlandPercent,
    mentionsCategoriesOfInterestMenorcaFromSwitzerland,
  ]);

  pageRows.push([
    "Holanda",
    mentionsTourismMenorcaFromNetherlandsPercent,
    mentionsCovidMenorcaFromNetherlandsPercent,
    mentionsBothMenorcaFromNetherlandsPercent,
    mentionsCategoriesOfInterestMenorcaFromNetherlands,
  ]);

  pageRows.push([
    "Austria",
    mentionsTourismMenorcaFromAustriaPercent,
    mentionsCovidMenorcaFromAustriaPercent,
    mentionsBothMenorcaFromAustriaPercent,
    mentionsCategoriesOfInterestMenorcaFromAustria,
  ]);
  pageRows.push([]);

  // SOV of Menorca (Tourism, covid and covid+tourism)
  pageRows.push(["MENCIONS DE MENORCA (Turisme, covid i covid + turisme)"]);
  pageRows.push(["", "Turisme", "COVID", "Turisme + COVID", "Mencions totals"]);
  pageRows.push([
    "Menorca",
    mentionsTourismMenorcaPercent,
    mentionsCovidMenorcaPercent,
    mentionsBothMenorcaPercent,
    categoriesOfInterestMenorcaMentions,
  ]);

  pageRows.push([
    "Balears",
    mentionsTourismBalearenPercent,
    mentionsCovidBalearenPercent,
    mentionsBothBalearenPercent,
    categoriesOfInterestBalearenMentions,
  ]);

  // create the page 16 CSV
  csv_manager.create_csv("output/page16_news.csv", pageRows);
};

module.exports = { getKPIs };
