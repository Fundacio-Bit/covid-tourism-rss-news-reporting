const page6kpis = require("../page6kpis");
// input mock import
const page6KpisDocs = require("../test/page6kpis_docs_mock.json");

describe("KPIs calculation filter for page 6", () => {
  test("it should return the KPIs defined in the output variable", () => {
    const output = {
      balearenMentionsCW: 4,
    };
    const datesMock = ["", "", "", "", "", "", ""];
    const input = page6kpis.getKPIs(
      page6KpisDocs.slice(2, 6),
      page6KpisDocs.slice(1, 2),
      page6KpisDocs.slice(0, 1),
      datesMock,
      datesMock,
      datesMock
    );

    expect(input[0][1]).toEqual(output.balearenMentionsCW);
  });
});
