var utils = require("./utils/utils.js");

const getKPIs = (docsCW, datesCW) => {
  // ========= Time series Balearen vs Menorca (tourism, covid, tourism+covid) ============
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

  // calculate Menorca time series
  var menorcaTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];

  let menorcaTimeSeriesDocs = docsCW
    .filter(utils.menorcaIslandMention)
    .filter(utils.categoriesOfInterest);

  // Add 1 per document to the corresponding timesSeriesArray position
  for (i = 0; i < menorcaTimeSeriesDocs.length; i++) {
    menorcaTimeSeriesArray[
      datesCW.indexOf(menorcaTimeSeriesDocs[i].publishedFormatted)
    ]++;
  }

  menorcaTimeSeriesArray.unshift("Menorca");

  // ============= CSV creation ================

  let pageRows = [];

  // Balearen and Menorca Time series (mentions to covid, tourism and both)
  pageRows.push([
    "Evolutiu Baleares vs Menorca (turisme, covid, turisme + covid)",
  ]);
  pageRows.push([""].concat(datesCW));
  pageRows.push(balearenTimeSeriesArray);
  pageRows.push(menorcaTimeSeriesArray);

  return pageRows;
};

module.exports = { getKPIs };
