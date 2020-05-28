var csv_manager = require("./create-csv.js");
var utils = require("./utils/utils.js");

const getKPIs = (docsCW, datesCW) => {
  // ========= Time series Balearen vs Ibiza (tourism, covid, tourism+covid) ============
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

  // calculate Ibiza time series
  var ibizaTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];

  let ibizaTimeSeriesDocs = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.categoriesOfInterest);

  // Add 1 per document to the corresponding timesSeriesArray position
  for (i = 0; i < ibizaTimeSeriesDocs.length; i++) {
    ibizaTimeSeriesArray[
      datesCW.indexOf(ibizaTimeSeriesDocs[i].publishedFormatted)
    ]++;
  }

  ibizaTimeSeriesArray.unshift("Ibiza");

  // ============= CSV creation ================

  let pageRows = [];

  // Balearen and Ibiza Time series (mentions to covid, tourism and both)
  pageRows.push([
    "Evolutiu Baleares vs Ibiza (turisme, covid, turisme + covid)",
  ]);
  pageRows.push([""].concat(datesCW));
  pageRows.push(balearenTimeSeriesArray);
  pageRows.push(ibizaTimeSeriesArray);

  // create the page 18 CSV
  csv_manager.create_csv("output/page18_news.csv", pageRows);
};

module.exports = { getKPIs };
