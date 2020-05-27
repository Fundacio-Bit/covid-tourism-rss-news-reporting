var csv_manager = require("./create-csv.js");
var utils = require("./utils/utils.js");

// TODO: balearen total mentionsin CSV
// TODO: languages time series CSV

const getKPIs = (docsCW) => {
  // ============= SOV BY CATEGORY AND MARKET  (country) ================
  let balearenMentionsCW = docsCW.filter(utils.balearenMention).length;

  // Totals (only by category)
  let tourismMentions = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory).length;

  let covidMentions = docsCW
    .filter(utils.balearenMention)
    .filter(utils.covidCategory).length;

  let bothMentions = docsCW
    .filter(utils.balearenMention)
    .filter(utils.bothCategory).length;

  let tourismMentionsPercent = utils.getPercent(
    balearenMentionsCW,
    tourismMentions
  );

  let covidMentionsPercent = utils.getPercent(
    balearenMentionsCW,
    covidMentions
  );

  let bothMentionsPercent = utils.getPercent(balearenMentionsCW, bothMentions);

  // Spain (by market and category)
  let tourismMentionsFromSpainPercent = utils.getPercent(
    tourismMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let covidMentionsFromSpainPercent = utils.getPercent(
    covidMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSpain).length
  );

  let bothMentionsFromSpainPercent = utils.getPercent(
    bothMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSpain).length
  );

  // United Kingdom (by market and category)
  let tourismMentionsFromUnitedKingdomPercent = utils.getPercent(
    tourismMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let covidMentionsFromUnitedKingdomPercent = utils.getPercent(
    covidMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let bothMentionsFromUnitedKingdomPercent = utils.getPercent(
    bothMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // Germany (by market and category)
  let tourismMentionsFromGermanyPercent = utils.getPercent(
    tourismMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let covidMentionsFromGermanyPercent = utils.getPercent(
    covidMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromGermany).length
  );

  let bothMentionsFromGermanyPercent = utils.getPercent(
    bothMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromGermany).length
  );

  // Italy (by market and category)
  let tourismMentionsFromItalyPercent = utils.getPercent(
    tourismMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  let covidMentionsFromItalyPercent = utils.getPercent(
    covidMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromItaly).length
  );

  let bothMentionsFromItalyPercent = utils.getPercent(
    bothMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromItaly).length
  );

  // France (by market and category)
  let tourismMentionsFromFrancePercent = utils.getPercent(
    tourismMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  let covidMentionsFromFrancePercent = utils.getPercent(
    covidMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromFrance).length
  );

  let bothMentionsFromFrancePercent = utils.getPercent(
    bothMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromFrance).length
  );

  // Sweden (by market and category)
  let tourismMentionsFromSwedenPercent = utils.getPercent(
    tourismMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let covidMentionsFromSwedenPercent = utils.getPercent(
    covidMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSweden).length
  );

  let bothMentionsFromSwedenPercent = utils.getPercent(
    bothMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSweden).length
  );

  // Switzerland (by market and category)
  let tourismMentionsFromSwitzerlandPercent = utils.getPercent(
    tourismMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let covidMentionsFromSwitzerlandPercent = utils.getPercent(
    covidMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let bothMentionsFromSwitzerlandPercent = utils.getPercent(
    bothMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // Netherlands (by market and category)
  let tourismMentionsFromNetherlandsPercent = utils.getPercent(
    tourismMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let covidMentionsFromNetherlandsPercent = utils.getPercent(
    covidMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let bothMentionsFromNetherlandsPercent = utils.getPercent(
    bothMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // Austria (by market and category)
  let tourismMentionsFromAustriaPercent = utils.getPercent(
    tourismMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  let covidMentionsFromAustriaPercent = utils.getPercent(
    covidMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromAustria).length
  );

  let bothMentionsFromAustriaPercent = utils.getPercent(
    bothMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromAustria).length
  );

  // ============= SOV CATEGORIES OF INTEREST  by MARKET (country) AND ISLAND ================
  // Categories of interest = (covid, tourism and covid + tourism)

  // TOTALS (only by island)
  let categoriesOfInterestBalearenMentions = docsCW
    .filter(utils.balearenMention)
    .filter(utils.categoriesOfInterest).length;

  let categoriesOfInterestMallorcaMentions = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.categoriesOfInterest).length;

  let categoriesOfInterestMenorcaMentions = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.categoriesOfInterest).length;

  let categoriesOfInterestIbizaMentions = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.categoriesOfInterest).length;

  let categoriesOfInterestFormenteraMentions = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.categoriesOfInterest).length;

  // Spain mentions to tourism + covid (by market and island)
  let categoriesOfInterestBalearenMentionsFromSpainPercent = utils.getPercent(
    categoriesOfInterestBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromSpain).length
  );

  let categoriesOfInterestMallorcaMentionsFromSpainPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromSpain).length
  );

  let categoriesOfInterestMenorcaMentionsFromSpainPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromSpain).length
  );

  let categoriesOfInterestIbizaMentionsFromSpainPercent = utils.getPercent(
    categoriesOfInterestIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromSpain).length
  );

  let categoriesOfInterestFormenteraMentionsFromSpainPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromSpain).length
  );

  // United Kingdom mentions to tourism + covid (by market and island)
  let categoriesOfInterestBalearenMentionsFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let categoriesOfInterestMallorcaMentionsFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let categoriesOfInterestMenorcaMentionsFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let categoriesOfInterestIbizaMentionsFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let categoriesOfInterestFormenteraMentionsFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // Germany mentions to tourism + covid (by market and island)
  let categoriesOfInterestBalearenMentionsFromGermanyPercent = utils.getPercent(
    categoriesOfInterestBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromGermany).length
  );

  let categoriesOfInterestMallorcaMentionsFromGermanyPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromGermany).length
  );

  let categoriesOfInterestMenorcaMentionsFromGermanyPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromGermany).length
  );

  let categoriesOfInterestIbizaMentionsFromGermanyPercent = utils.getPercent(
    categoriesOfInterestIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromGermany).length
  );

  let categoriesOfInterestFormenteraMentionsFromGermanyPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromGermany).length
  );

  // Italy mentions to tourism + covid (by market and island)
  let categoriesOfInterestBalearenMentionsFromItalyPercent = utils.getPercent(
    categoriesOfInterestBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromItaly).length
  );

  let categoriesOfInterestMallorcaMentionsFromItalyPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromItaly).length
  );

  let categoriesOfInterestMenorcaMentionsFromItalyPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromItaly).length
  );

  let categoriesOfInterestIbizaMentionsFromItalyPercent = utils.getPercent(
    categoriesOfInterestIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromItaly).length
  );

  let categoriesOfInterestFormenteraMentionsFromItalyPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromItaly).length
  );

  // France mentions to tourism + covid (by market and island)
  let categoriesOfInterestBalearenMentionsFromFrancePercent = utils.getPercent(
    categoriesOfInterestBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromFrance).length
  );

  let categoriesOfInterestMallorcaMentionsFromFrancePercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromFrance).length
  );

  let categoriesOfInterestMenorcaMentionsFromFrancePercent = utils.getPercent(
    categoriesOfInterestMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromFrance).length
  );

  let categoriesOfInterestIbizaMentionsFromFrancePercent = utils.getPercent(
    categoriesOfInterestIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromFrance).length
  );

  let categoriesOfInterestFormenteraMentionsFromFrancePercent = utils.getPercent(
    categoriesOfInterestFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromFrance).length
  );

  // Sweden mentions to tourism + covid (by market and island)
  let categoriesOfInterestBalearenMentionsFromSwedenPercent = utils.getPercent(
    categoriesOfInterestBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromSweden).length
  );

  let categoriesOfInterestMallorcaMentionsFromSwedenPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromSweden).length
  );

  let categoriesOfInterestMenorcaMentionsFromSwedenPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromSweden).length
  );

  let categoriesOfInterestIbizaMentionsFromSwedenPercent = utils.getPercent(
    categoriesOfInterestIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromSweden).length
  );

  let categoriesOfInterestFormenteraMentionsFromSwedenPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromSweden).length
  );

  // Switzerland mentions to tourism + covid (by market and island)
  let categoriesOfInterestBalearenMentionsFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromSwitzerland).length
  );

  let categoriesOfInterestMallorcaMentionsFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromSwitzerland).length
  );

  let categoriesOfInterestMenorcaMentionsFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromSwitzerland).length
  );

  let categoriesOfInterestIbizaMentionsFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromSwitzerland).length
  );

  let categoriesOfInterestFormenteraMentionsFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromSwitzerland).length
  );

  // Netherlands mentions to tourism + covid (by market and island)
  let categoriesOfInterestBalearenMentionsFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromNetherlands).length
  );

  let categoriesOfInterestMallorcaMentionsFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromNetherlands).length
  );

  let categoriesOfInterestMenorcaMentionsFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromNetherlands).length
  );

  let categoriesOfInterestIbizaMentionsFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromNetherlands).length
  );

  let categoriesOfInterestFormenteraMentionsFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromNetherlands).length
  );

  // Austria mentions to tourism + covid (by market and island)
  let categoriesOfInterestBalearenMentionsFromAustriaPercent = utils.getPercent(
    categoriesOfInterestBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromAustria).length
  );

  let categoriesOfInterestMallorcaMentionsFromAustriaPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromAustria).length
  );

  let categoriesOfInterestMenorcaMentionsFromAustriaPercent = utils.getPercent(
    categoriesOfInterestMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromAustria).length
  );

  let categoriesOfInterestIbizaMentionsFromAustriaPercent = utils.getPercent(
    categoriesOfInterestIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromAustria).length
  );

  let categoriesOfInterestFormenteraMentionsFromAustriaPercent = utils.getPercent(
    categoriesOfInterestFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.categoriesOfInterest)
      .filter(utils.mentionFromAustria).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // TOTAL BALEARIC ISLANDS TOURISM VS COVID
  pageRows.push(["TOTAL ILLES BALEARS: TURISME VS. COVID-19"]);
  pageRows.push(["Categoria", "Total", "Percentatge"]);
  pageRows.push(["Turisme", tourismMentions, tourismMentionsPercent]);
  pageRows.push(["Covid-19", covidMentions, covidMentionsPercent]);
  pageRows.push(["Turisme + Covid-19", bothMentions, bothMentionsPercent]);
  pageRows.push(["\n"]);
  pageRows.push(["CONVERSACIÓ TURISME"]);
  pageRows.push([
    "España",
    "Regne Unit",
    "Alemanya",
    "Itàlia",
    "França",
    "Suècia",
    "Suïssa",
    "Holanda",
    "Austria",
  ]);
  pageRows.push([
    tourismMentionsFromSpainPercent,
    tourismMentionsFromUnitedKingdomPercent,
    tourismMentionsFromGermanyPercent,
    tourismMentionsFromItalyPercent,
    tourismMentionsFromFrancePercent,
    tourismMentionsFromSwedenPercent,
    tourismMentionsFromSwitzerlandPercent,
    tourismMentionsFromNetherlandsPercent,
    tourismMentionsFromAustriaPercent,
  ]);

  pageRows.push(["\n"]);
  pageRows.push(["CONVERSACIÓ COVID-19"]);
  pageRows.push([
    "España",
    "Regne Unit",
    "Alemanya",
    "Itàlia",
    "França",
    "Suècia",
    "Suïssa",
    "Holanda",
    "Austria",
  ]);
  pageRows.push([
    covidMentionsFromSpainPercent,
    covidMentionsFromUnitedKingdomPercent,
    covidMentionsFromGermanyPercent,
    covidMentionsFromItalyPercent,
    covidMentionsFromFrancePercent,
    covidMentionsFromSwedenPercent,
    covidMentionsFromSwitzerlandPercent,
    covidMentionsFromNetherlandsPercent,
    covidMentionsFromAustriaPercent,
  ]);

  pageRows.push(["\n"]);
  pageRows.push(["CONVERSACIÓ TURISME + COVID-19"]);
  pageRows.push([
    "España",
    "Regne Unit",
    "Alemanya",
    "Itàlia",
    "França",
    "Suècia",
    "Suïssa",
    "Holanda",
    "Austria",
  ]);
  pageRows.push([
    bothMentionsFromSpainPercent,
    bothMentionsFromUnitedKingdomPercent,
    bothMentionsFromGermanyPercent,
    bothMentionsFromItalyPercent,
    bothMentionsFromFrancePercent,
    bothMentionsFromSwedenPercent,
    bothMentionsFromSwitzerlandPercent,
    bothMentionsFromNetherlandsPercent,
    bothMentionsFromAustriaPercent,
  ]);

  // SOV CATEGORIES OF INTEREST  by MARKET (country) AND ISLAND
  pageRows.push(["\n"]);
  pageRows.push([
    "Notícies sobre turisme, covid i covid + turisme per illa i país",
  ]);
  pageRows.push([
    "Illa",
    "Total mencions",
    "España",
    "Regne Unit",
    "Alemanya",
    "Itàlia",
    "França",
    "Suècia",
    "Suïssa",
    "Holanda",
    "Austria",
  ]);
  pageRows.push([
    "Balears (Balears + Mallorca + Menorca + Ibiza +  Formentera)",
    categoriesOfInterestBalearenMentions,
    categoriesOfInterestBalearenMentionsFromSpainPercent,
    categoriesOfInterestBalearenMentionsFromUnitedKingdomPercent,
    categoriesOfInterestBalearenMentionsFromGermanyPercent,
    categoriesOfInterestBalearenMentionsFromItalyPercent,
    categoriesOfInterestBalearenMentionsFromFrancePercent,
    categoriesOfInterestBalearenMentionsFromSwedenPercent,
    categoriesOfInterestBalearenMentionsFromSwitzerlandPercent,
    categoriesOfInterestBalearenMentionsFromNetherlandsPercent,
    categoriesOfInterestBalearenMentionsFromAustriaPercent,
  ]);

  pageRows.push([
    "Mallorca",
    categoriesOfInterestMallorcaMentions,
    categoriesOfInterestMallorcaMentionsFromSpainPercent,
    categoriesOfInterestMallorcaMentionsFromUnitedKingdomPercent,
    categoriesOfInterestMallorcaMentionsFromGermanyPercent,
    categoriesOfInterestMallorcaMentionsFromItalyPercent,
    categoriesOfInterestMallorcaMentionsFromFrancePercent,
    categoriesOfInterestMallorcaMentionsFromSwedenPercent,
    categoriesOfInterestMallorcaMentionsFromSwitzerlandPercent,
    categoriesOfInterestMallorcaMentionsFromNetherlandsPercent,
    categoriesOfInterestMallorcaMentionsFromAustriaPercent,
  ]);

  pageRows.push([
    "Menorca",
    categoriesOfInterestMenorcaMentions,
    categoriesOfInterestMenorcaMentionsFromSpainPercent,
    categoriesOfInterestMenorcaMentionsFromUnitedKingdomPercent,
    categoriesOfInterestMenorcaMentionsFromGermanyPercent,
    categoriesOfInterestMenorcaMentionsFromItalyPercent,
    categoriesOfInterestMenorcaMentionsFromFrancePercent,
    categoriesOfInterestMenorcaMentionsFromSwedenPercent,
    categoriesOfInterestMenorcaMentionsFromSwitzerlandPercent,
    categoriesOfInterestMenorcaMentionsFromNetherlandsPercent,
    categoriesOfInterestMenorcaMentionsFromAustriaPercent,
  ]);

  pageRows.push([
    "Ibiza",
    categoriesOfInterestIbizaMentions,
    categoriesOfInterestIbizaMentionsFromSpainPercent,
    categoriesOfInterestIbizaMentionsFromUnitedKingdomPercent,
    categoriesOfInterestIbizaMentionsFromGermanyPercent,
    categoriesOfInterestIbizaMentionsFromItalyPercent,
    categoriesOfInterestIbizaMentionsFromFrancePercent,
    categoriesOfInterestIbizaMentionsFromSwedenPercent,
    categoriesOfInterestIbizaMentionsFromSwitzerlandPercent,
    categoriesOfInterestIbizaMentionsFromNetherlandsPercent,
    categoriesOfInterestIbizaMentionsFromAustriaPercent,
  ]);

  pageRows.push([
    "Formentera",
    categoriesOfInterestFormenteraMentions,
    categoriesOfInterestFormenteraMentionsFromSpainPercent,
    categoriesOfInterestFormenteraMentionsFromUnitedKingdomPercent,
    categoriesOfInterestFormenteraMentionsFromGermanyPercent,
    categoriesOfInterestFormenteraMentionsFromItalyPercent,
    categoriesOfInterestFormenteraMentionsFromFrancePercent,
    categoriesOfInterestFormenteraMentionsFromSwedenPercent,
    categoriesOfInterestFormenteraMentionsFromSwitzerlandPercent,
    categoriesOfInterestFormenteraMentionsFromNetherlandsPercent,
    categoriesOfInterestFormenteraMentionsFromAustriaPercent,
  ]);

  // create the page 10 CSV
  csv_manager.create_csv("output/page10_news.csv", pageRows);
};

module.exports = { getKPIs };
