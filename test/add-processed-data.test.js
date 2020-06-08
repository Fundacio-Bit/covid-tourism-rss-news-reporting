const addProcessedData = require("../add-processed-data");

// ===== ADD COUNTRY TESTS =======

// input mocks and expected results imports
const addCountriesDocs = require("../test/add_countries_to_docs_mock.json");
const addCountriesExpectedResult = require("../test/add_countries_result_mock.json");

// tests (valid source_ids)
test("addCountry to valid docs adds expected country elements (docs from 0 to 9).", () => {
  expect(addProcessedData.addCountry(addCountriesDocs.slice(0, 9))).toEqual(
    addCountriesExpectedResult.slice(0, 9)
  );
});

// tests (excpections source_ids)
test("non valid source_id values return documents with 'unknown' as country value(docs from 10 to 14).", () => {
  expect(addProcessedData.addCountry(addCountriesDocs.slice(10, 14))).toEqual(
    addCountriesExpectedResult.slice(10, 14)
  );
});
