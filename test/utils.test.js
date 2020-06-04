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

test("A document including a valid brand but not 'españa' as brand should return false", () => {
  expect(utils.spainMention({ brand: "baleares" })).toBe(false);
  expect(utils.spainMention({ brand: "mallorca" })).toBe(false);
  expect(utils.spainMention({ brand: "menorca" })).toBe(false);
  expect(utils.spainMention({ brand: "ibiza" })).toBe(false);
  expect(utils.spainMention({ brand: "formentera" })).toBe(false);
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

test("If a document (dictionary) is not passed should return false", () => {
  expect(utils.spainMention(null)).toBe(false);
  expect(utils.spainMention("")).toBe(false);
  expect(utils.spainMention(NaN)).toBe(false);
  expect(utils.spainMention(1)).toBe(false);
  expect(utils.spainMention([])).toBe(false);
});

// balearenMention tests (the brand should include, either "baleares" or an island names or several of them)
// TODO: the current version does not checks if the brands are comma separated or not.
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

test("A document including 'españa' as brand should return false", () => {
  expect(utils.balearenMention({ brand: "españa" })).toBe(false);
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

test("If a document (dictionary) is not passed should return false", () => {
  expect(utils.balearenMention(null)).toBe(false);
  expect(utils.balearenMention("")).toBe(false);
  expect(utils.balearenMention(NaN)).toBe(false);
  expect(utils.balearenMention(1)).toBe(false);
  expect(utils.balearenMention([])).toBe(false);
});

// mallorcaIslandMentions tests
// TODO: the current version does not checks if the brands are comma separated or not.
// Neither if a uppercase characters are used. Do a more robust version that checks such incidences.
test("A document including 'mallorca' as brand should return true", () => {
  expect(utils.mallorcaIslandMention({ brand: "mallorca" })).toBe(true);
});

test("A document including 'mallorca,españa' as brand should return true", () => {
  expect(utils.mallorcaIslandMention({ brand: "mallorca,españa" })).toBe(true);
});

test("A document including 'MALLORCA' as brand should return true", () => {
  expect(utils.mallorcaIslandMention({ brand: "MALLORCA" })).toBe(false);
});

test("A document including 'espanya' as brand should return false", () => {
  expect(utils.mallorcaIslandMention({ brand: "espanya" })).toBe(false);
});

test("A document including a valid brand but not 'mallorca' as brand should return false", () => {
  expect(utils.mallorcaIslandMention({ brand: "españa" })).toBe(false);
  expect(utils.mallorcaIslandMention({ brand: "baleares" })).toBe(false);
  expect(utils.mallorcaIslandMention({ brand: "menorca" })).toBe(false);
  expect(utils.mallorcaIslandMention({ brand: "ibiza" })).toBe(false);
  expect(utils.mallorcaIslandMention({ brand: "formentera" })).toBe(false);
});

test("A document including an empty string as brand should return false", () => {
  expect(utils.mallorcaIslandMention({ brand: "" })).toBe(false);
});

test("A document including null as brand should return false", () => {
  expect(utils.mallorcaIslandMention({ brand: null })).toBe(false);
});

test("A document including a Number as brand should return false", () => {
  expect(utils.mallorcaIslandMention({ brand: 1 })).toBe(false);
});

test("A document including a Boolean as brand should return false", () => {
  expect(utils.mallorcaIslandMention({ brand: true })).toBe(false);
});

test("If a document (dictionary) is not passed should return false", () => {
  expect(utils.mallorcaIslandMention(null)).toBe(false);
  expect(utils.mallorcaIslandMention("")).toBe(false);
  expect(utils.mallorcaIslandMention(NaN)).toBe(false);
  expect(utils.mallorcaIslandMention(1)).toBe(false);
  expect(utils.mallorcaIslandMention([])).toBe(false);
});

// menorcaIslandMentions tests
// TODO: the current version does not checks if the brands are comma separated or not.
// Neither if a uppercase characters are used. Do a more robust version that checks such incidences.
test("A document including 'menorca' as brand should return true", () => {
  expect(utils.menorcaIslandMention({ brand: "menorca" })).toBe(true);
});

test("A document including 'menorca,españa' as brand should return true", () => {
  expect(utils.menorcaIslandMention({ brand: "menorca,españa" })).toBe(true);
});

test("A document including 'MENORCA' as brand should return true", () => {
  expect(utils.menorcaIslandMention({ brand: "MENORCA" })).toBe(false);
});

test("A document including 'espanya' as brand should return false", () => {
  expect(utils.menorcaIslandMention({ brand: "espanya" })).toBe(false);
});

test("A document including a valid brand but not 'menorca' as brand should return false", () => {
  expect(utils.menorcaIslandMention({ brand: "españa" })).toBe(false);
  expect(utils.menorcaIslandMention({ brand: "baleares" })).toBe(false);
  expect(utils.menorcaIslandMention({ brand: "mallorca" })).toBe(false);
  expect(utils.menorcaIslandMention({ brand: "ibiza" })).toBe(false);
  expect(utils.menorcaIslandMention({ brand: "formentera" })).toBe(false);
});

test("A document including an empty string as brand should return false", () => {
  expect(utils.menorcaIslandMention({ brand: "" })).toBe(false);
});

test("A document including null as brand should return false", () => {
  expect(utils.menorcaIslandMention({ brand: null })).toBe(false);
});

test("A document including a Number as brand should return false", () => {
  expect(utils.menorcaIslandMention({ brand: 1 })).toBe(false);
});

test("A document including a Boolean as brand should return false", () => {
  expect(utils.menorcaIslandMention({ brand: true })).toBe(false);
});

test("If a document (dictionary) is not passed should return false", () => {
  expect(utils.menorcaIslandMention(null)).toBe(false);
  expect(utils.menorcaIslandMention("")).toBe(false);
  expect(utils.menorcaIslandMention(NaN)).toBe(false);
  expect(utils.menorcaIslandMention(1)).toBe(false);
  expect(utils.menorcaIslandMention([])).toBe(false);
});

// ibizaIslandMentions tests
// TODO: the current version does not checks if the brands are comma separated or not.
// Neither if a uppercase characters are used. Do a more robust version that checks such incidences.
test("A document including 'ibiza' as brand should return true", () => {
  expect(utils.ibizaIslandMention({ brand: "ibiza" })).toBe(true);
});

test("A document including 'ibiza,españa' as brand should return true", () => {
  expect(utils.ibizaIslandMention({ brand: "ibiza,españa" })).toBe(true);
});

test("A document including 'IBIZA' as brand should return true", () => {
  expect(utils.ibizaIslandMention({ brand: "IBIZA" })).toBe(false);
});

test("A document including 'espanya' as brand should return false", () => {
  expect(utils.ibizaIslandMention({ brand: "espanya" })).toBe(false);
});

test("A document including a valid brand but not 'ibiza' as brand should return false", () => {
  expect(utils.ibizaIslandMention({ brand: "españa" })).toBe(false);
  expect(utils.ibizaIslandMention({ brand: "baleares" })).toBe(false);
  expect(utils.ibizaIslandMention({ brand: "mallorca" })).toBe(false);
  expect(utils.ibizaIslandMention({ brand: "menorca" })).toBe(false);
  expect(utils.ibizaIslandMention({ brand: "formentera" })).toBe(false);
});

test("A document including an empty string as brand should return false", () => {
  expect(utils.ibizaIslandMention({ brand: "" })).toBe(false);
});

test("A document including null as brand should return false", () => {
  expect(utils.ibizaIslandMention({ brand: null })).toBe(false);
});

test("A document including a Number as brand should return false", () => {
  expect(utils.ibizaIslandMention({ brand: 1 })).toBe(false);
});

test("A document including a Boolean as brand should return false", () => {
  expect(utils.ibizaIslandMention({ brand: true })).toBe(false);
});

test("If a document (dictionary) is not passed should return false", () => {
  expect(utils.ibizaIslandMention(null)).toBe(false);
  expect(utils.ibizaIslandMention("")).toBe(false);
  expect(utils.ibizaIslandMention(NaN)).toBe(false);
  expect(utils.ibizaIslandMention(1)).toBe(false);
  expect(utils.ibizaIslandMention([])).toBe(false);
});

// formenteraIslandMentions tests
// TODO: the current version does not checks if the brands are comma separated or not.
// Neither if a uppercase characters are used. Do a more robust version that checks such incidences.
test("A document including 'formentera' as brand should return true", () => {
  expect(utils.formenteraIslandMention({ brand: "formentera" })).toBe(true);
});

test("A document including 'formentera,españa' as brand should return true", () => {
  expect(utils.formenteraIslandMention({ brand: "formentera,españa" })).toBe(
    true
  );
});

test("A document including 'FORMENTERA' as brand should return true", () => {
  expect(utils.formenteraIslandMention({ brand: "FORMENTERA" })).toBe(false);
});

test("A document including 'espanya' as brand should return false", () => {
  expect(utils.formenteraIslandMention({ brand: "espanya" })).toBe(false);
});

test("A document including a valid brand but not 'formentera' as brand should return false", () => {
  expect(utils.formenteraIslandMention({ brand: "españa" })).toBe(false);
  expect(utils.formenteraIslandMention({ brand: "baleares" })).toBe(false);
  expect(utils.formenteraIslandMention({ brand: "mallorca" })).toBe(false);
  expect(utils.formenteraIslandMention({ brand: "menorca" })).toBe(false);
  expect(utils.formenteraIslandMention({ brand: "ibiza" })).toBe(false);
});

test("A document including an empty string as brand should return false", () => {
  expect(utils.formenteraIslandMention({ brand: "" })).toBe(false);
});

test("A document including null as brand should return false", () => {
  expect(utils.formenteraIslandMention({ brand: null })).toBe(false);
});

test("A document including a Number as brand should return false", () => {
  expect(utils.formenteraIslandMention({ brand: 1 })).toBe(false);
});

test("A document including a Boolean as brand should return false", () => {
  expect(utils.formenteraIslandMention({ brand: true })).toBe(false);
});

test("If a document (dictionary) is not passed should return false", () => {
  expect(utils.formenteraIslandMention(null)).toBe(false);
  expect(utils.formenteraIslandMention("")).toBe(false);
  expect(utils.formenteraIslandMention(NaN)).toBe(false);
  expect(utils.formenteraIslandMention(1)).toBe(false);
  expect(utils.formenteraIslandMention([])).toBe(false);
});
