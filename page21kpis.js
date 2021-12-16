var utils = require("./utils/utils.js");

const getKPIs = (docsCW, discardedDocsCW, datesCW) => {
  // ========= Time series Balearen vs Formentera (tourism) ============
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

  // calculate Formentera time series
  var formenteraTimeSeriesArray = [0, 0, 0, 0, 0, 0, 0];

  let formenteraTourismDocs = docsCW
    .filter(utils.formenteraIslandMention)
    .filter(utils.tourismCategory);

  let formenteraTimeSeriesDocs = formenteraTourismDocs;

  // Add 1 per document to the corresponding timesSeriesArray position
  for (i = 0; i < formenteraTimeSeriesDocs.length; i++) {
    formenteraTimeSeriesArray[
      datesCW.indexOf(formenteraTimeSeriesDocs[i].publishedFormatted)
    ]++;
  }

  formenteraTimeSeriesArray.unshift("Formentera");

  // ============= CSV creation ================

  let pageRows = [];

  // Balearen and Formentera Time series (mentions to tourism)
  pageRows.push(["Evolutiu Baleares vs Formentera (turisme)"]);
  pageRows.push([""].concat(datesCW));
  pageRows.push(balearenTimeSeriesArray);
  pageRows.push(formenteraTimeSeriesArray);

  return pageRows;
};

module.exports = { getKPIs };
