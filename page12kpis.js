var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW, datesCW) => {
  // ========= Time series Balearen vs Mallorca (tourism) ============
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

  // calculate Mallorca time series
  var mallorcaTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];

  let mallorcaTourismDocs = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismCategory);

  let mallorcaTimeSeriesDocs = mallorcaTourismDocs;

  // Add 1 per document to the corresponding timesSeriesArray position
  for (i = 0; i < mallorcaTimeSeriesDocs.length; i++) {
    mallorcaTimeSeriesArray[
      datesCW.indexOf(mallorcaTimeSeriesDocs[i].publishedFormatted)
    ]++;
  }

  mallorcaTimeSeriesArray.unshift("Mallorca");

  // ============= CSV creation ================

  let pageRows = [];

  // Balearen and Mallorca Time series (mentions to tourism)
  pageRows.push(["Evolutiu Baleares vs Mallorca (turisme)"]);
  pageRows.push([""].concat(datesCW));
  pageRows.push(balearenTimeSeriesArray);
  pageRows.push(mallorcaTimeSeriesArray);

  return pageRows;
};

module.exports = { getKPIs };
