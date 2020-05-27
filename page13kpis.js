var csv_manager = require("./create-csv.js");
var utils = require("./utils/utils.js");

const getKPIs = (docsCW) => {
  // ============= MENTIONS OF CATEGORIES OF INTERST BY MARKET  ================
  let categoriesOfInterestBalearenNews = docsCW
    .filter(utils.balearenMention)
    .filter(utils.categoriesOfInterest);

  let categoriesOfInterestMallorcaNews = docsCW
    .filter(utils.mallorcaIslandMention)
    .filter(utils.categoriesOfInterest);

  let categoriesOfInterestBalearenMentions =
    categoriesOfInterestBalearenNews.length;

  let categoriesOfInterestMallorcaMentions =
    categoriesOfInterestMallorcaNews.length;

  // Spain
  let mentionsTourismMallorcaFromSpainPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsCovidMallorcaFromSpainPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSpain).length
  );

  let mentionsBothMallorcaFromSpainPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSpain).length
  );

  // United Kingdom
  let mentionsTourismMallorcaFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsCovidMallorcaFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  let mentionsBothMallorcaFromUnitedKingdomPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromUnitedKingdom).length
  );

  // Germany
  let mentionsTourismMallorcaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsCovidMallorcaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromGermany).length
  );

  let mentionsBothMallorcaFromGermanyPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromGermany).length
  );

  // Italy
  let mentionsTourismMallorcaFromItalyPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromItaly).length
  );

  let mentionsCovidMallorcaFromItalyPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromItaly).length
  );

  let mentionsBothMallorcaFromItalyPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromItaly).length
  );

  // France
  let mentionsTourismMallorcaFromFrancePercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromFrance).length
  );

  let mentionsCovidMallorcaFromFrancePercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromFrance).length
  );

  let mentionsBothMallorcaFromFrancePercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromFrance).length
  );

  // Sweden
  let mentionsTourismMallorcaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsCovidMallorcaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSweden).length
  );

  let mentionsBothMallorcaFromSwedenPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSweden).length
  );

  // Switzerland
  let mentionsTourismMallorcaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsCovidMallorcaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  let mentionsBothMallorcaFromSwitzerlandPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromSwitzerland).length
  );

  // Netherlands
  let mentionsTourismMallorcaFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsCovidMallorcaFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  let mentionsBothMallorcaFromNetherlandsPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromNetherlands).length
  );

  // Austria
  let mentionsTourismMallorcaFromAustriaPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.tourismCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsCovidMallorcaFromAustriaPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.covidCategory)
      .filter(utils.mentionFromAustria).length
  );

  let mentionsBothMallorcaFromAustriaPercent = utils.getPercent(
    categoriesOfInterestMallorcaMentions,
    docsCW
      .filter(utils.mallorcaIslandMention)
      .filter(utils.bothCategory)
      .filter(utils.mentionFromAustria).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV by country
  pageRows.push(["CONVERSA PER PAÏSOS (Turisme, covid i covid + turisme)"]);
  pageRows.push([
    "Pais",
    "Turisme",
    "COVID",
    "Turisme + COVID",
    "Mencions totals",
  ]);
  pageRows.push([
    "España",
    mentionsTourismMallorcaFromSpainPercent,
    mentionsCovidMallorcaFromSpainPercent,
    mentionsBothMallorcaFromSpainPercent,
    mentionsCategoriesOfInterestMallorcaFromSpain,
  ]);
  mentionsCategoriesOfInterestMallorcaFromSpain;
  "Regne Unit",
    "Alemanya",
    "Itàlia",
    "França",
    "Suècia",
    "Suïssa",
    "Holanda",
    "Austria",
    pageRows.push([
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

  // Time series by country

  pageRows.push(["\n"]);
  pageRows.push(["Evolutiu per idiomas sobre Balears"]);
  pageRows.push([""].concat(datesCW));
  pageRows.push(mentionsFromSpainTimeSeriesArray);
  pageRows.push(mentionsFromUnitedKingdomTimeSeriesArray);
  pageRows.push(mentionsFromGermanyTimeSeriesArray);
  pageRows.push(mentionsFromItalyTimeSeriesArray);
  pageRows.push(mentionsFromFranceTimeSeriesArray);
  pageRows.push(mentionsFromSwedenTimeSeriesArray);
  pageRows.push(mentionsFromSwitzerlandTimeSeriesArray);
  pageRows.push(mentionsFromNetherlandsTimeSeriesArray);
  pageRows.push(mentionsFromAustriaTimeSeriesArray);

  // create the page 8 CSV
  csv_manager.create_csv("output/page8_news.csv", pageRows);
};

module.exports = { getKPIs };
