var csv_manager = require("./create-csv.js");
var utils = require("./utils/utils.js");

const getKPIs = (docsCW, datesCW) => {
  // ============= SOV PER MARKET (only current week) ================
  let balearenMentionsCW = docsCW.filter(utils.balearenMention).length;

  let mentionsFromSpainPercent = utils.getPercent(
    balearenMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.mentionFromSpain).length
  );

  let mentionsFromUnitedKingdomPercent = utils.getPercent(
    balearenMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.mentionFromUnitedKingdom)
      .length
  );

  let mentionsFromGermanyPercent = utils.getPercent(
    balearenMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.mentionFromGermany).length
  );

  let mentionsFromItalyPercent = utils.getPercent(
    balearenMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.mentionFromItaly).length
  );

  let mentionsFromFrancePercent = utils.getPercent(
    balearenMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.mentionFromFrance).length
  );

  let mentionsFromSwedenPercent = utils.getPercent(
    balearenMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.mentionFromSweden).length
  );

  let mentionsFromSwitzerlandPercent = utils.getPercent(
    balearenMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.mentionFromSwitzerland)
      .length
  );

  let mentionsFromNetherlandsPercent = utils.getPercent(
    balearenMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.mentionFromNetherlands)
      .length
  );

  let mentionsFromAustriaPercent = utils.getPercent(
    balearenMentionsCW,
    docsCW.filter(utils.balearenMention).filter(utils.mentionFromAustria).length
  );

  // ============= CSV creation ================
  let pageRows = [];
  // SOV by maerkets
  pageRows.push(["\n"]);
  pageRows.push(["SOV PER PAÏSOS (de Balears)"]);
  pageRows.push([
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

  // create the page 8 CSV
  csv_manager.create_csv("output/page8_news.csv", pageRows);
};

module.exports = { getKPIs };
