const utils = require("../utils/utils");

// getPercent tests
test("getPercent with a total of 100 and a part of 30 should return the String '30,00'", () => {
  expect(utils.getPercent(100, 30)).toBe("30,00");
});

test("getPercent with a total of 0 and a part of 0 should return the String '0'", () => {
  expect(utils.getPercent(0, 0)).toBe("0");
});

test("getPercent with a total of 0 and a part of 100 should return the String '0'", () => {
  expect(utils.getPercent(0, 100)).toBe("0");
});

// spainMentions tests
// TODO: the current version does not checks if the brands are comma separated or not.
// Neither if a uppercase characters are used. Do a more robust version that checks such incidences.
test("A document including 'españa' as brand should return true", () => {
  expect(utils.spainMention({ brand: "españa" })).toBe(true);
});

test("A document including 'mallorca,españa' as brand should return true", () => {
  expect(utils.spainMention({ brand: "mallorca,españa" })).toBe(true);
});

test("A document including 'ESPAÑA' as brand should return true", () => {
  expect(utils.spainMention({ brand: "ESPAÑA" })).toBe(false);
});

test("A document including 'espanya' as brand should return false", () => {
  expect(utils.spainMention({ brand: "espanya" })).toBe(false);
});

test("A document including 'mallorca' as brand should return false", () => {
  expect(utils.spainMention({ brand: "mallorca" })).toBe(false);
});

test("A document including an empty string as brand should return false", () => {
  expect(utils.spainMention({ brand: "" })).toBe(false);
});

test("A document including null as brand should return false", () => {
  expect(utils.spainMention({ brand: null })).toBe(false);
});

test("A document including a Number as brand should return false", () => {
  expect(utils.spainMention({ brand: 1 })).toBe(false);
});

test("A document including a Boolean as brand should return false", () => {
  expect(utils.spainMention({ brand: true })).toBe(false);
});

// balearenMention tests (the brand should include, either "baleares" or the isladn names or several of them)
// TODO: the current version does not checks if the brands are comma separated por not.
// Neither if a uppercase characters are used. Do a more robust version that checks such incidences.

test("A document including 'baleares' as brand should return true", () => {
  expect(utils.balearenMention({ brand: "baleares" })).toBe(true);
});

test("A document including 'mallorca,españa' as brand should return true", () => {
  expect(utils.balearenMention({ brand: "mallorca,españa" })).toBe(true);
});

test("A document including 'menorca,baleares' as brand should return true", () => {
  expect(utils.balearenMention({ brand: "menorca,baleares" })).toBe(true);
});

test("A document including 'mallorca' as brand should return true", () => {
  expect(utils.balearenMention({ brand: "mallorca" })).toBe(true);
});

test("A document including 'BALEARES' as brand should return false", () => {
  expect(utils.balearenMention({ brand: "BALEARES" })).toBe(false);
});

test("A document including 'balearen' as brand should return false", () => {
  expect(utils.balearenMention({ brand: "balearen" })).toBe(false);
});

test("A document including an empty string as brand should return false", () => {
  expect(utils.balearenMention({ brand: "" })).toBe(false);
});

test("A document including null as brand should return false", () => {
  expect(utils.balearenMention({ brand: null })).toBe(false);
});

test("A document including a Number as brand should return false", () => {
  expect(utils.balearenMention({ brand: 1 })).toBe(false);
});

test("A document including a Boolean as brand should return false", () => {
  expect(utils.balearenMention({ brand: true })).toBe(false);
});
