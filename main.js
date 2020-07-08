var path = require("path");
var argv = require("yargs").argv;
var moment = require("moment");
var mkdirp = require("mkdirp");

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

// In production this process will be run every week on monday.
// If the date argument is not provided the week under analysis starting date will be calculated as:

// ------------------------------------------------------------------------------------------------------------------------------------------------
// Read CLI arguments
// Arguments are passed as --date --mode
// If date is 'lastWeek' the starting date will be the current date minus 7 days, if is a string date with format 'YYYY-MM-DD' that date will be the
// starting date, in either case argument it will abort execution.
// If mode is 'dev' it will run in development mode, if 'prod' in production mode. In any other case it will abort execution.
// In development mode output files will be saved to a subfolder of the project. In production mode to the files folder in the "datamongo" disk unit.
// -------------------------------------------------------------------------------------------------------------------------------------------------
var stringifiedDatePattern = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;

if (argv.date == "lastWeek") {
  var currentWeekFrom = moment().subtract(7, "d").format("YYYY-MM-DD");
} else if (stringifiedDatePattern.test(argv.date)) {
  currentWeekFrom = argv.date;
} else {
  console.log(
    '***EXECUTION ERROR!: A --date argument is required and its value should be "lastWeek" or a string date formatted as "YYYY-MM--DD"***'
  );
  process.exit();
}

if (argv.mode == "dev") {
  var output_path = path.join(__dirname, "/output/", currentWeekFrom);
} else if (argv.mode == "prod") {
  var output_path = path.join(
    "/data-mongo/files/output/rss_news/covid_tourism/",
    currentWeekFrom
  );
} else {
  console.log(
    '***EXECUTION ERROR!: A --mode argument is required and its value should be "dev" for development mode or "prod" for production mode***'
  );
  process.exit();
}
mkdirp.sync(output_path);
console.log("Output path: " + output_path);

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
      path.join(output_path, "page6_news.csv"),
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

    csv_manager.create_csv(
      path.join(output_path, "page8_news.csv"),
      page8.getKPIs(
        docsWithCountryAndCategoryAndFormattedDateCW,
        currentWeekDates
      )
    );

    // ************* Page 10 KPIs.**************
    // create the page 10 CSV
    csv_manager.create_csv(
      path.join(output_path, "page10_news.csv"),
      page10.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW)
    );

    // ************* Page 12 KPIs.**************
    // create the page 12 CSV
    csv_manager.create_csv(
      path.join(output_path, "page12_news.csv"),
      page12.getKPIs(
        docsWithCountryAndCategoryAndFormattedDateCW,
        currentWeekDates
      )
    );

    // ************* Page 13 KPIs.**************
    // create the page 10 CSV
    csv_manager.create_csv(
      path.join(output_path, "page13_news.csv"),
      page13.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW)
    );

    // ************* Page 15 KPIs.**************
    // create the page 10 CSV
    csv_manager.create_csv(
      path.join(output_path, "page15_news.csv"),
      page15.getKPIs(
        docsWithCountryAndCategoryAndFormattedDateCW,
        currentWeekDates
      )
    );

    // ************* Page 16 KPIs.**************
    // create the page 16 CSV
    csv_manager.create_csv(
      path.join(output_path, "page16_news.csv"),
      page16.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW)
    );

    // ************* Page 18 KPIs.**************
    // create the page 18 CSV
    csv_manager.create_csv(
      path.join(output_path, "page18_news.csv"),
      page18.getKPIs(
        docsWithCountryAndCategoryAndFormattedDateCW,
        currentWeekDates
      )
    );

    // ************* Page 19 KPIs.**************
    // create the page 19 CSV
    csv_manager.create_csv(
      path.join(output_path, "page19_news.csv"),
      page19.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW)
    );

    // ************* Page 21 KPIs.**************
    // create the page 21 CSV
    csv_manager.create_csv(
      path.join(output_path, "page21_news.csv"),
      page21.getKPIs(
        docsWithCountryAndCategoryAndFormattedDateCW,
        currentWeekDates
      )
    );

    // ************* Page 22 KPIs.**************
    // create the page 22 CSV
    csv_manager.create_csv(
      path.join(output_path, "page22_news.csv"),
      page22.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW)
    );

    // ************* Page 25 KPIs.**************
    // create the page 25 CSV
    csv_manager.create_csv(
      path.join(output_path, "page25_news.csv"),
      page25.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW)
    );

    // ************* Page 26 KPIs.**************
    // create the page 26 CSV
    csv_manager.create_csv(
      path.join(output_path, "page26_news.csv"),
      page26.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW)
    );

    // ************* Page 27 KPIs.**************
    // create the page 27 CSV
    csv_manager.create_csv(
      path.join(output_path, "page27_news.csv"),
      page27.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW)
    );

    // ************* Page 28 KPIs.**************
    // create the page 28 CSV
    csv_manager.create_csv(
      path.join(output_path, "page28_news.csv"),
      page28.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW)
    );

    // ************* Page 29 KPIs.**************
    // create the page 29 CSV
    csv_manager.create_csv(
      path.join(output_path, "page29_news.csv"),
      page29.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW)
    );

    // ************* Page 30 KPIs.**************
    // create the page 30 CSV
    csv_manager.create_csv(
      path.join(output_path, "page30_news.csv"),
      page30.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW)
    );

    // ************* Page 31 KPIs.**************
    // create the page 31 CSV
    csv_manager.create_csv(
      path.join(output_path, "page31_news.csv"),
      page31.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW)
    );

    // ************* Page 32 KPIs.**************
    // create the page 32 CSV
    csv_manager.create_csv(
      path.join(output_path, "page32_news.csv"),
      page32.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW)
    );

    // ************* Page 33 KPIs.**************
    // create the page 33 CSV
    csv_manager.create_csv(
      path.join(output_path, "page33_news.csv"),
      page33.getKPIs(docsWithCountryAndCategoryAndFormattedDateCW)
    );

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
