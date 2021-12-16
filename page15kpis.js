var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW, datesCW) => {
  // ========= Time series Balearen vs Menorca (tourism) ============
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

  // calculate Menorca time series
  var menorcaTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];

  let menorcaTourismDocs = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.tourismCategory);

  let menorcaTimeSeriesDocs = menorcaTourismDocs;

  // Add 1 per document to the corresponding timesSeriesArray position
  for (i = 0; i < menorcaTimeSeriesDocs.length; i++) {
    menorcaTimeSeriesArray[
      datesCW.indexOf(menorcaTimeSeriesDocs[i].publishedFormatted)
    ]++;
  }

  menorcaTimeSeriesArray.unshift("Menorca");

  // ============= CSV creation ================

  let pageRows = [];

  // Balearen and Menorca Time series (mentions to tourism)
  pageRows.push(["Evolutiu Baleares vs Menorca (turisme)"]);
  pageRows.push([""].concat(datesCW));
  pageRows.push(balearenTimeSeriesArray);
  pageRows.push(menorcaTimeSeriesArray);

  return pageRows;
};

module.exports = { getKPIs };
