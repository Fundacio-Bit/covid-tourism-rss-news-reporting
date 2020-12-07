var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW, datesCW) => {
  // ========= Time series Balearen vs Ibiza (tourism, covid, tourism+covid) ============
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

  // calculate Ibiza time series
  var ibizaTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];

  let ibizaTourismAndBothDocs = docsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.tourismAndBothCategories);

  let ibizaCovidDocs = allDocsCW
    .filter(utils.ibizaIslandMention)
    .filter(utils.covidCategory);

  let ibizaTimeSeriesDocs = ibizaTourismAndBothDocs.concat(ibizaCovidDocs);

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

  return pageRows;
};

module.exports = { getKPIs };
