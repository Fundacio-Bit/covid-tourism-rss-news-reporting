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

// mentionFromSpain
test("A document with country value equal to 'ES' should return true", () => {
  expect(utils.mentionFromSpain({ country: "ES" })).toBe(true);
});

test("A document with a non-valid string country value should return false", () => {
  expect(utils.mentionFromSpain({ country: "arbitraryString" })).toBe(false);
});

test("A document with a country value equal to a country of interest but not 'ES' should return false", () => {
  expect(utils.mentionFromSpain({ country: "UK" })).toBe(false);
  expect(utils.mentionFromSpain({ country: "DE" })).toBe(false);
  expect(utils.mentionFromSpain({ country: "FR" })).toBe(false);
  expect(utils.mentionFromSpain({ country: "IT" })).toBe(false);
  expect(utils.mentionFromSpain({ country: "SE" })).toBe(false);
  expect(utils.mentionFromSpain({ country: "SZ" })).toBe(false);
  expect(utils.mentionFromSpain({ country: "NL" })).toBe(false);
  expect(utils.mentionFromSpain({ country: "AT" })).toBe(false);
});

test("A document including an empty string as country should return false", () => {
  expect(utils.mentionFromSpain({ country: "" })).toBe(false);
});

test("A document including null as country should return false", () => {
  expect(utils.mentionFromSpain({ country: null })).toBe(false);
});

test("A document including a Number as country should return false", () => {
  expect(utils.mentionFromSpain({ country: 1 })).toBe(false);
});

test("A document including a Boolean as country should return false", () => {
  expect(utils.mentionFromSpain({ country: true })).toBe(false);
});

test("If a document (dictionary) is not passed should return false", () => {
  expect(utils.mentionFromSpain(null)).toBe(false);
  expect(utils.mentionFromSpain("")).toBe(false);
  expect(utils.mentionFromSpain(NaN)).toBe(false);
  expect(utils.mentionFromSpain(1)).toBe(false);
  expect(utils.mentionFromSpain([])).toBe(false);
});

// mentionFromUnitedKingdom
test("A document with country value equal to 'UK' should return true", () => {
  expect(utils.mentionFromUnitedKingdom({ country: "UK" })).toBe(true);
});

test("A document with a non-valid string country value should return false", () => {
  expect(utils.mentionFromUnitedKingdom({ country: "arbitraryString" })).toBe(
    false
  );
});

test("A document with a country value equal to a country of interest but not 'UK' should return false", () => {
  expect(utils.mentionFromUnitedKingdom({ country: "ES" })).toBe(false);
  expect(utils.mentionFromUnitedKingdom({ country: "DE" })).toBe(false);
  expect(utils.mentionFromUnitedKingdom({ country: "FR" })).toBe(false);
  expect(utils.mentionFromUnitedKingdom({ country: "IT" })).toBe(false);
  expect(utils.mentionFromUnitedKingdom({ country: "SE" })).toBe(false);
  expect(utils.mentionFromUnitedKingdom({ country: "SZ" })).toBe(false);
  expect(utils.mentionFromUnitedKingdom({ country: "NL" })).toBe(false);
  expect(utils.mentionFromUnitedKingdom({ country: "AT" })).toBe(false);
});

test("A document including an empty string as country should return false", () => {
  expect(utils.mentionFromUnitedKingdom({ country: "" })).toBe(false);
});

test("A document including null as country should return false", () => {
  expect(utils.mentionFromUnitedKingdom({ country: null })).toBe(false);
});

test("A document including a Number as country should return false", () => {
  expect(utils.mentionFromUnitedKingdom({ country: 1 })).toBe(false);
});

test("A document including a Boolean as country should return false", () => {
  expect(utils.mentionFromUnitedKingdom({ country: true })).toBe(false);
});

test("If a document (dictionary) is not passed should return false", () => {
  expect(utils.mentionFromUnitedKingdom(null)).toBe(false);
  expect(utils.mentionFromUnitedKingdom("")).toBe(false);
  expect(utils.mentionFromUnitedKingdom(NaN)).toBe(false);
  expect(utils.mentionFromUnitedKingdom(1)).toBe(false);
  expect(utils.mentionFromUnitedKingdom([])).toBe(false);
});

// mentionFromGermany
test("A document with country value equal to 'DE' should return true", () => {
  expect(utils.mentionFromGermany({ country: "DE" })).toBe(true);
});

test("A document with a non-valid string country value should return false", () => {
  expect(utils.mentionFromGermany({ country: "arbitraryString" })).toBe(false);
});

