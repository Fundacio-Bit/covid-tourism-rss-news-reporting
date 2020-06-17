var d3 = require("d3");
var csv_manager = require("./create-csv.js");

var fetchData = require("./fetch-data.js");
var addData = require("./add-processed-data.js");
var utils = require("./utils/utils.js");

var page6 = require("./page6kpis.js");
var page8 = require("./page8kpis.js");
var page10 = require("./page10kpis.js");
var page12 = require("./page12kpis.js");
var page13 = require("./page13kpis.js");
var page15 = require("./page15kpis.js");
var page16 = require("./page16kpis.js");
var page18 = require("./page18kpis.js");
var page19 = require("./page19kpis.js");
var page21 = require("./page21kpis.js");
var page22 = require("./page22kpis.js");
var page25 = require("./page25kpis.js");
var page26 = require("./page26kpis.js");
var page27 = require("./page27kpis.js");
var page28 = require("./page28kpis.js");
var page29 = require("./page29kpis.js");
var page30 = require("./page30kpis.js");
var page31 = require("./page31kpis.js");
var page32 = require("./page32kpis.js");
var page33 = require("./page33kpis.js");

var currentWeekFrom = "2020-06-08";
var currentWeekTo = utils.getLastWeekDay(currentWeekFrom);
var currentWeekDates = utils.getWeekDates(currentWeekFrom);
console.log("Current week start date: " + currentWeekFrom);
console.log("Current week end date: " + currentWeekTo);
console.log("CurrentWeekDates:" + currentWeekDates);

var weekAgoFrom = utils.getWeekAgoDate(currentWeekFrom);
var weekAgoTo = utils.getLastWeekDay(weekAgoFrom);
var weekAgoDates = utils.getWeekDates(weekAgoFrom);
console.log("Week ago start date: " + weekAgoFrom);
console.log("Week ago end date: " + weekAgoTo);
console.log("WeekAgoDates:" + weekAgoDates);

var twoWeeksAgoFrom = utils.getWeekAgoDate(weekAgoFrom);
var twoWeeksAgoTo = utils.getLastWeekDay(twoWeeksAgoFrom);
var twoWeeksAgoDates = utils.getWeekDates(twoWeeksAgoFrom);
console.log("Two weeks ago start date: " + twoWeeksAgoFrom);
console.log("Two weeks ago end date: " + twoWeeksAgoTo);
console.log("Two weeks ago dates:" + twoWeeksAgoDates);

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
    // create the page 6 CSV
    csv_manager.create_csv(
      "output/page6_news.csv",
      page6.getKPIs(
        docsWithCountryAndCategoryAndFormattedDateCW,
        docsWithCountryAndCategoryWA,
        docsWithCountryAndCategoryTWA,
        currentWeekDates,
        weekAgoDates,
        twoWeeksAgoDates
      )
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

    // ************* Page 13 KPIs.**************
    page13.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW);

    // ************* Page 15 KPIs.**************
    page15.getKPIs(
      docsWithCountryAndCategoryAndFormattedDateCW,
      currentWeekDates
    );

    // ************* Page 16 KPIs.**************
    page16.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW);

    // ************* Page 18 KPIs.**************
    page18.getKPIs(
      docsWithCountryAndCategoryAndFormattedDateCW,
      currentWeekDates
    );

    // ************* Page 19 KPIs.**************
    page19.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW);

    // ************* Page 21 KPIs.**************
    page21.getKPIs(
      docsWithCountryAndCategoryAndFormattedDateCW,
      currentWeekDates
    );

    // ************* Page 22 KPIs.**************
    page22.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW);

    // ************* Page 25 KPIs.**************
    page25.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW);

    // ************* Page 26 KPIs.**************
    page26.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW);

    // ************* Page 27 KPIs.**************
    page27.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW);

    // ************* Page 28 KPIs.**************
    page28.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW);

    // ************* Page 29 KPIs.**************
    page29.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW);

    // ************* Page 30 KPIs.**************
    page30.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW);

    // ************* Page 31 KPIs.**************
    page31.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW);

    // ************* Page 32 KPIs.**************
    page32.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW);

    // ************* Page 33 KPIs.**************
    page33.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW);

    // ************* News CSV **************
    var categoriesDict = require("./categories-dictionary.js");
    var tourimsTerms = categoriesDict.tourism;

    for (i = 0; i < tourimsTerms.length; i++) {
      let term = tourimsTerms[i];
      let rowsPerTerm = [["Marca", "País", "Títol", "Enllaç"]];
      for (
        j = 0;
        j < docsWithCountryAndCategoryAndFormattedDateCW.length;
        j++
      ) {
        doc = docsWithCountryAndCategoryAndFormattedDateCW[j];
        const title =
          "title" in doc &&
          doc.title !== undefined &&
          typeof doc.title === "string"
            ? doc.title
            : "";

        const summary =
          "summary" in doc &&
          doc.summary !== undefined &&
          typeof doc.summary === "string"
            ? doc.summary
            : "";

        const description =
          "description" in doc &&
          doc.description !== undefined &&
          typeof doc.description === "string"
            ? doc.description
            : "";

        const content_value =
          "content_value" in doc &&
          doc.content_value !== undefined &&
          typeof doc.content_value === "string"
            ? doc.content_value
            : "";

        const tags =
          "tags" in doc &&
          doc.tags !== undefined &&
          typeof doc.tags === "string"
            ? doc.tags
            : "";

        let concatenatedTexts =
          title +
          " " +
          summary +
          " " +
          description +
          " " +
          content_value +
          " " +
          tags;

        if (concatenatedTexts.includes(term) && doc.brand !== "españa") {
          rowsPerTerm.push([doc.brand, doc.country, doc.title, doc.link]);
        }
      }
      csv_manager.create_csv(`output/news/${term}_news.csv`, rowsPerTerm);
    }

    // docsWithCountryAndCategoryAndFormattedDateCW;

    // get news count grouped by brand, market and category (in this order)
    // getNewsByBrandMarketCategory(docsWithCountryAndCategory);
  })
  .catch(console.log);
