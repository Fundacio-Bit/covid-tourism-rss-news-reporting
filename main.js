// TODO separate grouping
// TODO create CSV (notice that some brands have multiple values)

var d3 = require("d3");

var fetchData = require("./fetch-data.js");
var addData = require("./add-processed-data.js");
// var csv_manager = require("./create-csv.js");
var utils = require("./utils/utils.js");

var page6 = require("./page6kpis.js");
var page8 = require("./page8kpis.js");
var page10 = require("./page10kpis.js");
var page12 = require("./page12kpis.js");

var currentWeekFrom = "2020-05-18";
var currentWeekTo = "2020-05-25";
var currentWeekDates = utils.getWeekDates(currentWeekFrom);

var weekAgoFrom = "2020-05-11";
var weekAgoTo = "2020-05-18";
var weekAgoDates = utils.getWeekDates(weekAgoFrom);

var twoWeeksAgoFrom = "2020-05-04";
var twoWeeksAgoTo = "2020-05-11";
var twoWeeksAgoDates = utils.getWeekDates(twoWeeksAgoFrom);

var dataCurrentWeek = fetchData.getNews(currentWeekFrom, currentWeekTo);
var dataWeekAgo = fetchData.getNews(weekAgoFrom, weekAgoTo);
var dataTwoWeeksAgo = fetchData.getNews(twoWeeksAgoFrom, twoWeeksAgoTo);

// let getNewsByBrandMarketCategory = (news) => {
//   let newsByBrandByCountry = d3
//     .nest()
//     .key(function (doc) {
//       return doc.brand;
//     })
//     .key(function (doc) {
//       return doc.country;
//     })
//     .key(function (doc) {
//       return doc.category;
//     })
//     .rollup(function (brandGroup) {
//       return brandGroup.length;
//     })
//     .entries(news);
//   console.log(JSON.stringify(newsByBrandByCountry));
// };

// let getNewsByBrandCategory = (news) => {
//   return JSON.stringify(
//     d3
//       .nest()
//       .key(function (doc) {
//         return doc.brand;
//       })
//       .key(function (doc) {
//         return doc.category;
//       })
//       .rollup(function (brandGroup) {
//         return brandGroup.length;
//       })
//       .entries(news)
//   );
// };

// Get data from the las three weeks. Variable names will refer to them using the following codes:
// CW: current week.
// WA: week ago.
// TWA: two weeks ago.
Promise.all([dataCurrentWeek, dataWeekAgo, dataTwoWeeksAgo])
  .then((resultsArray) => {
    // *********** docs enrichment *************
    // enrich documents/news adding country and category (results of processing their current content)
    let docsWithCountryCW = addData.addCountry(resultsArray[0]);
    let docsWithCountryAndCategoryCW = addData.addCategory(docsWithCountryCW);
    let docsWithCountryAndCategoryAndFormattedDateCW = addData.addFormattedDate(
      docsWithCountryAndCategoryCW
    );

    // let newsByBrandCategory = getNewsByBrandCategory(
    //   docsWithCountryAndCategoryAndFormattedDateCW
    // );

    let docsWithCountryWA = addData.addCountry(resultsArray[1]);
    let docsWithCountryAndCategoryWA = addData.addCategory(docsWithCountryWA);

    let docsWithCountryTWA = addData.addCountry(resultsArray[2]);
    let docsWithCountryAndCategoryTWA = addData.addCategory(docsWithCountryTWA);

    // ************* Page 6 KPIs.**************
    page6.getKPIs(
      docsWithCountryAndCategoryAndFormattedDateCW,
      docsWithCountryAndCategoryWA,
      docsWithCountryAndCategoryTWA,
      currentWeekDates,
      weekAgoDates,
      twoWeeksAgoDates
    );

    // ************* Page 8 KPIs.**************
    page8.getKPIs(
      docsWithCountryAndCategoryAndFormattedDateCW,
      currentWeekDates
    );

    // ************* Page 10 KPIs.**************
    page10.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW);

    // ************* Page 12 KPIs.**************
    page12.getKPIs(
      docsWithCountryAndCategoryAndFormattedDateCW,
      currentWeekDates
    );

    // get news count grouped by brand, market and category (in this order)
    // getNewsByBrandMarketCategory(docsWithCountryAndCategory);
  })
  .catch(console.log);