test("A document with a country value equal to a country of interest but not 'DE' should return false", () => {
  expect(utils.mentionFromGermany({ country: "ES" })).toBe(false);
  expect(utils.mentionFromGermany({ country: "UK" })).toBe(false);
  expect(utils.mentionFromGermany({ country: "FR" })).toBe(false);
  expect(utils.mentionFromGermany({ country: "IT" })).toBe(false);
  expect(utils.mentionFromGermany({ country: "SE" })).toBe(false);
  expect(utils.mentionFromGermany({ country: "SZ" })).toBe(false);
  expect(utils.mentionFromGermany({ country: "NL" })).toBe(false);
  expect(utils.mentionFromGermany({ country: "AT" })).toBe(false);
});

test("A document including an empty string as country should return false", () => {
  expect(utils.mentionFromGermany({ country: "" })).toBe(false);
});

test("A document including null as country should return false", () => {
  expect(utils.mentionFromGermany({ country: null })).toBe(false);
});

test("A document including a Number as country should return false", () => {
  expect(utils.mentionFromGermany({ country: 1 })).toBe(false);
});

test("A document including a Boolean as country should return false", () => {
  expect(utils.mentionFromGermany({ country: true })).toBe(false);
});

test("If a document (dictionary) is not passed should return false", () => {
  expect(utils.mentionFromGermany(null)).toBe(false);
  expect(utils.mentionFromGermany("")).toBe(false);
  expect(utils.mentionFromGermany(NaN)).toBe(false);
  expect(utils.mentionFromGermany(1)).toBe(false);
  expect(utils.mentionFromGermany([])).toBe(false);
});

// mentionFromFrance
test("A document with country value equal to 'FR' should return true", () => {
  expect(utils.mentionFromFrance({ country: "FR" })).toBe(true);
});

test("A document with a non-valid string country value should return false", () => {
  expect(utils.mentionFromFrance({ country: "arbitraryString" })).toBe(false);
});

test("A document with a country value equal to a country of interest but not 'FR' should return false", () => {
  expect(utils.mentionFromFrance({ country: "ES" })).toBe(false);
  expect(utils.mentionFromFrance({ country: "UK" })).toBe(false);
  expect(utils.mentionFromFrance({ country: "DE" })).toBe(false);
  expect(utils.mentionFromFrance({ country: "IT" })).toBe(false);
  expect(utils.mentionFromFrance({ country: "SE" })).toBe(false);
  expect(utils.mentionFromFrance({ country: "SZ" })).toBe(false);
  expect(utils.mentionFromFrance({ country: "NL" })).toBe(false);
  expect(utils.mentionFromFrance({ country: "AT" })).toBe(false);
});

test("A document including an empty string as country should return false", () => {
  expect(utils.mentionFromFrance({ country: "" })).toBe(false);
});

test("A document including null as country should return false", () => {
  expect(utils.mentionFromFrance({ country: null })).toBe(false);
});

test("A document including a Number as country should return false", () => {
  expect(utils.mentionFromFrance({ country: 1 })).toBe(false);
});

test("A document including a Boolean as country should return false", () => {
  expect(utils.mentionFromFrance({ country: true })).toBe(false);
});

test("If a document (dictionary) is not passed should return false", () => {
  expect(utils.mentionFromFrance(null)).toBe(false);
  expect(utils.mentionFromFrance("")).toBe(false);
  expect(utils.mentionFromFrance(NaN)).toBe(false);
  expect(utils.mentionFromFrance(1)).toBe(false);
  expect(utils.mentionFromFrance([])).toBe(false);
});

// mentionFromItaly
test("A document with country value equal to 'IT' should return true", () => {
  expect(utils.mentionFromItaly({ country: "IT" })).toBe(true);
});

test("A document with a non-valid string country value should return false", () => {
  expect(utils.mentionFromItaly({ country: "arbitraryString" })).toBe(false);
});

test("A document with a country value equal to a country of interest but not 'IT' should return false", () => {
  expect(utils.mentionFromItaly({ country: "ES" })).toBe(false);
  expect(utils.mentionFromItaly({ country: "UK" })).toBe(false);
  expect(utils.mentionFromItaly({ country: "DE" })).toBe(false);
  expect(utils.mentionFromItaly({ country: "FR" })).toBe(false);
  expect(utils.mentionFromItaly({ country: "SE" })).toBe(false);
  expect(utils.mentionFromItaly({ country: "SZ" })).toBe(false);
  expect(utils.mentionFromItaly({ country: "NL" })).toBe(false);
  expect(utils.mentionFromItaly({ country: "AT" })).toBe(false);
});

