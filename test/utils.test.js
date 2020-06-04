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
test("A documemt including 'españa' as brand should return true", () => {
  expect(utils.spainMention({ brand: "españa" })).toBe(true);
});

test("A documemt including 'mallorca,españa' as brand should return true", () => {
  expect(utils.spainMention({ brand: "mallorca,españa" })).toBe(true);
});

test("A documemt including 'ESPAÑA' as brand should return true", () => {
  expect(utils.spainMention({ brand: "ESPAÑA" })).toBe(false);
});

test("A documemt including 'espanya' as brand should return false", () => {
  expect(utils.spainMention({ brand: "espanya" })).toBe(false);
});

test("A documemt including 'mallorca' as brand should return false", () => {
  expect(utils.spainMention({ brand: "mallorca" })).toBe(false);
});
