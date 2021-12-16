var utils = require("./utils/utils.js");

// TODO: balearen total mentionsin CSV
// TODO: languages time series CSV

const getKPIs = (docsCW, discardedDocsCW) => {
  // ============= SOV BY CATEGORY AND MARKET  (country) ================
  // let balearenMentionsCW = docsCW.filter(utils.balearenMention).length;
  //discarded and not discarded news
  let allDocsCW = docsCW.concat(discardedDocsCW);
  //Total Balearen Mentions (discarded and not discarded news) (Balearic Islands + Mallorca + Menorca + Ibiza + Formentera)
  let totalMentionsCW = allDocsCW.filter(utils.balearenMention).length;

  // Totals (only by category)
  let tourismMentions = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory).length;

  let tourismMentionsPercent = utils.getPercent(
    totalMentionsCW,
    tourismMentions
  );

  // Spain (by market and category)
  let tourismMentionsFromSpainPercent = utils.getPercent(
    tourismMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
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

  // Germany (by market and category)
  let tourismMentionsFromGermanyPercent = utils.getPercent(
    tourismMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
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

  // France (by market and category)
  let tourismMentionsFromFrancePercent = utils.getPercent(
    tourismMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
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

  // Switzerland (by market and category)
  let tourismMentionsFromSwitzerlandPercent = utils.getPercent(
    tourismMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
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


  // Austria (by market and category)
  let tourismMentionsFromAustriaPercent = utils.getPercent(
    tourismMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

 
  // ============= SOV TOURISM  by MARKET (country) AND ISLAND ================

  // TOTALS (only by island)
  let tourismBalearenMentions = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory).length;

  let tourismMallorcaMentions = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismCategory).length;

  let tourismMenorcaMentions = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismCategory).length;

  let tourismIbizaMentions = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismCategory).length;

  let tourismFormenteraMentions = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismCategory).length;

  // Spain mentions to tourism (by market and island)
  let tourismBalearenMentionsFromSpainPercent = utils.getPercent(
    tourismBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let tourismMallorcaMentionsFromSpainPercent = utils.getPercent(
    tourismMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let tourismMenorcaMentionsFromSpainPercent = utils.getPercent(
    tourismMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let tourismIbizaMentionsFromSpainPercent = utils.getPercent(
    tourismIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let tourismFormenteraMentionsFromSpainPercent = utils.getPercent(
    tourismFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  // United Kingdom mentions to tourism (by market and island)
  let tourismBalearenMentionsFromUnitedKingdomPercent = utils.getPercent(
    tourismBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let tourismMallorcaMentionsFromUnitedKingdomPercent = utils.getPercent(
    tourismMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let tourismMenorcaMentionsFromUnitedKingdomPercent = utils.getPercent(
    tourismMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let tourismIbizaMentionsFromUnitedKingdomPercent = utils.getPercent(
    tourismIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let tourismFormenteraMentionsFromUnitedKingdomPercent = utils.getPercent(
    tourismFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // Germany mentions to tourism (by market and island)
  let tourismBalearenMentionsFromGermanyPercent = utils.getPercent(
    tourismBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let tourismMallorcaMentionsFromGermanyPercent = utils.getPercent(
    tourismMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let tourismMenorcaMentionsFromGermanyPercent = utils.getPercent(
    tourismMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let tourismIbizaMentionsFromGermanyPercent = utils.getPercent(
    tourismIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let tourismFormenteraMentionsFromGermanyPercent = utils.getPercent(
    tourismFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  // Italy mentions to tourism (by market and island)
  let tourismBalearenMentionsFromItalyPercent = utils.getPercent(
    tourismBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  let tourismMallorcaMentionsFromItalyPercent = utils.getPercent(
    tourismMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  let tourismMenorcaMentionsFromItalyPercent = utils.getPercent(
    tourismMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  let tourismIbizaMentionsFromItalyPercent = utils.getPercent(
    tourismIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  let tourismFormenteraMentionsFromItalyPercent = utils.getPercent(
    tourismFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  // France mentions to tourism (by market and island)
  let tourismBalearenMentionsFromFrancePercent = utils.getPercent(
    tourismBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  let tourismMallorcaMentionsFromFrancePercent = utils.getPercent(
    tourismMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  let tourismMenorcaMentionsFromFrancePercent = utils.getPercent(
    tourismMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  let tourismIbizaMentionsFromFrancePercent = utils.getPercent(
    tourismIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  let tourismFormenteraMentionsFromFrancePercent = utils.getPercent(
    tourismFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  // Sweden mentions to tourism (by market and island)
  let tourismBalearenMentionsFromSwedenPercent = utils.getPercent(
    tourismBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let tourismMallorcaMentionsFromSwedenPercent = utils.getPercent(
    tourismMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let tourismMenorcaMentionsFromSwedenPercent = utils.getPercent(
    tourismMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let tourismIbizaMentionsFromSwedenPercent = utils.getPercent(
    tourismIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let tourismFormenteraMentionsFromSwedenPercent = utils.getPercent(
    tourismFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  // Switzerland mentions to tourism (by market and island)
  let tourismBalearenMentionsFromSwitzerlandPercent = utils.getPercent(
    tourismBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let tourismMallorcaMentionsFromSwitzerlandPercent = utils.getPercent(
    tourismMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let tourismMenorcaMentionsFromSwitzerlandPercent = utils.getPercent(
    tourismMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let tourismIbizaMentionsFromSwitzerlandPercent = utils.getPercent(
    tourismIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let tourismFormenteraMentionsFromSwitzerlandPercent = utils.getPercent(
    tourismFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // Netherlands mentions to tourism (by market and island)
  let tourismBalearenMentionsFromNetherlandsPercent = utils.getPercent(
    tourismBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let tourismMallorcaMentionsFromNetherlandsPercent = utils.getPercent(
    tourismMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let tourismMenorcaMentionsFromNetherlandsPercent = utils.getPercent(
    tourismMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let tourismIbizaMentionsFromNetherlandsPercent = utils.getPercent(
    tourismIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let tourismFormenteraMentionsFromNetherlandsPercent = utils.getPercent(
    tourismFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // Austria mentions to tourism (by market and island)
  let tourismBalearenMentionsFromAustriaPercent = utils.getPercent(
    tourismBalearenMentions,
    docsCW
      .filter(utils.balearenMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  let tourismMallorcaMentionsFromAustriaPercent = utils.getPercent(
    tourismMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  let tourismMenorcaMentionsFromAustriaPercent = utils.getPercent(
    tourismMenorcaMentions,
    docsCW
      .filter(utils.menorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  let tourismIbizaMentionsFromAustriaPercent = utils.getPercent(
    tourismIbizaMentions,
    docsCW
      .filter(utils.ibizaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  let tourismFormenteraMentionsFromAustriaPercent = utils.getPercent(
    tourismFormenteraMentions,
    docsCW
      .filter(utils.formenteraIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // TOTAL BALEARIC ISLANDS TOURISM
  pageRows.push(["TOTAL ILLES BALEARS: TURISME"]);
  pageRows.push(["Categoria", "Total", "Percentatge"]);
  pageRows.push(["Turisme", tourismMentions, tourismMentionsPercent]);
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


  // SOV Tourism by MARKET (country) AND ISLAND
  pageRows.push(["\n"]);
  pageRows.push(["Notícies sobre turisme per illa i país"]);
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
    tourismBalearenMentions,
    tourismBalearenMentionsFromSpainPercent,
    tourismBalearenMentionsFromUnitedKingdomPercent,
    tourismBalearenMentionsFromGermanyPercent,
    tourismBalearenMentionsFromItalyPercent,
    tourismBalearenMentionsFromFrancePercent,
    tourismBalearenMentionsFromSwedenPercent,
    tourismBalearenMentionsFromSwitzerlandPercent,
    tourismBalearenMentionsFromNetherlandsPercent,
    tourismBalearenMentionsFromAustriaPercent,
  ]);

  pageRows.push([
    "Mallorca",
    tourismMallorcaMentions,
    tourismMallorcaMentionsFromSpainPercent,
    tourismMallorcaMentionsFromUnitedKingdomPercent,
    tourismMallorcaMentionsFromGermanyPercent,
    tourismMallorcaMentionsFromItalyPercent,
    tourismMallorcaMentionsFromFrancePercent,
    tourismMallorcaMentionsFromSwedenPercent,
    tourismMallorcaMentionsFromSwitzerlandPercent,
    tourismMallorcaMentionsFromNetherlandsPercent,
    tourismMallorcaMentionsFromAustriaPercent,
  ]);

  pageRows.push([
    "Menorca",
    tourismMenorcaMentions,
    tourismMenorcaMentionsFromSpainPercent,
    tourismMenorcaMentionsFromUnitedKingdomPercent,
    tourismMenorcaMentionsFromGermanyPercent,
    tourismMenorcaMentionsFromItalyPercent,
    tourismMenorcaMentionsFromFrancePercent,
    tourismMenorcaMentionsFromSwedenPercent,
    tourismMenorcaMentionsFromSwitzerlandPercent,
    tourismMenorcaMentionsFromNetherlandsPercent,
    tourismMenorcaMentionsFromAustriaPercent,
  ]);

  pageRows.push([
    "Ibiza",
    tourismIbizaMentions,
    tourismIbizaMentionsFromSpainPercent,
    tourismIbizaMentionsFromUnitedKingdomPercent,
    tourismIbizaMentionsFromGermanyPercent,
    tourismIbizaMentionsFromItalyPercent,
    tourismIbizaMentionsFromFrancePercent,
    tourismIbizaMentionsFromSwedenPercent,
    tourismIbizaMentionsFromSwitzerlandPercent,
    tourismIbizaMentionsFromNetherlandsPercent,
    tourismIbizaMentionsFromAustriaPercent,
  ]);

  pageRows.push([
    "Formentera",
    tourismFormenteraMentions,
    tourismFormenteraMentionsFromSpainPercent,
    tourismFormenteraMentionsFromUnitedKingdomPercent,
    tourismFormenteraMentionsFromGermanyPercent,
    tourismFormenteraMentionsFromItalyPercent,
    tourismFormenteraMentionsFromFrancePercent,
    tourismFormenteraMentionsFromSwedenPercent,
    tourismFormenteraMentionsFromSwitzerlandPercent,
    tourismFormenteraMentionsFromNetherlandsPercent,
    tourismFormenteraMentionsFromAustriaPercent,
  ]);

  return pageRows;
};

module.exports = { getKPIs };
