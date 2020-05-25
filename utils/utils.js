const getPercent = (total, part) => {
  return `${((parseFloat(part) * 100) / total).toFixed(2)}%`;
};

const spainMention = (doc) => {
  return doc.brand.includes("españa");
};

const balearenMention = (doc) => {
  return (
    doc.brand.includes("baleares") |
    doc.brand.includes("mallorca") |
    doc.brand.includes("menorca") |
    doc.brand.includes("ibiza") |
    doc.brand.includes("formentera")
  );
};

const tourismAndBothCategories = (doc) => {
  return (doc.category == "tourism") | (doc.category == "both");
};

const tourismCategory = (doc) => {
  return doc.category == "tourism";
};

const bothCategory = (doc) => {
  return doc.category == "both";
};

const covidCategory = (doc) => {
  return doc.category == "covid";
};

const otherCategory = (doc) => {
  return doc.category == "none";
};

module.exports = {
  getPercent,
  spainMention,
  balearenMention,
  tourismAndBothCategories,
  tourismCategory,
  bothCategory,
  covidCategory,
  otherCategory,
};
