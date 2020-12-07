var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== MENTIONS OF CATEGORIES OF INTEREST BY MARKET (MALLORCA)  ========
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

  let tourismAndBothMallorcaNews = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismAndBothCategories);

  let covidMallorcaNews = allDocsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.covidCategory);

  let categoriesOfInterestMallorcaNews = tourismAndBothMallorcaNews.concat(
    covidMallorcaNews
  );

  let categoriesOfInterestBalearenMentions =
    categoriesOfInterestBalearenNews.length;

  let categoriesOfInterestMallorcaMentions =
    categoriesOfInterestMallorcaNews.length;

  // Spain
  let mentionsTourismAndBothMallorcaFromSpain = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSpain).length;

  let mentionsCovidMallorcaFromSpain = allDocsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSpain).length;

  let mentionsCategoriesOfInterestMallorcaFromSpain =
    mentionsTourismAndBothMallorcaFromSpain + mentionsCovidMallorcaFromSpain;

  let mentionsTourismMallorcaFromSpainPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromSpain,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsCovidMallorcaFromSpainPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromSpain,
    allDocsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsBothMallorcaFromSpainPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromSpain,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSpain).length
  );

  // United Kingdom
  let mentionsTourismAndBothMallorcaFromUnitedKingdom = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromUnitedKingdom).length;

  let mentionsCovidMallorcaFromUnitedKingdom = allDocsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromUnitedKingdom).length;

  let mentionsCategoriesOfInterestMallorcaFromUnitedKingdom =
    mentionsTourismAndBothMallorcaFromUnitedKingdom +
    mentionsCovidMallorcaFromUnitedKingdom;

  let mentionsTourismMallorcaFromUnitedKingdomPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromUnitedKingdom,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsCovidMallorcaFromUnitedKingdomPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromUnitedKingdom,
    allDocsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsBothMallorcaFromUnitedKingdomPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromUnitedKingdom,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // Germany
  let mentionsTourismAndBothMallorcaFromGermany = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromGermany).length;

  let mentionsCovidMallorcaFromGermany = allDocsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromGermany).length;

  let mentionsCategoriesOfInterestMallorcaFromGermany =
    mentionsTourismAndBothMallorcaFromGermany +
    mentionsCovidMallorcaFromGermany;

  let mentionsTourismMallorcaFromGermanyPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromGermany,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsCovidMallorcaFromGermanyPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromGermany,
    allDocsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsBothMallorcaFromGermanyPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromGermany,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromGermany).length
  );

  // Italy
  let mentionsTourismAndBothMallorcaFromItaly = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromItaly).length;

  let mentionsCovidMallorcaFromItaly = allDocsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromItaly).length;

  let mentionsCategoriesOfInterestMallorcaFromItaly =
    mentionsTourismAndBothMallorcaFromItaly + mentionsCovidMallorcaFromItaly;

  let mentionsTourismMallorcaFromItalyPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromItaly,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  let mentionsCovidMallorcaFromItalyPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromItaly,
    allDocsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromItaly).length
  );

  let mentionsBothMallorcaFromItalyPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromItaly,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromItaly).length
  );

  // France
  let mentionsTourismAndBothMallorcaFromFrance = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromFrance).length;

  let mentionsCovidMallorcaFromFrance = allDocsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromFrance).length;

  let mentionsCategoriesOfInterestMallorcaFromFrance =
    mentionsTourismAndBothMallorcaFromFrance + mentionsCovidMallorcaFromFrance;

  let mentionsTourismMallorcaFromFrancePercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromFrance,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  let mentionsCovidMallorcaFromFrancePercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromFrance,
    allDocsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromFrance).length
  );

  let mentionsBothMallorcaFromFrancePercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromFrance,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromFrance).length
  );

  // Sweden
  let mentionsTourismAndBothMallorcaFromSweden = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSweden).length;

  let mentionsCovidMallorcaFromSweden = allDocsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSweden).length;

  let mentionsCategoriesOfInterestMallorcaFromSweden =
    mentionsTourismAndBothMallorcaFromSweden + mentionsCovidMallorcaFromSweden;

  let mentionsTourismMallorcaFromSwedenPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromSweden,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsCovidMallorcaFromSwedenPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromSweden,
    allDocsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsBothMallorcaFromSwedenPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromSweden,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSweden).length
  );

  // Switzerland
  let mentionsTourismAndBothMallorcaFromSwitzerland = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSwitzerland).length;

  let mentionsCovidMallorcaFromSwitzerland = allDocsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSwitzerland).length;

  let mentionsCategoriesOfInterestMallorcaFromSwitzerland =
    mentionsTourismAndBothMallorcaFromSwitzerland +
    mentionsCovidMallorcaFromSwitzerland;

  let mentionsTourismMallorcaFromSwitzerlandPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromSwitzerland,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsCovidMallorcaFromSwitzerlandPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromSwitzerland,
    allDocsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsBothMallorcaFromSwitzerlandPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromSwitzerland,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // Netherlands
  let mentionsTourismAndBothMallorcaFromNetherlands = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromNetherlands).length;

  let mentionsCovidMallorcaFromNetherlands = allDocsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromNetherlands).length;

  let mentionsCategoriesOfInterestMallorcaFromNetherlands =
    mentionsTourismAndBothMallorcaFromNetherlands +
    mentionsCovidMallorcaFromNetherlands;

  let mentionsTourismMallorcaFromNetherlandsPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromNetherlands,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsCovidMallorcaFromNetherlandsPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromNetherlands,
    allDocsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsBothMallorcaFromNetherlandsPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromNetherlands,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // Austria
  let mentionsTourismAndBothMallorcaFromAustria = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromAustria).length;

  let mentionsCovidMallorcaFromAustria = allDocsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromAustria).length;

  let mentionsCategoriesOfInterestMallorcaFromAustria =
    mentionsTourismAndBothMallorcaFromAustria +
    mentionsCovidMallorcaFromAustria;

  let mentionsTourismMallorcaFromAustriaPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromAustria,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsCovidMallorcaFromAustriaPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromAustria,
    allDocsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsBothMallorcaFromAustriaPercent = utils.getPercent(
    mentionsCategoriesOfInterestMallorcaFromAustria,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromAustria).length
  );

  // ===== MENTIONS OF CATEGORIES OF INTEREST (MALLORCA)  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Mallorca
  let mentionsTourismMallorcaPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW.filter(utils.mallorcaIslandMention).filter(utils.tourismCategory)
      .length
  );

  let mentionsCovidMallorcaPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    allDocsCW.filter(utils.mallorcaIslandMention).filter(utils.covidCategory)
      .length
  );

  let mentionsBothMallorcaPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW.filter(utils.mallorcaIslandMention).filter(utils.bothCategory).length
  );

  // Balearen (Balearic islands + Mallorca, Menorca + Ibiza + Formentera)
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
  // SOV by country of Mallorca
  pageRows.push([
    "CONVERSA PER PAÏSOS DE MALLORCA (Turisme, covid i covid + turisme)",
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
    mentionsTourismMallorcaFromSpainPercent,
    mentionsCovidMallorcaFromSpainPercent,
    mentionsBothMallorcaFromSpainPercent,
    mentionsCategoriesOfInterestMallorcaFromSpain,
  ]);

  pageRows.push([
    "Regne Unit",
    mentionsTourismMallorcaFromUnitedKingdomPercent,
    mentionsCovidMallorcaFromUnitedKingdomPercent,
    mentionsBothMallorcaFromUnitedKingdomPercent,
    mentionsCategoriesOfInterestMallorcaFromUnitedKingdom,
  ]);

  pageRows.push([
    "Alemanya",
    mentionsTourismMallorcaFromGermanyPercent,
    mentionsCovidMallorcaFromGermanyPercent,
    mentionsBothMallorcaFromGermanyPercent,
    mentionsCategoriesOfInterestMallorcaFromGermany,
  ]);

  pageRows.push([
    "Itàlia",
    mentionsTourismMallorcaFromItalyPercent,
    mentionsCovidMallorcaFromItalyPercent,
    mentionsBothMallorcaFromItalyPercent,
    mentionsCategoriesOfInterestMallorcaFromItaly,
  ]);

  pageRows.push([
    "França",
    mentionsTourismMallorcaFromFrancePercent,
    mentionsCovidMallorcaFromFrancePercent,
    mentionsBothMallorcaFromFrancePercent,
    mentionsCategoriesOfInterestMallorcaFromFrance,
  ]);

  pageRows.push([
    "Suècia",
    mentionsTourismMallorcaFromSwedenPercent,
    mentionsCovidMallorcaFromSwedenPercent,
    mentionsBothMallorcaFromSwedenPercent,
    mentionsCategoriesOfInterestMallorcaFromSweden,
  ]);

  pageRows.push([
    "Suïssa",
    mentionsTourismMallorcaFromSwitzerlandPercent,
    mentionsCovidMallorcaFromSwitzerlandPercent,
    mentionsBothMallorcaFromSwitzerlandPercent,
    mentionsCategoriesOfInterestMallorcaFromSwitzerland,
  ]);

  pageRows.push([
    "Holanda",
    mentionsTourismMallorcaFromNetherlandsPercent,
    mentionsCovidMallorcaFromNetherlandsPercent,
    mentionsBothMallorcaFromNetherlandsPercent,
    mentionsCategoriesOfInterestMallorcaFromNetherlands,
  ]);

  pageRows.push([
    "Austria",
    mentionsTourismMallorcaFromAustriaPercent,
    mentionsCovidMallorcaFromAustriaPercent,
    mentionsBothMallorcaFromAustriaPercent,
    mentionsCategoriesOfInterestMallorcaFromAustria,
  ]);
  pageRows.push([]);

  // SOV of Mallorca (Tourism, covid and covid+tourism)
  pageRows.push(["MENCIONS DE MALLORCA (Turisme, covid i covid + turisme)"]);
  pageRows.push(["", "Turisme", "COVID", "Turisme + COVID", "Mencions totals"]);
  pageRows.push([
    "Mallorca",
    mentionsTourismMallorcaPercent,
    mentionsCovidMallorcaPercent,
    mentionsBothMallorcaPercent,
    categoriesOfInterestMallorcaMentions,
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
