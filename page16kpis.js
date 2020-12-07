var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW) => {
  // ===== MENTIONS OF CATEGORIES OF INTEREST BY MARKET (Menorca)  ========
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

  let tourismAndBothMenorcaNews = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismAndBothCategories);

  let covidMenorcaNews = allDocsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.covidCategory);

  let categoriesOfInterestMenorcaNews = tourismAndBothMenorcaNews.concat(
    covidMenorcaNews
  );

  let categoriesOfInterestBalearenMentions =
    categoriesOfInterestBalearenNews.length;

  let categoriesOfInterestMenorcaMentions =
    categoriesOfInterestMenorcaNews.length;

  // Spain
  let mentionsTourismAndBothMenorcaFromSpain = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSpain).length;

  let mentionsCovidMenorcaFromSpain = allDocsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSpain).length;

  let mentionsCategoriesOfInterestMenorcaFromSpain =
    mentionsTourismAndBothMenorcaFromSpain + mentionsCovidMenorcaFromSpain;

  let mentionsTourismMenorcaFromSpainPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromSpain,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsCovidMenorcaFromSpainPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromSpain,
    allDocsCW
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
  let mentionsTourismAndBothMenorcaFromUnitedKingdom = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromUnitedKingdom).length;

  let mentionsCovidMenorcaFromUnitedKingdom = allDocsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromUnitedKingdom).length;

  let mentionsCategoriesOfInterestMenorcaFromUnitedKingdom =
    mentionsTourismAndBothMenorcaFromUnitedKingdom +
    mentionsCovidMenorcaFromUnitedKingdom;

  let mentionsTourismMenorcaFromUnitedKingdomPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromUnitedKingdom,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsCovidMenorcaFromUnitedKingdomPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromUnitedKingdom,
    allDocsCW
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
  let mentionsTourismAndBothMenorcaFromGermany = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromGermany).length;

  let mentionsCovidMenorcaFromGermany = allDocsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromGermany).length;

  let mentionsCategoriesOfInterestMenorcaFromGermany =
    mentionsTourismAndBothMenorcaFromGermany + mentionsCovidMenorcaFromGermany;

  let mentionsTourismMenorcaFromGermanyPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromGermany,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsCovidMenorcaFromGermanyPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromGermany,
    allDocsCW
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
  let mentionsTourismAndBothMenorcaFromItaly = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromItaly).length;

  let mentionsCovidMenorcaFromItaly = allDocsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromItaly).length;

  let mentionsCategoriesOfInterestMenorcaFromItaly =
    mentionsTourismAndBothMenorcaFromItaly + mentionsCovidMenorcaFromItaly;

  let mentionsTourismMenorcaFromItalyPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromItaly,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  let mentionsCovidMenorcaFromItalyPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromItaly,
    allDocsCW
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
  let mentionsTourismAndBothMenorcaFromFrance = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromFrance).length;

  let mentionsCovidMenorcaFromFrance = allDocsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromFrance).length;

  let mentionsCategoriesOfInterestMenorcaFromFrance =
    mentionsTourismAndBothMenorcaFromFrance + mentionsCovidMenorcaFromFrance;

  let mentionsTourismMenorcaFromFrancePercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromFrance,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  let mentionsCovidMenorcaFromFrancePercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromFrance,
    allDocsCW
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
  let mentionsTourismAndBothMenorcaFromSweden = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSweden).length;

  let mentionsCovidMenorcaFromSweden = allDocsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSweden).length;

  let mentionsCategoriesOfInterestMenorcaFromSweden =
    mentionsTourismAndBothMenorcaFromSweden + mentionsCovidMenorcaFromSweden;

  let mentionsTourismMenorcaFromSwedenPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromSweden,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsCovidMenorcaFromSwedenPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromSweden,
    allDocsCW
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
  let mentionsTourismAndBothMenorcaFromSwitzerland = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromSwitzerland).length;

  let mentionsCovidMenorcaFromSwitzerland = allDocsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromSwitzerland).length;

  let mentionsCategoriesOfInterestMenorcaFromSwitzerland =
    mentionsTourismAndBothMenorcaFromSwitzerland +
    mentionsCovidMenorcaFromSwitzerland;

  let mentionsTourismMenorcaFromSwitzerlandPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromSwitzerland,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsCovidMenorcaFromSwitzerlandPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromSwitzerland,
    allDocsCW
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
  let mentionsTourismAndBothMenorcaFromNetherlands = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromNetherlands).length;

  let mentionsCovidMenorcaFromNetherlands = allDocsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromNetherlands).length;

  let mentionsCategoriesOfInterestMenorcaFromNetherlands =
    mentionsTourismAndBothMenorcaFromNetherlands +
    mentionsCovidMenorcaFromNetherlands;

  let mentionsTourismMenorcaFromNetherlandsPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromNetherlands,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsCovidMenorcaFromNetherlandsPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromNetherlands,
    allDocsCW
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
  let mentionsTourismAndBothMenorcaFromAustria = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismAndBothCategories)
    .filter(utils.mentionFromAustria).length;

  let mentionsCovidMenorcaFromAustria = allDocsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.covidCategory)
    .filter(utils.mentionFromAustria).length;

  let mentionsCategoriesOfInterestMenorcaFromAustria =
    mentionsTourismAndBothMenorcaFromAustria + mentionsCovidMenorcaFromAustria;

  let mentionsTourismMenorcaFromAustriaPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromAustria,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsCovidMenorcaFromAustriaPercent = utils.getPercent(
    mentionsCategoriesOfInterestMenorcaFromAustria,
    allDocsCW
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

  // ===== MENTIONS OF CATEGORIES OF INTEREST (Menorca)  ========
  // Categories of Interest = tourism, covid and covid + tourism

  // Menorca
  let mentionsTourismMenorcaPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentions,
    docsCW.filter(utils.menorcaIslandMention).filter(utils.tourismCategory)
      .length
  );

  let mentionsCovidMenorcaPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentions,
    allDocsCW.filter(utils.menorcaIslandMention).filter(utils.covidCategory)
      .length
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
    allDocsCW.filter(utils.balearenMention).filter(utils.covidCategory).length
  );

  let mentionsBothBalearenPercent = utils.getPercent(
    categoriesOfInterestBalearenMentions,
    docsCW.filter(utils.balearenMention).filter(utils.bothCategory).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV by country of Menorca
  pageRows.push([
    "CONVERSA PER PAÏSOS DE Menorca (Turisme, covid i covid + turisme)",
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
  pageRows.push(["MENCIONS DE Menorca (Turisme, covid i covid + turisme)"]);
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

  return pageRows;
};

module.exports = { getKPIs };
