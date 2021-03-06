var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== MENTIONS OF CATEGORIES OF INTEREST BY MARKET (ibiza)  ========
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

  let tourismAndBothIbizaNews = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismAndBothCategories);

  let covidIbizaNews = allDocsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.covidCategory);

  let categoriesOfInterestIbizaNews = tourismAndBothIbizaNews.concat(
    covidIbizaNews
  );

  let categoriesOfInterestBalearenMentions =
    categoriesOfInterestBalearenNews.length;

  let categoriesOfInterestIbizaMentions = categoriesOfInterestIbizaNews.length;

  // Spain
  let mentionsTourismAndBothIbizaFromSpain = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSpain).length;

  let mentionsCovidIbizaFromSpain = allDocsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSpain).length;

  let mentionsCategoriesOfInterestIbizaFromSpain =
    mentionsTourismAndBothIbizaFromSpain + mentionsCovidIbizaFromSpain;

  let mentionsTourismIbizaFromSpainPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromSpain,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsCovidIbizaFromSpainPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromSpain,
    allDocsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsBothIbizaFromSpainPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromSpain,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSpain).length
  );

  // United Kingdom
  let mentionsTourismAndBothIbizaFromUnitedKingdom = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromUnitedKingdom).length;

  let mentionsCovidIbizaFromUnitedKingdom = allDocsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromUnitedKingdom).length;

  let mentionsCategoriesOfInterestIbizaFromUnitedKingdom =
    mentionsTourismAndBothIbizaFromUnitedKingdom +
    mentionsCovidIbizaFromUnitedKingdom;

  let mentionsTourismIbizaFromUnitedKingdomPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromUnitedKingdom,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsCovidIbizaFromUnitedKingdomPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromUnitedKingdom,
    allDocsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsBothIbizaFromUnitedKingdomPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromUnitedKingdom,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // Germany
  let mentionsTourismAndBothIbizaFromGermany = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromGermany).length;

  let mentionsCovidIbizaFromGermany = allDocsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromGermany).length;

  let mentionsCategoriesOfInterestIbizaFromGermany =
    mentionsTourismAndBothIbizaFromGermany + mentionsCovidIbizaFromGermany;

  let mentionsTourismIbizaFromGermanyPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromGermany,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsCovidIbizaFromGermanyPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromGermany,
    allDocsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsBothIbizaFromGermanyPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromGermany,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromGermany).length
  );

  // Italy
  let mentionsTourismAndBothIbizaFromItaly = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromItaly).length;

  let mentionsCovidIbizaFromItaly = allDocsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromItaly).length;

  let mentionsCategoriesOfInterestIbizaFromItaly =
    mentionsTourismAndBothIbizaFromItaly + mentionsCovidIbizaFromItaly;

  let mentionsTourismIbizaFromItalyPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromItaly,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  let mentionsCovidIbizaFromItalyPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromItaly,
    allDocsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromItaly).length
  );

  let mentionsBothIbizaFromItalyPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromItaly,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromItaly).length
  );

  // France
  let mentionsTourismAndBothIbizaFromFrance = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromFrance).length;

  let mentionsCovidIbizaFromFrance = allDocsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromFrance).length;

  let mentionsCategoriesOfInterestIbizaFromFrance =
    mentionsTourismAndBothIbizaFromFrance + mentionsCovidIbizaFromFrance;

  let mentionsTourismIbizaFromFrancePercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromFrance,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  let mentionsCovidIbizaFromFrancePercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromFrance,
    allDocsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromFrance).length
  );

  let mentionsBothIbizaFromFrancePercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromFrance,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromFrance).length
  );

  // Sweden
  let mentionsTourismAndBothIbizaFromSweden = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSweden).length;

  let mentionsCovidIbizaFromSweden = allDocsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSweden).length;

  let mentionsCategoriesOfInterestIbizaFromSweden =
    mentionsTourismAndBothIbizaFromSweden + mentionsCovidIbizaFromSweden;

  let mentionsTourismIbizaFromSwedenPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromSweden,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsCovidIbizaFromSwedenPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromSweden,
    allDocsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsBothIbizaFromSwedenPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromSweden,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSweden).length
  );

  // Switzerland
  let mentionsTourismAndBothIbizaFromSwitzerland = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSwitzerland).length;

  let mentionsCovidIbizaFromSwitzerland = allDocsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSwitzerland).length;

  let mentionsCategoriesOfInterestIbizaFromSwitzerland =
    mentionsTourismAndBothIbizaFromSwitzerland +
    mentionsCovidIbizaFromSwitzerland;

  let mentionsTourismIbizaFromSwitzerlandPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromSwitzerland,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsCovidIbizaFromSwitzerlandPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromSwitzerland,
    allDocsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsBothIbizaFromSwitzerlandPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromSwitzerland,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // Netherlands
  let mentionsTourismAndBothIbizaFromNetherlands = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromNetherlands).length;

  let mentionsCovidIbizaFromNetherlands = allDocsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromNetherlands).length;

  let mentionsCategoriesOfInterestIbizaFromNetherlands =
    mentionsTourismAndBothIbizaFromNetherlands +
    mentionsCovidIbizaFromNetherlands;

  let mentionsTourismIbizaFromNetherlandsPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromNetherlands,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsCovidIbizaFromNetherlandsPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromNetherlands,
    allDocsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsBothIbizaFromNetherlandsPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromNetherlands,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // Austria
  let mentionsTourismAndBothIbizaFromAustria = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromAustria).length;

  let mentionsCovidIbizaFromAustria = allDocsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromAustria).length;

  let mentionsCategoriesOfInterestIbizaFromAustria =
    mentionsTourismAndBothIbizaFromAustria + mentionsCovidIbizaFromAustria;

  let mentionsTourismIbizaFromAustriaPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromAustria,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsCovidIbizaFromAustriaPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromAustria,
    allDocsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsBothIbizaFromAustriaPercent = utils.getPercent(
    mentionsCategoriesOfInterestIbizaFromAustria,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromAustria).length
  );

  // ===== MENTIONS OF CATEGORIES OF INTEREST (Ibiza)  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Ibiza
  let mentionsTourismIbizaPercent = utils.getPercent(
    categoriesOfInterestIbizaMentions,
    docsCW.filter(utils.ibizaIslandMention).filter(utils.tourismCategory).length
  );

  let mentionsCovidIbizaPercent = utils.getPercent(
    categoriesOfInterestIbizaMentions,
    allDocsCW.filter(utils.ibizaIslandMention).filter(utils.covidCategory)
      .length
  );

  let mentionsBothIbizaPercent = utils.getPercent(
    categoriesOfInterestIbizaMentions,
    docsCW.filter(utils.ibizaIslandMention).filter(utils.bothCategory).length
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
  // SOV by country of Ibiza
  pageRows.push([
    "CONVERSA PER PAÏSOS DE IBIZA (Turisme, covid i covid + turisme)",
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
    mentionsTourismIbizaFromSpainPercent,
    mentionsCovidIbizaFromSpainPercent,
    mentionsBothIbizaFromSpainPercent,
    mentionsCategoriesOfInterestIbizaFromSpain,
  ]);

  pageRows.push([
    "Regne Unit",
    mentionsTourismIbizaFromUnitedKingdomPercent,
    mentionsCovidIbizaFromUnitedKingdomPercent,
    mentionsBothIbizaFromUnitedKingdomPercent,
    mentionsCategoriesOfInterestIbizaFromUnitedKingdom,
  ]);

  pageRows.push([
    "Alemanya",
    mentionsTourismIbizaFromGermanyPercent,
    mentionsCovidIbizaFromGermanyPercent,
    mentionsBothIbizaFromGermanyPercent,
    mentionsCategoriesOfInterestIbizaFromGermany,
  ]);

  pageRows.push([
    "Itàlia",
    mentionsTourismIbizaFromItalyPercent,
    mentionsCovidIbizaFromItalyPercent,
    mentionsBothIbizaFromItalyPercent,
    mentionsCategoriesOfInterestIbizaFromItaly,
  ]);

  pageRows.push([
    "França",
    mentionsTourismIbizaFromFrancePercent,
    mentionsCovidIbizaFromFrancePercent,
    mentionsBothIbizaFromFrancePercent,
    mentionsCategoriesOfInterestIbizaFromFrance,
  ]);

  pageRows.push([
    "Suècia",
    mentionsTourismIbizaFromSwedenPercent,
    mentionsCovidIbizaFromSwedenPercent,
    mentionsBothIbizaFromSwedenPercent,
    mentionsCategoriesOfInterestIbizaFromSweden,
  ]);

  pageRows.push([
    "Suïssa",
    mentionsTourismIbizaFromSwitzerlandPercent,
    mentionsCovidIbizaFromSwitzerlandPercent,
    mentionsBothIbizaFromSwitzerlandPercent,
    mentionsCategoriesOfInterestIbizaFromSwitzerland,
  ]);

  pageRows.push([
    "Holanda",
    mentionsTourismIbizaFromNetherlandsPercent,
    mentionsCovidIbizaFromNetherlandsPercent,
    mentionsBothIbizaFromNetherlandsPercent,
    mentionsCategoriesOfInterestIbizaFromNetherlands,
  ]);

  pageRows.push([
    "Austria",
    mentionsTourismIbizaFromAustriaPercent,
    mentionsCovidIbizaFromAustriaPercent,
    mentionsBothIbizaFromAustriaPercent,
    mentionsCategoriesOfInterestIbizaFromAustria,
  ]);
  pageRows.push([]);

  // SOV of Ibiza (Tourism, covid and covid+tourism)
  pageRows.push(["MENCIONS DE IBIZA (Turisme, covid i covid + turisme)"]);
  pageRows.push(["", "Turisme", "COVID", "Turisme + COVID", "Mencions totals"]);
  pageRows.push([
    "Ibiza",
    mentionsTourismIbizaPercent,
    mentionsCovidIbizaPercent,
    mentionsBothIbizaPercent,
    categoriesOfInterestIbizaMentions,
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