test("A document including an empty string as country should return false", () => {
  expect(utils.mentionFromItaly({ country: "" })).toBe(false);
});

test("A document including null as country should return false", () => {
  expect(utils.mentionFromItaly({ country: null })).toBe(false);
});

test("A document including a Number as country should return false", () => {
  expect(utils.mentionFromItaly({ country: 1 })).toBe(false);
});

test("A document including a Boolean as country should return false", () => {
  expect(utils.mentionFromItaly({ country: true })).toBe(false);
});

test("If a document (dictionary) is not passed should return false", () => {
  expect(utils.mentionFromItaly(null)).toBe(false);
  expect(utils.mentionFromItaly("")).toBe(false);
  expect(utils.mentionFromItaly(NaN)).toBe(false);
  expect(utils.mentionFromItaly(1)).toBe(false);
  expect(utils.mentionFromItaly([])).toBe(false);
});

// mentionFromSweden
test("A document with country value equal to 'SE' should return true", () => {
  expect(utils.mentionFromSweden({ country: "SE" })).toBe(true);
});

test("A document with a non-valid string country value should return false", () => {
  expect(utils.mentionFromSweden({ country: "arbitraryString" })).toBe(false);
});

test("A document with a country value equal to a country of interest but not 'SE' should return false", () => {
  expect(utils.mentionFromSweden({ country: "ES" })).toBe(false);
  expect(utils.mentionFromSweden({ country: "UK" })).toBe(false);
  expect(utils.mentionFromSweden({ country: "DE" })).toBe(false);
  expect(utils.mentionFromSweden({ country: "FR" })).toBe(false);
  expect(utils.mentionFromSweden({ country: "IT" })).toBe(false);
  expect(utils.mentionFromSweden({ country: "SZ" })).toBe(false);
  expect(utils.mentionFromSweden({ country: "NL" })).toBe(false);
  expect(utils.mentionFromSweden({ country: "AT" })).toBe(false);
});

test("A document including an empty string as country should return false", () => {
  expect(utils.mentionFromSweden({ country: "" })).toBe(false);
});

test("A document including null as country should return false", () => {
  expect(utils.mentionFromSweden({ country: null })).toBe(false);
});

test("A document including a Number as country should return false", () => {
  expect(utils.mentionFromSweden({ country: 1 })).toBe(false);
});

test("A document including a Boolean as country should return false", () => {
  expect(utils.mentionFromSweden({ country: true })).toBe(false);
});

test("If a document (dictionary) is not passed should return false", () => {
  expect(utils.mentionFromSweden(null)).toBe(false);
  expect(utils.mentionFromSweden("")).toBe(false);
  expect(utils.mentionFromSweden(NaN)).toBe(false);
  expect(utils.mentionFromSweden(1)).toBe(false);
  expect(utils.mentionFromSweden([])).toBe(false);
});

// mentionFromSwitzerland
test("A document with country value equal to 'SZ' should return true", () => {
  expect(utils.mentionFromSwitzerland({ country: "SZ" })).toBe(true);
});

test("A document with a non-valid string country value should return false", () => {
  expect(utils.mentionFromSwitzerland({ country: "arbitraryString" })).toBe(
    false
  );
});

test("A document with a country value equal to a country of interest but not 'SZ' should return false", () => {
  expect(utils.mentionFromSwitzerland({ country: "ES" })).toBe(false);
  expect(utils.mentionFromSwitzerland({ country: "UK" })).toBe(false);
  expect(utils.mentionFromSwitzerland({ country: "DE" })).toBe(false);
  expect(utils.mentionFromSwitzerland({ country: "FR" })).toBe(false);
  expect(utils.mentionFromSwitzerland({ country: "IT" })).toBe(false);
  expect(utils.mentionFromSwitzerland({ country: "SE" })).toBe(false);
  expect(utils.mentionFromSwitzerland({ country: "NL" })).toBe(false);
  expect(utils.mentionFromSwitzerland({ country: "AT" })).toBe(false);
});

test("A document including an empty string as country should return false", () => {
  expect(utils.mentionFromSwitzerland({ country: "" })).toBe(false);
});

test("A document including null as country should return false", () => {
  expect(utils.mentionFromSwitzerland({ country: null })).toBe(false);
});

test("A document including a Number as country should return false", () => {
  expect(utils.mentionFromSwitzerland({ country: 1 })).toBe(false);
});

