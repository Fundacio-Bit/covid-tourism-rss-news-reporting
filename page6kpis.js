// var csv_manager = require("./create-csv.js");
var utils = require("./utils/utils.js");

const getKPIs = (
  docsCW,
  docsWA,
  docsTWA,
  discardedDocsCW,
  discardedDocsWA,
  discardedDocsTWA,
  datesCW,
  datesWA,
  datesTWA
) => {
  //Total Balearen Mentions (discarded and not discarded news) (Balearic Islands + Mallorca + Menorca + Ibiza + Formentera)
  let totalMentionsCW =
    docsCW.filter(utils.balearenMention).length +
    discardedDocsCW.filter(utils.balearenMention).length;

  // // Balearen Mentions (Balearic Islands + Mallorca + Menorca + Ibiza + Formentera)

  let balearenTourismAndBothMentionsCountCW = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismAndBothCategories).length;

  let balearenTourismAndBothMentionsPercentCW = utils.getPercent(
    totalMentionsCW,
    balearenTourismAndBothMentionsCountCW
  );

  // ============= SOV PER CATEGORY CURRENT WEEK================
  // let balearenMentionsCW = docsCW.filter(utils.balearenMention).length;
  let tourismBalearenMentionsCWPercent = utils.getPercent(
    totalMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.tourismCategory).length
  );

  let covidBalearenMentionsCWPercent = utils.getPercent(
    totalMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.covidCategory).length
  );

  let bothBalearenMentionsCWPercent = utils.getPercent(
    totalMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.bothCategory).length
  );

  let otherBalearenMentionsCWPercent = (
    100 -
    parseFloat(tourismBalearenMentionsCWPercent.replace(",", ".")) -
    parseFloat(covidBalearenMentionsCWPercent.replace(",", ".")) -
    parseFloat(bothBalearenMentionsCWPercent.replace(",", "."))
  ).toFixed(2);

  // ============= SOV PER CATEGORY A WEEK AGO (WA) ================

  // Balearic Islands KPIs
  // let balearenMentionsWA = docsWA.filter(utils.balearenMention).length;

  let totalMentionsWA =
    docsWA.filter(utils.balearenMention).length +
    discardedDocsWA.filter(utils.balearenMention).length;

  let tourismBalearenMentionsWAPercent = utils.getPercent(
    totalMentionsWA,
    docsWA.filter(utils.balearenMention).filter(utils.tourismCategory).length
  );

  let covidBalearenMentionsWAPercent = utils.getPercent(
    totalMentionsWA,
    docsWA.filter(utils.balearenMention).filter(utils.covidCategory).length
  );

  let bothBalearenMentionsWAPercent = utils.getPercent(
    totalMentionsWA,
    docsWA.filter(utils.balearenMention).filter(utils.bothCategory).length
  );

  let otherBalearenMentionsWAPercent = (
    100 -
    parseFloat(tourismBalearenMentionsWAPercent.replace(",", ".")) -
    parseFloat(covidBalearenMentionsWAPercent.replace(",", ".")) -
    parseFloat(bothBalearenMentionsWAPercent.replace(",", "."))
  ).toFixed(2);

  // ============= SOV PER CATEGORY TWO WEEKS AGO (TWA) ================

  // Balearic Islands KPIs
  // let balearenMentionsTWA = docsTWA.filter(utils.balearenMention).length;
  let totalMentionsTWA =
    docsTWA.filter(utils.balearenMention).length +
    discardedDocsTWA.filter(utils.balearenMention).length;

  let tourismBalearenMentionsTWAPercent = utils.getPercent(
    totalMentionsTWA,
    docsTWA.filter(utils.balearenMention).filter(utils.tourismCategory).length
  );

  let covidBalearenMentionsTWAPercent = utils.getPercent(
    totalMentionsTWA,
    docsTWA.filter(utils.balearenMention).filter(utils.covidCategory).length
  );

  let bothBalearenMentionsTWAPercent = utils.getPercent(
    totalMentionsTWA,
    docsTWA.filter(utils.balearenMention).filter(utils.bothCategory).length
  );

  let otherBalearenMentionsTWAPercent = (
    100 -
    parseFloat(tourismBalearenMentionsTWAPercent.replace(",", ".")) -
    parseFloat(covidBalearenMentionsTWAPercent.replace(",", ".")) -
    parseFloat(bothBalearenMentionsTWAPercent.replace(",", "."))
  ).toFixed(2);

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
  pageRows.push(["Mencions a Balears i/o les illes ", totalMentionsCW]);
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
    `De ${datesCW[0]} a ${datesCW[6]} (${totalMentionsCW})`,
    tourismBalearenMentionsCWPercent,
    covidBalearenMentionsCWPercent,
    bothBalearenMentionsCWPercent,
    otherBalearenMentionsCWPercent,
  ]);
  pageRows.push([
    `De ${datesWA[0]} a ${datesWA[6]} (${totalMentionsWA})`,
    tourismBalearenMentionsWAPercent,
    covidBalearenMentionsWAPercent,
    bothBalearenMentionsWAPercent,
    otherBalearenMentionsWAPercent,
  ]);

  pageRows.push([
    `De ${datesTWA[0]} a ${datesTWA[6]} (${totalMentionsTWA})`,
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
