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

  let balearenTourismMentionsCountCW = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory).length;

  let balearenTourismMentionsPercentCW = utils.getPercent(
    totalMentionsCW,
    balearenTourismMentionsCountCW
  );

  // ============= SOV PER CATEGORY CURRENT WEEK================
  // let balearenMentionsCW = docsCW.filter(utils.balearenMention).length;
  let tourismBalearenMentionsCWPercent = utils.getPercent(
    totalMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.tourismCategory).length
  );


  let otherBalearenMentionsCWPercent = (
    100 - parseFloat(tourismBalearenMentionsCWPercent.replace(",", "."))
  )
    .toFixed(2)
    .replace(".", ",");

  // ============= SOV PER CATEGORY A WEEK AGO (WA) ================

  //discarded and not discarded news
  let allDocsWA = docsWA.concat(discardedDocsWA);
  //Total Balearen Mentions (discarded and not discarded news) (Balearic Islands + Mallorca + Menorca + Ibiza + Formentera)
  let totalMentionsWA = allDocsWA.filter(utils.balearenMention).length;

  let tourismBalearenMentionsWAPercent = utils.getPercent(
    totalMentionsWA,
    docsWA.filter(utils.balearenMention).filter(utils.tourismCategory).length
  );

  let otherBalearenMentionsWAPercent = (
    100 -
    parseFloat(tourismBalearenMentionsWAPercent.replace(",", "."))
  )
    .toFixed(2)
    .replace(".", ",");

  // ============= SOV PER CATEGORY TWO WEEKS AGO (TWA) ================

  //discarded and not discarded news
  let allDocsTWA = docsTWA.concat(discardedDocsTWA);
  //Total Balearen Mentions (discarded and not discarded news) (Balearic Islands + Mallorca + Menorca + Ibiza + Formentera)
  let totalMentionsTWA = allDocsTWA.filter(utils.balearenMention).length;

  let tourismBalearenMentionsTWAPercent = utils.getPercent(
    totalMentionsTWA,
    docsTWA.filter(utils.balearenMention).filter(utils.tourismCategory).length
  );

  let otherBalearenMentionsTWAPercent = (
    100 -
    parseFloat(tourismBalearenMentionsTWAPercent.replace(",", "."))
  )
    .toFixed(2)
    .replace(".", ",");

  // ============= Time series Balearen vs Spain (tourism) ================
  // calculate Balearen time series
  var balearenTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];

  let balearenTourismDocs = docsCW
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory);

  let balearenTimeSeriesDocs = balearenTourismDocs;

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
    "Percentatge de mencions de turisme",
    balearenTourismMentionsPercentCW,
  ]);
  pageRows.push([
    "Total de mencions de turisme",
    balearenTourismMentionsCountCW,
  ]);

  // SOV by categories
  pageRows.push(["\n"]);
  pageRows.push(["SOV PER TEMÀTICA (de Balears)"]);
  pageRows.push(["Periode", "turisme", "reste"]);
  pageRows.push([
    `De ${datesCW[0]} a ${datesCW[6]} (${totalMentionsCW})`,
    tourismBalearenMentionsCWPercent,
    otherBalearenMentionsCWPercent,
  ]);
  pageRows.push([
    `De ${datesWA[0]} a ${datesWA[6]} (${totalMentionsWA})`,
    tourismBalearenMentionsWAPercent,
    otherBalearenMentionsWAPercent,
  ]);

  pageRows.push([
    `De ${datesTWA[0]} a ${datesTWA[6]} (${totalMentionsTWA})`,
    tourismBalearenMentionsTWAPercent,
    otherBalearenMentionsTWAPercent,
  ]);

  // Balearen Time series (mentions to tourism)
  pageRows.push(["\n"]);
  pageRows.push(["Evolutiu Balears (turisme)"]);
  pageRows.push([""].concat(datesCW));
  pageRows.push(balearenTimeSeriesArray);

  return pageRows;
};

module.exports = { getKPIs };
