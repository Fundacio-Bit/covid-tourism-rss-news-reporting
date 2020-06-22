// kpis calculation functions import
const page6kpis = require("../page6kpis");
const page8kpis = require("../page8kpis");
const page10kpis = require("../page10kpis");

// input mock arguments mocks
const page6KpisDocsMock = require("./page6kpis_docs_mock.json");
const page8KpisDocsMock = require("./page8kpis_docs_mock.json");
const page10KpisDocsMock = require("./page10kpis_docs_mock.json");

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

// page 10 kpis
describe("KPIs calculation filter for page 10", () => {
  test("it should return the KPIs defined in the output variable", () => {
    // this output depends on page8 kpis mock
    const output = {
      balearenTourismMentions: 6,
      balearenTourismMentionsPercent: "13,33",
      balearenCovidMentions: 15,
      balearenCovidMentionsPercent: "33,33",
      balearenBothMentions: 15,
      balearenBothMentionsPercent: "33,33",

      balearenTourismMentionsFromSpainPercent: "50,00",
      balearenTourismMentionsFromUnitedKingdomPercent: "33,33",
      balearenTourismMentionsFromGermanyPercent: "16,67",
      balearenTourismMentionsFromItalyPercent: "0,00",
      balearenTourismMentionsFromFrancePercent: "0,00",
      balearenTourismMentionsFromSwedenPercent: "0,00",
      balearenTourismMentionsFromSwitzerlandPercent: "0,00",
      balearenTourismMentionsFromNetherlandsPercent: "0,00",
      balearenTourismMentionsFromAustriaPercent: "0,00",

      mallorcaTourismMentionsFromSpainPercent: "33,33",
      mallorcaTourismMentionsFromUnitedKingdomPercent: "50,00",
      mallorcaTourismMentionsFromGermanyPercent: "100,00",
      mallorcaTourismMentionsFromItalyPercent: "0,00",
      mallorcaTourismMentionsFromFrancePercent: "0,00",
      mallorcaTourismMentionsFromSwedenPercent: "0,00",
      mallorcaTourismMentionsFromSwitzerlandPercent: "0,00",
      mallorcaTourismMentionsFromNetherlandsPercent: "0,00",
      mallorcaTourismMentionsFromAustriaPercent: "0,00",

      menorcaTourismMentionsFromSpainPercent: "33,33",
      menorcaTourismMentionsFromUnitedKingdomPercent: "50,00",
      menorcaTourismMentionsFromGermanyPercent: "0,00",
      menorcaTourismMentionsFromItalyPercent: "0,00",
      menorcaTourismMentionsFromFrancePercent: "0,00",
      menorcaTourismMentionsFromSwedenPercent: "0,00",
      menorcaTourismMentionsFromSwitzerlandPercent: "0,00",
      menorcaTourismMentionsFromNetherlandsPercent: "0,00",
      menorcaTourismMentionsFromAustriaPercent: "0,00",

      ibizaTourismMentionsFromSpainPercent: "33,33",
      ibizaTourismMentionsFromUnitedKingdomPercent: "0,00",
      ibizaTourismMentionsFromGermanyPercent: "0,00",
      ibizaTourismMentionsFromItalyPercent: "0,00",
      ibizaTourismMentionsFromFrancePercent: "0,00",
      ibizaTourismMentionsFromSwedenPercent: "0,00",
      ibizaTourismMentionsFromSwitzerlandPercent: "0,00",
      ibizaTourismMentionsFromNetherlandsPercent: "0,00",
      ibizaTourismMentionsFromAustriaPercent: "0,00",

      formenteraTourismMentionsFromSpainPercent: "0,00",
      formenteraTourismMentionsFromUnitedKingdomPercent: "0,00",
      formenteraTourismMentionsFromGermanyPercent: "0,00",
      formenteraTourismMentionsFromItalyPercent: "0,00",
      formenteraTourismMentionsFromFrancePercent: "0,00",
      formenteraTourismMentionsFromSwedenPercent: "0,00",
      formenteraTourismMentionsFromSwitzerlandPercent: "0,00",
      formenteraTourismMentionsFromNetherlandsPercent: "0,00",
      formenteraTourismMentionsFromAustriaPercent: "0,00",

      balearenCovidMentionsFromSpainPercent: "20,00",
      balearenCovidMentionsFromUnitedKingdomPercent: "20,00",
      balearenCovidMentionsFromGermanyPercent: "20,00",
      balearenCovidMentionsFromItalyPercent: "20,00",
      balearenCovidMentionsFromFrancePercent: "13,33",
      balearenCovidMentionsFromSwedenPercent: "6,67",
      balearenCovidMentionsFromSwitzerlandPercent: "0,00",
      balearenCovidMentionsFromNetherlandsPercent: "0,00",
      balearenCovidMentionsFromAustriaPercent: "0,00",

      mallorcaCovidMentionsFromSpainPercent: "33,33",
      mallorcaCovidMentionsFromUnitedKingdomPercent: "33,33",
      mallorcaCovidMentionsFromGermanyPercent: "33,33",
      mallorcaCovidMentionsFromItalyPercent: "50,00",
      mallorcaCovidMentionsFromFrancePercent: "100,00",
      mallorcaCovidMentionsFromSwedenPercent: "0,00",
      mallorcaCovidMentionsFromSwitzerlandPercent: "0,00",
      mallorcaCovidMentionsFromNetherlandsPercent: "0,00",
      mallorcaCovidMentionsFromAustriaPercent: "0,00",

      menorcaCovidMentionsFromSpainPercent: "33,33",
      menorcaCovidMentionsFromUnitedKingdomPercent: "33,33",
      menorcaCovidMentionsFromGermanyPercent: "33,33",
      menorcaCovidMentionsFromItalyPercent: "33,33",
      menorcaCovidMentionsFromFrancePercent: "50,00",
      menorcaCovidMentionsFromSwedenPercent: "100,00",
      menorcaCovidMentionsFromSwitzerlandPercent: "0,00",
      menorcaCovidMentionsFromNetherlandsPercent: "0,00",
      menorcaCovidMentionsFromAustriaPercent: "0,00",

      ibizaCovidMentionsFromSpainPercent: "33,33",
      ibizaCovidMentionsFromUnitedKingdomPercent: "33,33",
      ibizaCovidMentionsFromGermanyPercent: "33,33",
      ibizaCovidMentionsFromItalyPercent: "33,33",
      ibizaCovidMentionsFromFrancePercent: "50,33",
      ibizaCovidMentionsFromSwedenPercent: "100,00",
      ibizaCovidMentionsFromSwitzerlandPercent: "0,00",
      ibizaCovidMentionsFromNetherlandsPercent: "0,00",
      ibizaCovidMentionsFromAustriaPercent: "0,00",

      formenteraCovidMentionsFromSpainPercent: "0,00",
      formenteraCovidMentionsFromUnitedKingdomPercent: "0,00",
      formenteraCovidMentionsFromGermanyPercent: "0,00",
      formenteraCovidMentionsFromItalyPercent: "0,00",
      formenteraCovidMentionsFromFrancePercent: "0,00",
      formenteraCovidMentionsFromSwedenPercent: "0,00",
      formenteraCovidMentionsFromSwitzerlandPercent: "0,00",
      formenteraCovidMentionsFromNetherlandsPercent: "0,00",
      formenteraCovidMentionsFromAustriaPercent: "0,00",

      balearenBothMentions: 15,
      balearenBothMentionsFromSpainPercent: "13,33",
      balearenBothMentionsFromUnitedKingdomPercent: "13,33",
      balearenBothMentionsFromGermanyPercent: "13,33",
      balearenBothMentionsFromItalyPercent: "13,33",
      balearenBothMentionsFromFrancePercent: "13,33",
      balearenBothMentionsFromSwedenPercent: "13,33",
      balearenBothMentionsFromSwitzerlandPercent: "13,33",
      balearenBothMentionsFromNetherlandsPercent: "6,67",
      balearenBothMentionsFromAustriaPercent: "0,00",

      mallorcaBothMentions: 8,
      mallorcaBothMentionsFromSpainPercent: "50,00",
      mallorcaBothMentionsFromUnitedKingdomPercent: "50,00",
      mallorcaBothMentionsFromGermanyPercent: "50,00",
      mallorcaBothMentionsFromItalyPercent: "50,00",
      mallorcaBothMentionsFromFrancePercent: "50,00",
      mallorcaBothMentionsFromSwedenPercent: "50,00",
      mallorcaBothMentionsFromSwitzerlandPercent: "50,00",
      mallorcaBothMentionsFromNetherlandsPercent: "100,00",
      mallorcaBothMentionsFromAustriaPercent: "0,00",

      menorcaBothMentionsFromSpainPercent: "50,00",
      menorcaBothMentionsFromUnitedKingdomPercent: "50,00",
      menorcaBothMentionsFromGermanyPercent: "50,00",
      menorcaBothMentionsFromItalyPercent: "50,00",
      menorcaBothMentionsFromFrancePercent: "50,00",
      menorcaBothMentionsFromSwedenPercent: "50,00",
      menorcaBothMentionsFromSwitzerlandPercent: "50,00",
      menorcaBothMentionsFromNetherlandsPercent: "100,00",
      menorcaBothMentionsFromAustriaPercent: "0,00",

      ibizaBothMentionsFromSpainPercent: "0,00",
      ibizaBothMentionsFromUnitedKingdomPercent: "0,00",
      ibizaBothMentionsFromGermanyPercent: "0,00",
      ibizaBothMentionsFromItalyPercent: "0,00",
      ibizaBothMentionsFromFrancePercent: "0,00",
      ibizaBothMentionsFromSwedenPercent: "0,00",
      ibizaBothMentionsFromSwitzerlandPercent: "0,00",
      ibizaBothMentionsFromNetherlandsPercent: "0,00",
      ibizaBothMentionsFromAustriaPercent: "0,00",

      FormenteraBothMentionsFromSpainPercent: "0,00",
      FormenteraBothMentionsFromUnitedKingdomPercent: "0,00",
      FormenteraBothMentionsFromGermanyPercent: "0,00",
      FormenteraBothMentionsFromItalyPercent: "0,00",
      FormenteraBothMentionsFromFrancePercent: "0,00",
      FormenteraBothMentionsFromSwedenPercent: "0,00",
      FormenteraBothMentionsFromSwitzerlandPercent: "0,00",
      FormenteraBothMentionsFromNetherlandsPercent: "0,00",
      FormenteraBothMentionsFromAustriaPercent: "0,00",
    };

    // input is the array of rows that will be included in the CSV
    const input = page10kpis.getKPIs(page10KpisDocsMock.docs);

    expect(input[2][1]).toBe(output.balearenTourismMentions);
    expect(input[2][2]).toBe(output.balearenTourismMentionsPercent);
    expect(input[3][1]).toBe(output.balearenCovidMentions);
    expect(input[3][2]).toBe(output.balearenCovidMentionsPercent);
    expect(input[4][1]).toBe(output.balearenBothMentions);
    expect(input[4][2]).toBe(output.balearenBothMentionsPercent);

    expect(input[8][0]).toBe(output.balearenTourismMentionsFromSpainPercent);
    expect(input[8][1]).toBe(
      output.balearenTourismMentionsFromUnitedKingdomPercent
    );
    expect(input[8][2]).toBe(output.balearenTourismMentionsFromGermanyPercent);
    expect(input[8][3]).toBe(output.balearenTourismMentionsFromItalyPercent);
    expect(input[8][4]).toBe(output.balearenTourismMentionsFromFrancePercent);
    expect(input[8][5]).toBe(output.balearenTourismMentionsFromSwedenPercent);
    expect(input[8][6]).toBe(
      output.balearenTourismMentionsFromSwitzerlandPercent
    );
    expect(input[8][7]).toBe(
      output.balearenTourismMentionsFromNetherlandsPercent
    );
    expect(input[8][8]).toBe(output.balearenTourismMentionsFromAustriaPercent);

    expect(input[12][0]).toBe(output.balearenCovidMentionsFromSpainPercent);
    expect(input[12][1]).toBe(
      output.balearenCovidMentionsFromUnitedKingdomPercent
    );
    expect(input[12][2]).toBe(output.balearenCovidMentionsFromGermanyPercent);
    expect(input[12][3]).toBe(output.balearenCovidMentionsFromItalyPercent);
    expect(input[12][4]).toBe(output.balearenCovidMentionsFromFrancePercent);
    expect(input[12][5]).toBe(output.balearenCovidMentionsFromSwedenPercent);
    expect(input[12][6]).toBe(
      output.balearenCovidMentionsFromSwitzerlandPercent
    );
    expect(input[12][7]).toBe(
      output.balearenCovidMentionsFromNetherlandsPercent
    );
    expect(input[12][8]).toBe(output.balearenCovidMentionsFromAustriaPercent);

    expect(input[16][0]).toBe(output.balearenBothMentionsFromSpainPercent);
    expect(input[16][1]).toBe(
      output.balearenBothMentionsFromUnitedKingdomPercent
    );
    expect(input[16][2]).toBe(output.balearenBothMentionsFromGermanyPercent);
    expect(input[16][3]).toBe(output.balearenBothMentionsFromItalyPercent);
    expect(input[16][4]).toBe(output.balearenBothMentionsFromFrancePercent);
    expect(input[16][5]).toBe(output.balearenBothMentionsFromSwedenPercent);
    expect(input[16][6]).toBe(
      output.balearenBothMentionsFromSwitzerlandPercent
    );
    expect(input[16][7]).toBe(
      output.balearenBothMentionsFromNetherlandsPercent
    );
    expect(input[16][8]).toBe(output.balearenBothMentionsFromAustriaPercent);

    expect(input[20][1]).toBe(output.balearenBothMentions);
    expect(input[20][2]).toBe(output.balearenBothMentionsFromSpainPercent);
    expect(input[20][3]).toBe(
      output.balearenBothMentionsFromUnitedKingdomPercent
    );
    expect(input[20][4]).toBe(output.balearenBothMentionsFromGermanyPercent);
    expect(input[20][5]).toBe(output.balearenBothMentionsFromItalyPercent);
    expect(input[20][6]).toBe(output.balearenBothMentionsFromFrancePercent);
    expect(input[20][7]).toBe(output.balearenBothMentionsFromSwedenPercent);
    expect(input[20][8]).toBe(
      output.balearenBothMentionsFromSwitzerlandPercent
    );
    expect(input[20][9]).toBe(
      output.balearenBothMentionsFromNetherlandsPercent
    );
    expect(input[20][10]).toBe(output.balearenBothMentionsFromAustriaPercent);
  });
});
