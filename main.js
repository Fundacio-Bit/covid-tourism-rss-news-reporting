// TODO separate grouping
// TODO create CSV (notice that some brands have multiple values)

var d3 = require("d3");

var fetchData = require("./fetch-data.js");
var addData = require("./add-processed-data.js");
var csv_manager = require("./create-csv.js");
var utils = require("./utils/utils.js");

var currentWeekFrom = "2020-05-18";
var currentWeekTo = "2020-05-25";

var weekAgoFrom = "2020-05-11";
var weekAgoTo = "2020-05-18";

var twoWeeksAgoFrom = "2020-05-4";
var twoWeeksAgoTo = "2020-05-11";

var dataCurrentWeek = fetchData.getNews(currentWeekFrom, currentWeekTo);
var dataWeekAgo = fetchData.getNews(weekAgoFrom, weekAgoTo);
var dataTwoWeeksAgo = fetchData.getNews(twoWeeksAgoFrom, twoWeeksAgoTo);

var brands = [
  "mallorca",
  "menorca",
  "ibiza",
  "formentera",
  "baleares",
  "españa",
];

let getNewsByBrandMarketCategory = (news) => {
  let newsByBrandByCountry = d3
    .nest()
    .key(function (doc) {
      return doc.brand;
    })
    .key(function (doc) {
      return doc.country;
    })
    .key(function (doc) {
      return doc.category;
    })
    .rollup(function (brandGroup) {
      return brandGroup.length;
    })
    .entries(news);
  console.log(JSON.stringify(newsByBrandByCountry));
};

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

    let docsWithCountryWA = addData.addCountry(resultsArray[1]);
    let docsWithCountryAndCategoryWA = addData.addCategory(docsWithCountryWA);

    let docsWithCountryTWA = addData.addCountry(resultsArray[2]);
    let docsWithCountryAndCategoryTWA = addData.addCategory(docsWithCountryTWA);

    // ************* Page 5 KPIs.**************
    // Total Mentions (Balearic Islands + Spain)
    let totalMentionsCountCW = docsWithCountryAndCategoryCW.length;
    let tourismAndBothMentionsCountCW = docsWithCountryAndCategoryCW.filter(
      utils.tourismAndBothCategories
    ).length;
    let tourismAndBothMentionsPercentCW = utils.getPercent(
      totalMentionsCountCW,
      tourismAndBothMentionsCountCW
    );

    // ============= SOV PER CATEGORY CURRENT WEEK================
    let balearenMentionsCW = docsWithCountryAndCategoryCW.filter(
      utils.balearenMention
    ).length;
    let tourismBalearenMentionsCWPercent = utils.getPercent(
      balearenMentionsCW,
      docsWithCountryAndCategoryCW
        .filter(utils.balearenMention)
        .filter(utils.tourismCategory).length
    );

    let covidBalearenMentionsCWPercent = utils.getPercent(
      balearenMentionsCW,
      docsWithCountryAndCategoryCW
        .filter(utils.balearenMention)
        .filter(utils.covidCategory).length
    );

    let bothBalearenMentionsCWPercent = utils.getPercent(
      balearenMentionsCW,
      docsWithCountryAndCategoryCW
        .filter(utils.balearenMention)
        .filter(utils.bothCategory).length
    );

    let otherBalearenMentionsCWPercent = utils.getPercent(
      balearenMentionsCW,
      docsWithCountryAndCategoryCW
        .filter(utils.balearenMention)
        .filter(utils.otherCategory).length
    );

    // ============= SOV PER CATEGORY A WEEK AGO (WA) ================
    // Total Mentions (Balearic Islands + Spain)
    let totalMentionsCountWA = docsWithCountryAndCategoryWA.length;
    let tourismAndBothMentionsCountWA = docsWithCountryAndCategoryWA.filter(
      utils.tourismAndBothCategories
    ).length;
    let tourismAndBothMentionsPercentWA = utils.getPercent(
      totalMentionsCountWA,
      tourismAndBothMentionsCountWA
    );

    // Balearic Islands KPIs
    let balearenMentionsWA = docsWithCountryAndCategoryWA.filter(
      utils.balearenMention
    ).length;
    let tourismBalearenMentionsWAPercent = utils.getPercent(
      balearenMentionsWA,
      docsWithCountryAndCategoryWA
        .filter(utils.balearenMention)
        .filter(utils.tourismCategory).length
    );

    let covidBalearenMentionsWAPercent = utils.getPercent(
      balearenMentionsWA,
      docsWithCountryAndCategoryWA
        .filter(utils.balearenMention)
        .filter(utils.covidCategory).length
    );

    let bothBalearenMentionsWAPercent = utils.getPercent(
      balearenMentionsWA,
      docsWithCountryAndCategoryWA
        .filter(utils.balearenMention)
        .filter(utils.bothCategory).length
    );

    let otherBalearenMentionsWAPercent = utils.getPercent(
      balearenMentionsWA,
      docsWithCountryAndCategoryWA
        .filter(utils.balearenMention)
        .filter(utils.otherCategory).length
    );

    // ============= SOV PER CATEGORY TWO WEEKS AGO (TWA) ================
    // Total Mentions (Balearic Islands + Spain)
    let totalMentionsCountTWA = docsWithCountryAndCategoryTWA.length;
    let tourismAndBothMentionsCountTWA = docsWithCountryAndCategoryTWA.filter(
      utils.tourismAndBothCategories
    ).length;
    let tourismAndBothMentionsPercentTWA = utils.getPercent(
      totalMentionsCountTWA,
      tourismAndBothMentionsCountTWA
    );

    // Balearic Islands KPIs
    let balearenMentionsTWA = docsWithCountryAndCategoryTWA.filter(
      utils.balearenMention
    ).length;
    let tourismBalearenMentionsTWAPercent = utils.getPercent(
      balearenMentionsTWA,
      docsWithCountryAndCategoryTWA
        .filter(utils.balearenMention)
        .filter(utils.tourismCategory).length
    );

    let covidBalearenMentionsTWAPercent = utils.getPercent(
      balearenMentionsTWA,
      docsWithCountryAndCategoryTWA
        .filter(utils.balearenMention)
        .filter(utils.covidCategory).length
    );

    let bothBalearenMentionsTWAPercent = utils.getPercent(
      balearenMentionsTWA,
      docsWithCountryAndCategoryTWA
        .filter(utils.balearenMention)
        .filter(utils.bothCategory).length
    );

    let otherBalearenMentionsTWAPercent = utils.getPercent(
      balearenMentionsTWA,
      docsWithCountryAndCategoryTWA
        .filter(utils.balearenMention)
        .filter(utils.otherCategory).length
    );

    // ============= SOV PER MARKET (only current week) ================

    let mentionsFromSpainPercent = utils.getPercent(
      balearenMentionsCW,
      docsWithCountryAndCategoryCW
        .filter(utils.balearenMention)
        .filter(utils.mentionFromSpain).length
    );

    let mentionsFromUnitedKingdomPercent = utils.getPercent(
      balearenMentionsCW,
      docsWithCountryAndCategoryCW
        .filter(utils.balearenMention)
        .filter(utils.mentionFromUnitedKingdom).length
    );

    let mentionsFromGermanyPercent = utils.getPercent(
      balearenMentionsCW,
      docsWithCountryAndCategoryCW
        .filter(utils.balearenMention)
        .filter(utils.mentionFromGermany).length
    );

    let mentionsFromItalyPercent = utils.getPercent(
      balearenMentionsCW,
      docsWithCountryAndCategoryCW
        .filter(utils.balearenMention)
        .filter(utils.mentionFromItaly).length
    );

    let mentionsFromFrancePercent = utils.getPercent(
      balearenMentionsCW,
      docsWithCountryAndCategoryCW
        .filter(utils.balearenMention)
        .filter(utils.mentionFromFrance).length
    );

    let mentionsFromSwedenPercent = utils.getPercent(
      balearenMentionsCW,
      docsWithCountryAndCategoryCW
        .filter(utils.balearenMention)
        .filter(utils.mentionFromSweden).length
    );

    let mentionsFromSwitzerlandPercent = utils.getPercent(
      balearenMentionsCW,
      docsWithCountryAndCategoryCW
        .filter(utils.balearenMention)
        .filter(utils.mentionFromSwitzerland).length
    );

    let mentionsFromNetherlandsPercent = utils.getPercent(
      balearenMentionsCW,
      docsWithCountryAndCategoryCW
        .filter(utils.balearenMention)
        .filter(utils.mentionFromNetherlands).length
    );

    let mentionsFromAustriaPercent = utils.getPercent(
      balearenMentionsCW,
      docsWithCountryAndCategoryCW
        .filter(utils.balearenMention)
        .filter(utils.mentionFromAustria).length
    );

    // ============= CSV creation ================

    let page5Rows = [];
    // Total Mentions and tourism percent
    page5Rows.push(["Mencions", totalMentionsCountCW]);
    page5Rows.push([
      "Percentatge de mencions de turisme (inclou turisme i turisme + covid)",
      tourismAndBothMentionsPercentCW,
    ]);

    // SOV by categories
    page5Rows.push(["\n"]);
    page5Rows.push(["SOV PER TEMÀTICA (de Balears)"]);
    page5Rows.push(["Periode", "turisme", "covid", "turisme + covid", "reste"]);
    page5Rows.push([
      `De ${currentWeekFrom} a ${currentWeekTo} (${balearenMentionsCW})`,
      tourismBalearenMentionsCWPercent,
      covidBalearenMentionsCWPercent,
      bothBalearenMentionsCWPercent,
      otherBalearenMentionsCWPercent,
    ]);
    page5Rows.push([
      `De ${weekAgoFrom} a ${weekAgoTo} (${balearenMentionsWA})`,
      tourismBalearenMentionsWAPercent,
      covidBalearenMentionsWAPercent,
      bothBalearenMentionsWAPercent,
      otherBalearenMentionsWAPercent,
    ]);

    page5Rows.push([
      `De ${twoWeeksAgoFrom} a ${twoWeeksAgoTo} (${balearenMentionsTWA})`,
      tourismBalearenMentionsTWAPercent,
      covidBalearenMentionsTWAPercent,
      bothBalearenMentionsTWAPercent,
      otherBalearenMentionsTWAPercent,
    ]);

    // SOV by maerkets
    page5Rows.push(["\n"]);
    page5Rows.push(["SOV PER PAÏSOS (de Balears)"]);
    page5Rows.push([
      "España",
      "Regne Unit",
      "Alemanya",
      "Itàlia",
      "França",
      "Suècia",
      "Suïssa",
      "Holanda",
      "Austria",
    ]);
    page5Rows.push([
      mentionsFromSpainPercent,
      mentionsFromUnitedKingdomPercent,
      mentionsFromGermanyPercent,
      mentionsFromItalyPercent,
      mentionsFromFrancePercent,
      mentionsFromSwedenPercent,
      mentionsFromSwitzerlandPercent,
      mentionsFromNetherlandsPercent,
      mentionsFromAustriaPercent,
    ]);

    // create the page 5 CSV
    csv_manager.create_csv("output/page5_news.csv", page5Rows);
    console.log("Finished");

    // get news count grouped by brand, market and category (in this order)
    // getNewsByBrandMarketCategory(docsWithCountryAndCategory);
  })
  .catch(console.log);
