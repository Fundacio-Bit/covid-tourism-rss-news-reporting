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

// ===== ADD CATEGORY TESTS =======
// TODO add test for non valid values at text fields
// input mocks and expected results imports
const addCategoriesDocs = require("../test/add_categories_to_docs_mock.json");
const addCategoriesExpectedResult = require("../test/add_categories_result_mock.json");

// tests
test("addCategories adds expected category elements.", () => {
  expect(addProcessedData.addCategory(addCategoriesDocs)).toEqual(
    addCategoriesExpectedResult
  );
});

// ===== ADD PUBLISHED FORMATTED TESTS =======
// TODO add test for non valid values at text fields
// WARNING!!! addFormatted date launches a warning during test because the input mock provides
// dates as String. An upgrade tu higher versions of monment will result in test failures.
// input mocks and expected results imports
const addPublishedFormattedDocs = require("../test/add_published_formatted_to_docs_mock.json");
const addPublishedFormattedExpectedResult = require("../test/add_published_formatted_result_mock.json");

// tests
test("addPublishedFormatted adds expected publishedFormatted elements.", () => {
  expect(addProcessedData.addFormattedDate(addPublishedFormattedDocs)).toEqual(
    addPublishedFormattedExpectedResult
  );
});
