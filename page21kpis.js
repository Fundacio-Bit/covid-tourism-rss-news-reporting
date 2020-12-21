var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW, datesCW) => {
  // ========= Time series Balearen vs Formentera (tourism, covid, tourism+covid) ============
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

  // calculate Formentera time series
  var formenteraTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];

  let formenteraTourismAndBothDocs = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismAndBothCategories);

  let formenteraCovidDocs = allDocsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.covidCategory);

  let formenteraTimeSeriesDocs = formenteraTourismAndBothDocs.concat(
    formenteraCovidDocs
  );

  // Add 1 per document to the corresponding timesSeriesArray position
  for (i = 0; i < formenteraTimeSeriesDocs.length; i++) {
    formenteraTimeSeriesArray[
      datesCW.indexOf(formenteraTimeSeriesDocs[i].publishedFormatted)
    ]++;
  }

  formenteraTimeSeriesArray.unshift("Formentera");

  // ============= CSV creation ================

  let pageRows = [];

  // Balearen and Formentera Time series (mentions to covid, tourism and both)
  pageRows.push([
    "Evolutiu Baleares vs Formentera (turisme, covid, turisme + covid)",
  ]);
  pageRows.push([""].concat(datesCW));
  pageRows.push(balearenTimeSeriesArray);
  pageRows.push(formenteraTimeSeriesArray);

  return pageRows;
};

module.exports = { getKPIs };
