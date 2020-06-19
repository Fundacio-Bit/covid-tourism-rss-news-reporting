var csv_manager = require("./create-csv.js");
var utils = require("./utils/utils.js");

const getKPIs = (docsCW, datesCW) => {
  // ============= SOV PER MARKET (only current week) ================
  let balearenMentionsCW = docsCW.filter(utils.balearenMention).length;

  let mentionsFromSpainPercent = utils.getPercent(
    balearenMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.mentionFromSpain).length
  );

  let mentionsFromUnitedKingdomPercent = utils.getPercent(
    balearenMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.mentionFromUnitedKingdom)
      .length
  );

  let mentionsFromGermanyPercent = utils.getPercent(
    balearenMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.mentionFromGermany).length
  );

  let mentionsFromItalyPercent = utils.getPercent(
    balearenMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.mentionFromItaly).length
  );

  let mentionsFromFrancePercent = utils.getPercent(
    balearenMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.mentionFromFrance).length
  );

  let mentionsFromSwedenPercent = utils.getPercent(
    balearenMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.mentionFromSweden).length
  );

  let mentionsFromSwitzerlandPercent = utils.getPercent(
    balearenMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.mentionFromSwitzerland)
      .length
  );

  let mentionsFromNetherlandsPercent = utils.getPercent(
    balearenMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.mentionFromNetherlands)
      .length
  );

  let mentionsFromAustriaPercent = utils.getPercent(
    balearenMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.mentionFromAustria).length
  );

  // ============= Time series Balearen: totals by country ================

  // calculate total mentions from Spain time series
  var mentionsFromSpainTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];

  let mentionsFromSpain = docsCW
    .filter(utils.balearenMention)
    .filter(utils.mentionFromSpain);

  // Add 1 per document to the corresponding timesSeriesArray position
  for (i = 0; i < mentionsFromSpain.length; i++) {
    mentionsFromSpainTimeSeriesArray[
      datesCW.indexOf(mentionsFromSpain[i].publishedFormatted)
    ]++;
  }

  mentionsFromSpainTimeSeriesArray.unshift("Espanya");

  // calculate total mentions from Spain time series
  var mentionsFromUnitedKingdomTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];
  let mentionsFromUnitedKingdom = docsCW
    .filter(utils.balearenMention)
    .filter(utils.mentionFromUnitedKingdom);

  // Add 1 per document to the corresponding timesSeriesArray position
  for (i = 0; i < mentionsFromUnitedKingdom.length; i++) {
    mentionsFromUnitedKingdomTimeSeriesArray[
      datesCW.indexOf(mentionsFromUnitedKingdom[i].publishedFormatted)
    ]++;
  }

  mentionsFromUnitedKingdomTimeSeriesArray.unshift("Regne Unit");

  // calculate total mentions from Spain time series
  var mentionsFromGermanyTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];
  let mentionsFromGermany = docsCW
    .filter(utils.balearenMention)
    .filter(utils.mentionFromGermany);

  // Add 1 per document to the corresponding timesSeriesArray position
  for (i = 0; i < mentionsFromGermany.length; i++) {
    mentionsFromGermanyTimeSeriesArray[
      datesCW.indexOf(mentionsFromGermany[i].publishedFormatted)
    ]++;
  }

  mentionsFromGermanyTimeSeriesArray.unshift("Alemanya");

  // calculate total mentions from Spain time series
  var mentionsFromItalyTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];
  let mentionsFromItaly = docsCW
    .filter(utils.balearenMention)
    .filter(utils.mentionFromItaly);

  // Add 1 per document to the corresponding timesSeriesArray position
  for (i = 0; i < mentionsFromItaly.length; i++) {
    mentionsFromItalyTimeSeriesArray[
      datesCW.indexOf(mentionsFromItaly[i].publishedFormatted)
    ]++;
  }

  mentionsFromItalyTimeSeriesArray.unshift("Itàlia");

  // calculate total mentions from Spain time series
  var mentionsFromFranceTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];
  let mentionsFromFrance = docsCW
    .filter(utils.balearenMention)
    .filter(utils.mentionFromFrance);

  // Add 1 per document to the corresponding timesSeriesArray position
  for (i = 0; i < mentionsFromFrance.length; i++) {
    mentionsFromFranceTimeSeriesArray[
      datesCW.indexOf(mentionsFromFrance[i].publishedFormatted)
    ]++;
  }

  mentionsFromFranceTimeSeriesArray.unshift("França");

  // calculate total mentions from Spain time series
  var mentionsFromSwedenTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];
  let mentionsFromSweden = docsCW
    .filter(utils.balearenMention)
    .filter(utils.mentionFromSweden);

  // Add 1 per document to the corresponding timesSeriesArray position
  for (i = 0; i < mentionsFromSweden.length; i++) {
    mentionsFromSwedenTimeSeriesArray[
      datesCW.indexOf(mentionsFromSweden[i].publishedFormatted)
    ]++;
  }

  mentionsFromSwedenTimeSeriesArray.unshift("Suècia");

  // calculate total mentions from Spain time series
  var mentionsFromSwitzerlandTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];
  let mentionsFromSwitzerland = docsCW
    .filter(utils.balearenMention)
    .filter(utils.mentionFromSwitzerland);

  // Add 1 per document to the corresponding timesSeriesArray position
  for (i = 0; i < mentionsFromSwitzerland.length; i++) {
    mentionsFromSwitzerlandTimeSeriesArray[
      datesCW.indexOf(mentionsFromSwitzerland[i].publishedFormatted)
    ]++;
  }

  mentionsFromSwitzerlandTimeSeriesArray.unshift("Suïssa");

  // calculate total mentions from Spain time series
  var mentionsFromNetherlandsTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];
  let mentionsFromNetherlands = docsCW
    .filter(utils.balearenMention)
    .filter(utils.mentionFromNetherlands);

  // Add 1 per document to the corresponding timesSeriesArray position
  for (i = 0; i < mentionsFromNetherlands.length; i++) {
    mentionsFromNetherlandsTimeSeriesArray[
      datesCW.indexOf(mentionsFromNetherlands[i].publishedFormatted)
    ]++;
  }

  mentionsFromNetherlandsTimeSeriesArray.unshift("Holanda");

  // calculate total mentions from Spain time series
  var mentionsFromAustriaTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];
  let mentionsFromAustria = docsCW
    .filter(utils.balearenMention)
    .filter(utils.mentionFromAustria);

  // Add 1 per document to the corresponding timesSeriesArray position
  for (i = 0; i < mentionsFromAustria.length; i++) {
    mentionsFromAustriaTimeSeriesArray[
      datesCW.indexOf(mentionsFromAustria[i].publishedFormatted)
    ]++;
  }

  mentionsFromAustriaTimeSeriesArray.unshift("Austria");

  // ============= CSV creation ================
  let pageRows = [];
  // SOV by country
  pageRows.push(["Mencions totals de Balears", balearenMentionsCW]);
  pageRows.push(["\n"]);
  pageRows.push(["SOV PER PAÏSOS (de Balears)"]);
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
    mentionsFromSpainPercent,
    mentionsFromUnitedKingdomPercent,
    mentionsFromGermanyPercent,
    mentionsFromItalyPercent,
    mentionsFromFrancePercent,
    mentionsFromSwedenPercent,
    mentionsFromSwitzerlandPercent,
    mentionsFromNetherlandsPercent,
    mentionsFromAustriaPercent,
  ]);

  // Time series by country

  pageRows.push(["\n"]);
  pageRows.push(["Evolutiu per idiomas sobre Balears"]);
  pageRows.push([""].concat(datesCW));
  pageRows.push(mentionsFromSpainTimeSeriesArray);
  pageRows.push(mentionsFromUnitedKingdomTimeSeriesArray);
  pageRows.push(mentionsFromGermanyTimeSeriesArray);
  pageRows.push(mentionsFromItalyTimeSeriesArray);
  pageRows.push(mentionsFromFranceTimeSeriesArray);
  pageRows.push(mentionsFromSwedenTimeSeriesArray);
  pageRows.push(mentionsFromSwitzerlandTimeSeriesArray);
  pageRows.push(mentionsFromNetherlandsTimeSeriesArray);
  pageRows.push(mentionsFromAustriaTimeSeriesArray);

  return pageRows;
};

module.exports = { getKPIs };