test("A document including a Boolean as country should return false", () => {
  expect(utils.mentionFromSwitzerland({ country: true })).toBe(false);
});

test("If a document (dictionary) is not passed should return false", () => {
  expect(utils.mentionFromSwitzerland(null)).toBe(false);
  expect(utils.mentionFromSwitzerland("")).toBe(false);
  expect(utils.mentionFromSwitzerland(NaN)).toBe(false);
  expect(utils.mentionFromSwitzerland(1)).toBe(false);
  expect(utils.mentionFromSwitzerland([])).toBe(false);
});

// mentionFromNetherlands
test("A document with country value equal to 'NL' should return true", () => {
  expect(utils.mentionFromNetherlands({ country: "NL" })).toBe(true);
});

test("A document with a non-valid string country value should return false", () => {
  expect(utils.mentionFromNetherlands({ country: "arbitraryString" })).toBe(
    false
  );
});

test("A document with a country value equal to a country of interest but not 'NL' should return false", () => {
  expect(utils.mentionFromNetherlands({ country: "ES" })).toBe(false);
  expect(utils.mentionFromNetherlands({ country: "UK" })).toBe(false);
  expect(utils.mentionFromNetherlands({ country: "DE" })).toBe(false);
  expect(utils.mentionFromNetherlands({ country: "FR" })).toBe(false);
  expect(utils.mentionFromNetherlands({ country: "IT" })).toBe(false);
  expect(utils.mentionFromNetherlands({ country: "SE" })).toBe(false);
  expect(utils.mentionFromNetherlands({ country: "SZ" })).toBe(false);
  expect(utils.mentionFromNetherlands({ country: "AT" })).toBe(false);
});

test("A document including an empty string as country should return false", () => {
  expect(utils.mentionFromNetherlands({ country: "" })).toBe(false);
});

test("A document including null as country should return false", () => {
  expect(utils.mentionFromNetherlands({ country: null })).toBe(false);
});

test("A document including a Number as country should return false", () => {
  expect(utils.mentionFromNetherlands({ country: 1 })).toBe(false);
});

test("A document including a Boolean as country should return false", () => {
  expect(utils.mentionFromNetherlands({ country: true })).toBe(false);
});

test("If a document (dictionary) is not passed should return false", () => {
  expect(utils.mentionFromNetherlands(null)).toBe(false);
  expect(utils.mentionFromNetherlands("")).toBe(false);
  expect(utils.mentionFromNetherlands(NaN)).toBe(false);
  expect(utils.mentionFromNetherlands(1)).toBe(false);
  expect(utils.mentionFromNetherlands([])).toBe(false);
});

// mentionFromAustria
test("A document with country value equal to 'AT' should return true", () => {
  expect(utils.mentionFromAustria({ country: "AT" })).toBe(true);
});

test("A document with a non-valid string country value should return false", () => {
  expect(utils.mentionFromAustria({ country: "arbitraryString" })).toBe(false);
});

test("A document with a country value equal to a country of interest but not 'AT' should return false", () => {
  expect(utils.mentionFromAustria({ country: "ES" })).toBe(false);
  expect(utils.mentionFromAustria({ country: "UK" })).toBe(false);
  expect(utils.mentionFromAustria({ country: "DE" })).toBe(false);
  expect(utils.mentionFromAustria({ country: "FR" })).toBe(false);
  expect(utils.mentionFromAustria({ country: "IT" })).toBe(false);
  expect(utils.mentionFromAustria({ country: "SE" })).toBe(false);
  expect(utils.mentionFromAustria({ country: "SZ" })).toBe(false);
  expect(utils.mentionFromAustria({ country: "NL" })).toBe(false);
});

test("A document including an empty string as country should return false", () => {
  expect(utils.mentionFromAustria({ country: "" })).toBe(false);
});

test("A document including null as country should return false", () => {
  expect(utils.mentionFromAustria({ country: null })).toBe(false);
});

test("A document including a Number as country should return false", () => {
  expect(utils.mentionFromAustria({ country: 1 })).toBe(false);
});

test("A document including a Boolean as country should return false", () => {
  expect(utils.mentionFromAustria({ country: true })).toBe(false);
});

test("If a document (dictionary) is not passed should return false", () => {
  expect(utils.mentionFromAustria(null)).toBe(false);
  expect(utils.mentionFromAustria("")).toBe(false);
  expect(utils.mentionFromAustria(NaN)).toBe(false);
  expect(utils.mentionFromAustria(1)).toBe(false);
  expect(utils.mentionFromAustria([])).toBe(false);
});
