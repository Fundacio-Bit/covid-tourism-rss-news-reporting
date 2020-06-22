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

  // ============= SOV COVID + TOURISM  by MARKET (country) AND ISLAND ================

  // TOTALS (only by island)
  let bothBalearenMentions = docsCW
    .filter(utils.balearenMention)
    .filter(utils.bothCategory).length;

  let bothMallorcaMentions = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.bothCategory).length;

  let bothMenorcaMentions = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.bothCategory).length;

  let bothIbizaMentions = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.bothCategory).length;

  let bothFormenteraMentions = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.bothCategory).length;

  // Spain mentions to tourism + covid (by market and island)
  let bothBalearenMentionsFromSpainPercent = utils.getPercent(
    bothBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSpain).length
  );

  let bothMallorcaMentionsFromSpainPercent = utils.getPercent(
    bothMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSpain).length
  );

  let bothMenorcaMentionsFromSpainPercent = utils.getPercent(
    bothMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSpain).length
  );

  let bothIbizaMentionsFromSpainPercent = utils.getPercent(
    bothIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSpain).length
  );

  let bothFormenteraMentionsFromSpainPercent = utils.getPercent(
    bothFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSpain).length
  );

  // United Kingdom mentions to tourism + covid (by market and island)
  let bothBalearenMentionsFromUnitedKingdomPercent = utils.getPercent(
    bothBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let bothMallorcaMentionsFromUnitedKingdomPercent = utils.getPercent(
    bothMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let bothMenorcaMentionsFromUnitedKingdomPercent = utils.getPercent(
    bothMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let bothIbizaMentionsFromUnitedKingdomPercent = utils.getPercent(
    bothIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let bothFormenteraMentionsFromUnitedKingdomPercent = utils.getPercent(
    bothFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // Germany mentions to tourism + covid (by market and island)
  let bothBalearenMentionsFromGermanyPercent = utils.getPercent(
    bothBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromGermany).length
  );

  let bothMallorcaMentionsFromGermanyPercent = utils.getPercent(
    bothMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromGermany).length
  );

  let bothMenorcaMentionsFromGermanyPercent = utils.getPercent(
    bothMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromGermany).length
  );

  let bothIbizaMentionsFromGermanyPercent = utils.getPercent(
    bothIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromGermany).length
  );

  let bothFormenteraMentionsFromGermanyPercent = utils.getPercent(
    bothFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromGermany).length
  );

  // Italy mentions to tourism + covid (by market and island)
  let bothBalearenMentionsFromItalyPercent = utils.getPercent(
    bothBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromItaly).length
  );

  let bothMallorcaMentionsFromItalyPercent = utils.getPercent(
    bothMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromItaly).length
  );

  let bothMenorcaMentionsFromItalyPercent = utils.getPercent(
    bothMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromItaly).length
  );

  let bothIbizaMentionsFromItalyPercent = utils.getPercent(
    bothIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromItaly).length
  );

  let bothFormenteraMentionsFromItalyPercent = utils.getPercent(
    bothFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromItaly).length
  );

  // France mentions to tourism + covid (by market and island)
  let bothBalearenMentionsFromFrancePercent = utils.getPercent(
    bothBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromFrance).length
  );

  let bothMallorcaMentionsFromFrancePercent = utils.getPercent(
    bothMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromFrance).length
  );

  let bothMenorcaMentionsFromFrancePercent = utils.getPercent(
    bothMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromFrance).length
  );

  let bothIbizaMentionsFromFrancePercent = utils.getPercent(
    bothIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromFrance).length
  );

  let bothFormenteraMentionsFromFrancePercent = utils.getPercent(
    bothFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromFrance).length
  );

  // Sweden mentions to tourism + covid (by market and island)
  let bothBalearenMentionsFromSwedenPercent = utils.getPercent(
    bothBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSweden).length
  );

  let bothMallorcaMentionsFromSwedenPercent = utils.getPercent(
    bothMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSweden).length
  );

  let bothMenorcaMentionsFromSwedenPercent = utils.getPercent(
    bothMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSweden).length
  );

  let bothIbizaMentionsFromSwedenPercent = utils.getPercent(
    bothIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSweden).length
  );

  let bothFormenteraMentionsFromSwedenPercent = utils.getPercent(
    bothFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSweden).length
  );

  // Switzerland mentions to tourism + covid (by market and island)
  let bothBalearenMentionsFromSwitzerlandPercent = utils.getPercent(
    bothBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let bothMallorcaMentionsFromSwitzerlandPercent = utils.getPercent(
    bothMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let bothMenorcaMentionsFromSwitzerlandPercent = utils.getPercent(
    bothMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let bothIbizaMentionsFromSwitzerlandPercent = utils.getPercent(
    bothIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let bothFormenteraMentionsFromSwitzerlandPercent = utils.getPercent(
    bothFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // Netherlands mentions to tourism + covid (by market and island)
  let bothBalearenMentionsFromNetherlandsPercent = utils.getPercent(
    bothBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let bothMallorcaMentionsFromNetherlandsPercent = utils.getPercent(
    bothMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let bothMenorcaMentionsFromNetherlandsPercent = utils.getPercent(
    bothMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let bothIbizaMentionsFromNetherlandsPercent = utils.getPercent(
    bothIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let bothFormenteraMentionsFromNetherlandsPercent = utils.getPercent(
    bothFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // Austria mentions to tourism + covid (by market and island)
  let bothBalearenMentionsFromAustriaPercent = utils.getPercent(
    bothBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromAustria).length
  );

  let bothMallorcaMentionsFromAustriaPercent = utils.getPercent(
    bothMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromAustria).length
  );

  let bothMenorcaMentionsFromAustriaPercent = utils.getPercent(
    bothMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromAustria).length
  );

  let bothIbizaMentionsFromAustriaPercent = utils.getPercent(
    bothIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromAustria).length
  );

  let bothFormenteraMentionsFromAustriaPercent = utils.getPercent(
    bothFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.bothCategory)
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

  // SOV Tourism + Covid by MARKET (country) AND ISLAND
  pageRows.push(["\n"]);
  pageRows.push(["Notícies sobre covid + turisme per illa i país"]);
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
    bothBalearenMentions,
    bothBalearenMentionsFromSpainPercent,
    bothBalearenMentionsFromUnitedKingdomPercent,
    bothBalearenMentionsFromGermanyPercent,
    bothBalearenMentionsFromItalyPercent,
    bothBalearenMentionsFromFrancePercent,
    bothBalearenMentionsFromSwedenPercent,
    bothBalearenMentionsFromSwitzerlandPercent,
    bothBalearenMentionsFromNetherlandsPercent,
    bothBalearenMentionsFromAustriaPercent,
  ]);

  pageRows.push([
    "Mallorca",
    bothMallorcaMentions,
    bothMallorcaMentionsFromSpainPercent,
    bothMallorcaMentionsFromUnitedKingdomPercent,
    bothMallorcaMentionsFromGermanyPercent,
    bothMallorcaMentionsFromItalyPercent,
    bothMallorcaMentionsFromFrancePercent,
    bothMallorcaMentionsFromSwedenPercent,
    bothMallorcaMentionsFromSwitzerlandPercent,
    bothMallorcaMentionsFromNetherlandsPercent,
    bothMallorcaMentionsFromAustriaPercent,
  ]);

  pageRows.push([
    "Menorca",
    bothMenorcaMentions,
    bothMenorcaMentionsFromSpainPercent,
    bothMenorcaMentionsFromUnitedKingdomPercent,
    bothMenorcaMentionsFromGermanyPercent,
    bothMenorcaMentionsFromItalyPercent,
    bothMenorcaMentionsFromFrancePercent,
    bothMenorcaMentionsFromSwedenPercent,
    bothMenorcaMentionsFromSwitzerlandPercent,
    bothMenorcaMentionsFromNetherlandsPercent,
    bothMenorcaMentionsFromAustriaPercent,
  ]);

  pageRows.push([
    "Ibiza",
    bothIbizaMentions,
    bothIbizaMentionsFromSpainPercent,
    bothIbizaMentionsFromUnitedKingdomPercent,
    bothIbizaMentionsFromGermanyPercent,
    bothIbizaMentionsFromItalyPercent,
    bothIbizaMentionsFromFrancePercent,
    bothIbizaMentionsFromSwedenPercent,
    bothIbizaMentionsFromSwitzerlandPercent,
    bothIbizaMentionsFromNetherlandsPercent,
    bothIbizaMentionsFromAustriaPercent,
  ]);

  pageRows.push([
    "Formentera",
    bothFormenteraMentions,
    bothFormenteraMentionsFromSpainPercent,
    bothFormenteraMentionsFromUnitedKingdomPercent,
    bothFormenteraMentionsFromGermanyPercent,
    bothFormenteraMentionsFromItalyPercent,
    bothFormenteraMentionsFromFrancePercent,
    bothFormenteraMentionsFromSwedenPercent,
    bothFormenteraMentionsFromSwitzerlandPercent,
    bothFormenteraMentionsFromNetherlandsPercent,
    bothFormenteraMentionsFromAustriaPercent,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
