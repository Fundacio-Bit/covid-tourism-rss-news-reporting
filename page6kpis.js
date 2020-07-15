// var csv_manager = require("./create-csv.js");
var utils = require("./utils/utils.js");

const getKPIs = (docsCW, docsWA, docsTWA, datesCW, datesWA, datesTWA) => {
  // Total Mentions (Balearic Islands + Mallorca + Menorca + Ibiza + Formentera)
  // let totalMentionsCountCW = docsCW.length;
  let balearenMentionsCW = docsCW.filter(utils.balearenMention).length;
  let balearenTourismAndBothMentionsCountCW = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismAndBothCategories).length;
  let balearenTourismAndBothMentionsPercentCW = utils.getPercent(
    balearenMentionsCW,
    balearenTourismAndBothMentionsCountCW
  );

  // ============= SOV PER CATEGORY CURRENT WEEK================
  // let balearenMentionsCW = docsCW.filter(utils.balearenMention).length;
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
    .filter(utils.categoriesOfInterest);

  // Add 1 per document to the corresponding timesSeriesArray position
  for (i = 0; i < balearenTimeSeriesDocs.length; i++) {
    balearenTimeSeriesArray[
      datesCW.indexOf(balearenTimeSeriesDocs[i].publishedFormatted)
    ]++;
  }

  balearenTimeSeriesArray.unshift("Balears");

  // ============= CSV creation ================

  let pageRows = [];
  // Total Mentions and tourism percent
  pageRows.push(["Mencions a Balears i/o les illes ", balearenMentionsCW]);
  pageRows.push([
    "Percentatge de mencions de turisme (inclou turisme i turisme + covid)",
    balearenTourismAndBothMentionsPercentCW,
  ]);
  pageRows.push([
    "Total de mencions de turisme (inclou turisme i turisme + covid)",
    balearenTourismAndBothMentionsCountCW,
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

  // Balearen Time series (mentions to covid, tourism and both)
  pageRows.push(["\n"]);
  pageRows.push(["Evolutiu Balears (turisme, covid, turisme + covid)"]);
  pageRows.push([""].concat(datesCW));
  pageRows.push(balearenTimeSeriesArray);

  return pageRows;
};

module.exports = { getKPIs };
