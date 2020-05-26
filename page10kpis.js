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

  // create the page 8 CSV
  csv_manager.create_csv("output/page10_news.csv", pageRows);
};

module.exports = { getKPIs };
