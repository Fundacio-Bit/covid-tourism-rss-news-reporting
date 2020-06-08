const addProcessedData = require("../add-processed-data");
const addCountriesDocs = require("../test/add_countries_to_docs_mock.json");
const addCountriesExpectedResult = require("../test/add_countries_result_mock.json");

// addCountry tests
test("addCountry to valid docs adds expected country elements.", () => {
  expect(addProcessedData.addCountry(addCountriesDocs)).toEqual(
    addCountriesExpectedResult
  );
});
