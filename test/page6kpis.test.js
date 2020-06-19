const page6kpis = require("../page6kpis");
// input mock import
const page6KpisDocs = require("../test/page6kpis_docs_mock.json");

describe("KPIs calculation filter for page 6", () => {
  test("it should return the KPIs defined in the output variable", () => {
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
    ]; // empty dates are valid for this test
    const datesMockTWA = [
      "1 gen. 2020",
      "2 gen. 2020",
      "3 gen. 2020",
      "4 gen. 2020",
      "5 gen. 2020",
      "6 gen. 2020",
      "7 gen. 2020",
    ]; // empty dates are valid for this test

    // input is the array of rows that will be included in the CSV
    const input = page6kpis.getKPIs(
      page6KpisDocs.slice(2, 7), // docs with published date of the third week of january 2020
      page6KpisDocs.slice(1, 2), // doc with published date of the second week of january 2020
      page6KpisDocs.slice(0, 1), // doc with published date of the fisrt week of january 2020
      datesMockCW,
      datesMockWA,
      datesMockTWA
    );

    expect(input[0][1]).toBe(output.balearenMentionsCW);
    expect(input[1][1]).toEqual(output.balearenTourismMentionsPercentCW);
    expect(input[2][1]).toEqual(output.balearenTourismMentionsCW);
    expect(input[6]).toEqual(output.balearenMentionsPercentByCategoryCW);
    expect(input[7]).toEqual(output.balearenMentionsPercentByCategoryWA);
    expect(input[8]).toEqual(output.balearenMentionsPercentByCategoryTWA);
    expect(input[12]).toEqual(output.balearenTimeSeriesArray);
  });
});
