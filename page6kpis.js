var csv_manager = require("./create-csv.js");
var utils = require("./utils/utils.js");

const getKPIs = (docsCW, docsWA, docsTWA, datesCW, datesWA, datesTWA) => {
  // Total Mentions (Balearic Islands + Spain)
  let totalMentionsCountCW = docsCW.length;
  let tourismAndBothMentionsCountCW = docsCW.filter(
    utils.tourismAndBothCategories
  ).length;
  let tourismAndBothMentionsPercentCW = utils.getPercent(
    totalMentionsCountCW,
    tourismAndBothMentionsCountCW
  );

  // ============= SOV PER CATEGORY CURRENT WEEK================
  let balearenMentionsCW = docsCW.filter(utils.balearenMention).length;
  let tourismBalearenMentionsCWPercent = utils.getPercent(
    balearenMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.tourismCategory).length
  );

  let covidBalearenMentionsCWPercent = utils.getPercent(
    balearenMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.covidCategory).length
  );

  let bothBalearenMentionsCWPercent = utils.getPercent(
    balearenMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.bothCategory).length
  );

  let otherBalearenMentionsCWPercent = utils.getPercent(
    balearenMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.otherCategory).length
  );

  // ============= SOV PER CATEGORY A WEEK AGO (WA) ================
  // Total Mentions (Balearic Islands + Spain)
  let totalMentionsCountWA = docsWA.length;
  let tourismAndBothMentionsCountWA = docsWA.filter(
    utils.tourismAndBothCategories
  ).length;
  let tourismAndBothMentionsPercentWA = utils.getPercent(
    totalMentionsCountWA,
    tourismAndBothMentionsCountWA
  );

  // Balearic Islands KPIs
  let balearenMentionsWA = docsWA.filter(utils.balearenMention).length;
  let tourismBalearenMentionsWAPercent = utils.getPercent(
    balearenMentionsWA,
    docsWA.filter(utils.balearenMention).filter(utils.tourismCategory).length
  );

  let covidBalearenMentionsWAPercent = utils.getPercent(
    balearenMentionsWA,
    docsWA.filter(utils.balearenMention).filter(utils.covidCategory).length
  );

  let bothBalearenMentionsWAPercent = utils.getPercent(
    balearenMentionsWA,
    docsWA.filter(utils.balearenMention).filter(utils.bothCategory).length
  );

  let otherBalearenMentionsWAPercent = utils.getPercent(
    balearenMentionsWA,
    docsWA.filter(utils.balearenMention).filter(utils.otherCategory).length
  );

  // ============= SOV PER CATEGORY TWO WEEKS AGO (TWA) ================
  // Total Mentions (Balearic Islands + Spain)
  let totalMentionsCountTWA = docsTWA.length;
  let tourismAndBothMentionsCountTWA = docsTWA.filter(
    utils.tourismAndBothCategories
  ).length;
  let tourismAndBothMentionsPercentTWA = utils.getPercent(
    totalMentionsCountTWA,
    tourismAndBothMentionsCountTWA
  );

  // Balearic Islands KPIs
  let balearenMentionsTWA = docsTWA.filter(utils.balearenMention).length;
  let tourismBalearenMentionsTWAPercent = utils.getPercent(
    balearenMentionsTWA,
    docsTWA.filter(utils.balearenMention).filter(utils.tourismCategory).length
  );

  let covidBalearenMentionsTWAPercent = utils.getPercent(
    balearenMentionsTWA,
    docsTWA.filter(utils.balearenMention).filter(utils.covidCategory).length
  );

  let bothBalearenMentionsTWAPercent = utils.getPercent(
    balearenMentionsTWA,
    docsTWA.filter(utils.balearenMention).filter(utils.bothCategory).length
  );

  let otherBalearenMentionsTWAPercent = utils.getPercent(
    balearenMentionsTWA,
    docsTWA.filter(utils.balearenMention).filter(utils.otherCategory).length
  );

  // ============= Time series Balearen vs Spain (tourism, covid, tourism+covid) ================
  // calculate Balearen time series
  var balearenTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];

  let balearenTimeSeriesDocs = docsCW
    .filter(utils.balearenMention)
    .filter(utils.relevantCategories);

  // Add 1 per document to the corresponding timesSeriesArray position
  for (i = 0; i < balearenTimeSeriesDocs.length; i++) {
    balearenTimeSeriesArray[
      datesCW.indexOf(balearenTimeSeriesDocs[i].publishedFormatted)
    ]++;
  }

  // calculate Spain time series
  var spainTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];

  let spainTimeSeriesDocs = docsCW
    .filter(utils.spainMention)
    .filter(utils.relevantCategories);

  // Add 1 per document to the corresponding timesSeriesArray position
  for (i = 0; i < spainTimeSeriesDocs.length; i++) {
    spainTimeSeriesArray[
      datesCW.indexOf(spainTimeSeriesDocs[i].publishedFormatted)
    ]++;
  }

  // ============= CSV creation ================

  let pageRows = [];
  // Total Mentions and tourism percent
  pageRows.push(["Mencions", totalMentionsCountCW]);
  pageRows.push([
    "Percentatge de mencions de turisme (inclou turisme i turisme + covid)",
    tourismAndBothMentionsPercentCW,
  ]);

  // SOV by categories
  pageRows.push(["\n"]);
  pageRows.push(["SOV PER TEMÀTICA (de Balears)"]);
  pageRows.push(["Periode", "turisme", "covid", "turisme + covid", "reste"]);
  pageRows.push([
    `De ${datesCW[0]} a ${datesCW[6]} (${balearenMentionsCW})`,
    tourismBalearenMentionsCWPercent,
    covidBalearenMentionsCWPercent,
    bothBalearenMentionsCWPercent,
    otherBalearenMentionsCWPercent,
  ]);
  pageRows.push([
    `De ${datesWA[0]} a ${datesWA[6]} (${balearenMentionsWA})`,
    tourismBalearenMentionsWAPercent,
    covidBalearenMentionsWAPercent,
    bothBalearenMentionsWAPercent,
    otherBalearenMentionsWAPercent,
  ]);

  pageRows.push([
    `De ${datesTWA[0]} a ${datesTWA[6]} (${balearenMentionsTWA})`,
    tourismBalearenMentionsTWAPercent,
    covidBalearenMentionsTWAPercent,
    bothBalearenMentionsTWAPercent,
    otherBalearenMentionsTWAPercent,
  ]);

  // Spain and Balearen Time series (mentions to covid, tourism and both)
  pageRows.push(["\n"]);
  pageRows.push(["Evolutivo Baleares (turismo, covid, turismo + covid)"]);
  pageRows.push(datesCW);
  pageRows.push(balearenTimeSeriesArray);
  pageRows.push([]);
  pageRows.push(["Evolutivo España (turismo, covid, turismo + covid)"]);
  pageRows.push(datesCW);
  pageRows.push(spainTimeSeriesArray);

  // create the page 5 CSV
  csv_manager.create_csv("output/page6_news.csv", pageRows);
};

module.exports = { getKPIs };
