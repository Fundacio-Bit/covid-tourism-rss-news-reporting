var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW, datesCW) => {
  // ========= Time series Balearen vs Ibiza (tourism) ============
  //discarded and not discarded news
  let allDocsCW = docsCW.concat(discardedDocsCW);
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

  // calculate Ibiza time series
  var ibizaTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];

  let ibizaTourismDocs = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismCategory);


  let ibizaTimeSeriesDocs = ibizaTourismDocs;

  // Add 1 per document to the corresponding timesSeriesArray position
  for (i = 0; i < ibizaTimeSeriesDocs.length; i++) {
    ibizaTimeSeriesArray[
      datesCW.indexOf(ibizaTimeSeriesDocs[i].publishedFormatted)
    ]++;
  }

  ibizaTimeSeriesArray.unshift("Ibiza");

  // ============= CSV creation ================

  let pageRows = [];

  // Balearen and Ibiza Time series (mentions to tourism)
  pageRows.push([
    "Evolutiu Baleares vs Ibiza (turisme)",
  ]);
  pageRows.push([""].concat(datesCW));
  pageRows.push(balearenTimeSeriesArray);
  pageRows.push(ibizaTimeSeriesArray);

  return pageRows;
};

module.exports = { getKPIs };
