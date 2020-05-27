var csv_manager = require("./create-csv.js");
var utils = require("./utils/utils.js");

const getKPIs = (docsCW, datesCW) => {
  // ========= Time series Balearen vs Mallorca (tourism, covid, tourism+covid) ============
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

  // convert data to string and add row label
  balearenTimeSeriesArray = balearenTimeSeriesArray.map((val) => {
    return val.toString();
  });

  balearenTimeSeriesArray.unshift("Balears");

  // calculate Mallorca time series
  var mallorcaTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];

  let mallorcaTimeSeriesDocs = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.categoriesOfInterest);

  // Add 1 per document to the corresponding timesSeriesArray position
  for (i = 0; i < mallorcaTimeSeriesDocs.length; i++) {
    mallorcaTimeSeriesArray[
      datesCW.indexOf(mallorcaTimeSeriesDocs[i].publishedFormatted)
    ]++;
  }

  // convert data to string and add row label
  mallorcaTimeSeriesArray = mallorcaTimeSeriesArray.map((val) => {
    return val.toString();
  });

  mallorcaTimeSeriesArray.unshift("Mallorca");

  // ============= CSV creation ================

  let pageRows = [];

  // Balearen and Mallorca Time series (mentions to covid, tourism and both)
  pageRows.push([
    "Evolutiu Baleares vs Mallorca (turisme, covid, turisme + covid)",
  ]);
  pageRows.push([""].concat(datesCW));
  pageRows.push(balearenTimeSeriesArray);
  pageRows.push(mallorcaTimeSeriesArray);

  // create the page 12 CSV
  csv_manager.create_csv("output/page12_news.csv", pageRows);
};

module.exports = { getKPIs };
