var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW, datesCW) => {
  // ========= Time series Balearen vs Mallorca (tourism, covid, tourism+covid) ============
  //discarded and not discarded news
  let allDocsCW = docsCW.concat(discardedDocsCW);
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

  // calculate Mallorca time series
  var mallorcaTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];

  let mallorcaTourismAndBothDocs = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.tourismAndBothCategories);

  let mallorcaCovidDocs = allDocsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.covidCategory);

  let mallorcaTimeSeriesDocs = mallorcaTourismAndBothDocs.concat(
    mallorcaCovidDocs
  );

  // Add 1 per document to the corresponding timesSeriesArray position
  for (i = 0; i < mallorcaTimeSeriesDocs.length; i++) {
    mallorcaTimeSeriesArray[
      datesCW.indexOf(mallorcaTimeSeriesDocs[i].publishedFormatted)
    ]++;
  }

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

  return pageRows;
};

module.exports = { getKPIs };
