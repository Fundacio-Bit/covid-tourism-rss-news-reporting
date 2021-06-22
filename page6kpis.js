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
  //discarded and not discarded news
  let allDocsCW = docsCW.concat(discardedDocsCW);
  //Total Balearen Mentions (discarded and not discarded news) (Balearic Islands + Mallorca + Menorca + Ibiza + Formentera)
  let totalMentionsCW = allDocsCW.filter(utils.balearenMention).length;

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

  // TODO: decide if they should be only counted from discarded (all news should be revised in that case)
  let covidBalearenMentionsCWPercent = utils.getPercent(
    totalMentionsCW,
    allDocsCW.filter(utils.balearenMention).filter(utils.covidCategory).length
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
  ).toFixed(2).replace(".", ",");

  // ============= SOV PER CATEGORY A WEEK AGO (WA) ================

  //discarded and not discarded news
  let allDocsWA = docsWA.concat(discardedDocsWA);
  //Total Balearen Mentions (discarded and not discarded news) (Balearic Islands + Mallorca + Menorca + Ibiza + Formentera)
  let totalMentionsWA = allDocsWA.filter(utils.balearenMention).length;

  let tourismBalearenMentionsWAPercent = utils.getPercent(
    totalMentionsWA,
    docsWA.filter(utils.balearenMention).filter(utils.tourismCategory).length
  );

  // TODO: decide if they should be only counted from discarded (all news should be revised in that case)
  let covidBalearenMentionsWAPercent = utils.getPercent(
    totalMentionsWA,
    allDocsWA.filter(utils.balearenMention).filter(utils.covidCategory).length
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
  ).toFixed(2).replace(".", ",");

  // ============= SOV PER CATEGORY TWO WEEKS AGO (TWA) ================

  //discarded and not discarded news
  let allDocsTWA = docsTWA.concat(discardedDocsTWA);
  //Total Balearen Mentions (discarded and not discarded news) (Balearic Islands + Mallorca + Menorca + Ibiza + Formentera)
  let totalMentionsTWA = allDocsTWA.filter(utils.balearenMention).length;

  let tourismBalearenMentionsTWAPercent = utils.getPercent(
    totalMentionsTWA,
    docsTWA.filter(utils.balearenMention).filter(utils.tourismCategory).length
  );

  // TODO: decide if they should be only counted from discarded (all news should be revised in that case)
  let covidBalearenMentionsTWAPercent = utils.getPercent(
    totalMentionsTWA,
    allDocsTWA.filter(utils.balearenMention).filter(utils.covidCategory).length
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
  ).toFixed(2).replace(".", ",");


  // ============= Time series Balearen vs Spain (tourism, covid, tourism+covid) ================
  // calculate Balearen time series
  var balearenTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];

  let balearenTourismAndBothDocs = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismAndBothCategories);

  let balearenCovidDocs = allDocsCW
    .filter(utils.balearenMention)
    .filter(utils.covidCategory);

  let balearenTimeSeriesDocs = balearenTourismAndBothDocs.concat(
    balearenCovidDocs
  );

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
