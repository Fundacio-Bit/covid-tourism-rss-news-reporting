// kpis calculation functions import
const page6kpis = require("../page6kpis");
const page8kpis = require("../page8kpis");

// input mock arguments mocks
const page6KpisDocsMock = require("./page6kpis_docs_mock.json");
const page8KpisDocsMock = require("./page8kpis_docs_mock.json");

const datesMockCW = [
  "15 gen. 2020",
  "16 gen. 2020",
  "17 gen. 2020",
  "18 gen. 2020",
  "19 gen. 2020",
  "20 gen. 2020",
  "21 gen. 2020",
];
const datesMockWA = [
  "8 gen. 2020",
  "9 gen. 2020",
  "10 gen. 2020",
  "11 gen. 2020",
  "12 gen. 2020",
  "13 gen. 2020",
  "14 gen. 2020",
];
const datesMockTWA = [
  "1 gen. 2020",
  "2 gen. 2020",
  "3 gen. 2020",
  "4 gen. 2020",
  "5 gen. 2020",
  "6 gen. 2020",
  "7 gen. 2020",
];

// =========================== TESTS ===========================
// page 6kpis
describe("KPIs calculation filter for page 6", () => {
  test("it should return the KPIs defined in the output variable", () => {
    // input is the array of rows that will be included in the CSV
    const input = page6kpis.getKPIs(
      page6KpisDocsMock.docs.slice(2, 17), // docs with published date of the third week of january 2020
      page6KpisDocsMock.docs.slice(1, 2), // doc with published date of the second week of january 2020
      page6KpisDocsMock.docs.slice(0, 1), // doc with published date of the fisrt week of january 2020
      datesMockCW,
      datesMockWA,
      datesMockTWA
    );
    // this output depends on page6 kpis mock
    const output = {
      balearenMentionsCW: 4, // mentions to balearic brands at the third week of january 2020
      balearenTourismMentionsPercentCW: "50,00",
      balearenTourismMentionsCW: 2,
      balearenMentionsPercentByCategoryCW: [
        "De 15 gen. 2020 a 21 gen. 2020 (4)",
        "25,00",
        "25,00",
        "25,00",
        "25,00",
      ],
      balearenMentionsPercentByCategoryWA: [
        "De 8 gen. 2020 a 14 gen. 2020 (1)",
        "0,00",
        "100,00",
        "0,00",
        "0,00",
      ],
      balearenMentionsPercentByCategoryTWA: [
        "De 1 gen. 2020 a 7 gen. 2020 (1)",
        "0,00",
        "100,00",
        "0,00",
        "0,00",
      ],
      balearenTimeSeriesArray: ["Balears", 3, 0, 0, 0, 0, 0, 0],
    };

    expect(input[0][1]).toBe(output.balearenMentionsCW);
    expect(input[1][1]).toEqual(output.balearenTourismMentionsPercentCW);
    expect(input[2][1]).toEqual(output.balearenTourismMentionsCW);
    expect(input[6]).toEqual(output.balearenMentionsPercentByCategoryCW);
    expect(input[7]).toEqual(output.balearenMentionsPercentByCategoryWA);
    expect(input[8]).toEqual(output.balearenMentionsPercentByCategoryTWA);
    expect(input[12]).toEqual(output.balearenTimeSeriesArray);
  });
});

// page 8 kpis
describe("KPIs calculation filter for page 8", () => {
  test("it should return the KPIs defined in the output variable", () => {
    // this output depends on page8 kpis mock
    const output = {
      balearenMentionsCW: 45, // mentions to balearic brands
      balearenMentionsPercentByCountry: [
        "20,00",
        "17,78",
        "15,56",
        "13,33",
        "11,11",
        "8,89",
        "6,67",
        "4,44",
        "2,22",
      ],
      mentionsFromSpainTimeSeries: ["Espanya", 9, 0, 0, 0, 0, 0, 0],
      mentionsFromUnitedKingdomTimeSeries: ["Regne Unit", 8, 0, 0, 0, 0, 0, 0],
      mentionsFromGermanyTimeSeries: ["Alemanya", 7, 0, 0, 0, 0, 0, 0],
      mentionsFromItalyTimeSeries: ["Itàlia", 0, 6, 0, 0, 0, 0, 0],
      mentionsFromFranceTimeSeries: ["França", 0, 0, 5, 0, 0, 0, 0],
      mentionsFromSwedenTimeSeries: ["Suècia", 0, 0, 0, 4, 0, 0, 0],
      mentionsFromSwitzerlandTimeSeries: ["Suïssa", 0, 0, 0, 0, 3, 0, 0],
      mentionsFromNetherlandsTimeSeries: ["Holanda", 0, 0, 0, 0, 0, 2, 0],
      mentionsFromAustriaTimeSeries: ["Austria", 0, 0, 0, 0, 0, 0, 1],
    };

    // input is the array of rows that will be included in the CSV
    const input = page8kpis.getKPIs(page8KpisDocsMock.docs, datesMockCW);

    expect(input[0][1]).toBe(output.balearenMentionsCW);
    expect(input[4]).toEqual(output.balearenMentionsPercentByCountry);
    expect(input[8]).toEqual(output.mentionsFromSpainTimeSeries);
    expect(input[9]).toEqual(output.mentionsFromUnitedKingdomTimeSeries);
    expect(input[10]).toEqual(output.mentionsFromGermanyTimeSeries);
    expect(input[11]).toEqual(output.mentionsFromItalyTimeSeries);
    expect(input[12]).toEqual(output.mentionsFromFranceTimeSeries);
    expect(input[13]).toEqual(output.mentionsFromSwedenTimeSeries);
    expect(input[14]).toEqual(output.mentionsFromSwitzerlandTimeSeries);
    expect(input[15]).toEqual(output.mentionsFromNetherlandsTimeSeries);
    expect(input[16]).toEqual(output.mentionsFromAustriaTimeSeries);
  });
});
