var utils = require("./utils/utils.js");
var moment = require("moment");

const countBy = (arr, prop) => arr.reduce((prev, curr) => (prev[curr[prop]] = ++prev[curr[prop]] || 1, prev), {});

// Calculate the date of the start of a given ISO8601 week (which will always be a Monday)
function getDateOfISOWeek(w, y) {
  var simple = new Date(y, 0, 1 + (w - 1) * 7);
  var dow = simple.getDay();
  var ISOweekStart = simple;
  if (dow <= 4) {
    ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
  } else {
    ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
  }
  month = '' + (ISOweekStart.getMonth() + 1),
  day = '' + ISOweekStart.getDate(),
  year = ISOweekStart.getFullYear();

  if (month.length < 2) 
    month = '0' + month;
  if (day.length < 2) 
    day = '0' + day;

  return [year, month, day].join('-');
}
const getKPIs = (docs) => {
  // ============= SOV PER MARKET (only current week) ================
  //Total Balearen Mentions (not discarded news) (Balearic Islands + Mallorca + Menorca + Ibiza + Formentera) (tourism)
  let totalMentions = docs.filter(utils.balearenMention).filter(utils.tourismCategory).length;
  // console.log('Total mentions:',  totalMentions)

  // ============= Time series Balearen: totals by country ================
  let totalMentionsPerWeek = []
  // calculate total mentions from Spain time series
  let mentionsFromSpain = docs
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSpain)
  let mentionsFromSpainGroupBy =  countBy(mentionsFromSpain, "week");
  mentionsFromSpainGroupBy['country'] = 'España'
  totalMentionsPerWeek.push(mentionsFromSpainGroupBy)

  // calculate total mentions from Spain time series
  let mentionsFromUnitedKingdom = docs
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromUnitedKingdom);
  let mentionsFromUnitedKingdomGroupBy =  countBy(mentionsFromUnitedKingdom, "week");
  mentionsFromUnitedKingdomGroupBy['country'] = 'Regne Unit'
  totalMentionsPerWeek.push(mentionsFromUnitedKingdomGroupBy)

  // calculate total mentions from Spain time series
  let mentionsFromGermany = docs
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromGermany);
  let mentionsFromGermanyGroupBy =  countBy(mentionsFromGermany, "week");
  mentionsFromGermanyGroupBy['country'] = 'Alemanya'
  totalMentionsPerWeek.push(mentionsFromGermanyGroupBy)

  // calculate total mentions from Spain time series
  let mentionsFromItaly = docs
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromItaly);
  let mentionsFromItalyGroupBy =  countBy(mentionsFromItaly, "week");
  mentionsFromItalyGroupBy['country'] = 'Itàlia'
  totalMentionsPerWeek.push(mentionsFromItalyGroupBy)

  // calculate total mentions from Spain time series
  let mentionsFromFrance = docs
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromFrance);
  let mentionsFromFranceGroupBy =  countBy(mentionsFromFrance, "week");
  mentionsFromFranceGroupBy['country'] = 'França'
  totalMentionsPerWeek.push(mentionsFromFranceGroupBy)

  // calculate total mentions from Spain time series
  let mentionsFromSweden = docs
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSweden);
  let mentionsFromSwedenGroupBy =  countBy(mentionsFromSweden, "week");
  mentionsFromSwedenGroupBy['country'] = 'Suècia'
  totalMentionsPerWeek.push(mentionsFromSwedenGroupBy)

  // calculate total mentions from Spain time series
  let mentionsFromSwitzerland = docs
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromSwitzerland);
  let mentionsFromSwitzerlandGroupBy =  countBy(mentionsFromSwitzerland, "week");
  mentionsFromSwitzerlandGroupBy['country'] = 'Suïssa'
  totalMentionsPerWeek.push(mentionsFromSwitzerlandGroupBy)

  // calculate total mentions from Spain time series
  let mentionsFromNetherlands = docs
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromNetherlands);
  let mentionsFromNetherlandsGroupBy =  countBy(mentionsFromNetherlands, "week");
  mentionsFromNetherlandsGroupBy['country'] = 'Holanda'
  totalMentionsPerWeek.push(mentionsFromNetherlandsGroupBy)

  // calculate total mentions from Spain time series
  let mentionsFromAustria = docs
    .filter(utils.balearenMention)
    .filter(utils.tourismCategory)
    .filter(utils.mentionFromAustria);
  let mentionsFromAustriaGroupBy =  countBy(mentionsFromAustria, "week");
  mentionsFromAustriaGroupBy['country'] = 'Austria'
  totalMentionsPerWeek.push(mentionsFromAustriaGroupBy)

  // ============= CSV creation ================
  let pageRows = [];
  // SOV by country
  pageRows.push(["Mencions de Balears"]);
  pageRows.push(["\n"]);
  pageRows.push(["SOV PER PAÏSOS"]);

  // const weekList = [...new Set(totalMentionsPerWeek.map(e => Object.keys(e)).flat())]
  var merged = [].concat.apply([], totalMentionsPerWeek.map(e => Object.keys(e).reduce((acc, val) => acc.concat(val), [])))
  const weekList = [...new Set(merged)] // List of weeks with format 'YYYY-WW' since start date
  let header =  ['']
  weekList.forEach(item => {
    const year = item.substring(0, item.indexOf("-"))
    const  weekNumber =  item.substring(item.indexOf("-") + 1)
    header.push(getDateOfISOWeek(weekNumber, year))
  })
  pageRows.push(header);

  totalMentionsPerWeek.map(e => (weekList.forEach(f => !e.hasOwnProperty(f) ? e[f] = 0 : ''), e))
  
  totalMentionsPerWeek.forEach(item => {
    let country = item['country'] 
    delete item.country
    const ordered = Object.keys(item).sort(function(a, b){
      if(a > b) { return -1; }
      if(a < b) { return 1; }
      return 0;
    }).reduce(
      (obj, key) => { 
        obj[key] = item[key]; 
        return obj;
      }, 
      {}
    );
   
    let newRow = [country].concat(Object.values(ordered))
    pageRows.push(newRow);
  })
  return pageRows;
};

module.exports = { getKPIs };
