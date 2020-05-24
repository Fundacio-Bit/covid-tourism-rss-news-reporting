var fs = require("fs");

// ###*
// * Creates a csv from a set of input rows
// * @param {Array] csv_name   The full path to the output CSV, including the filename
// * @param {Array] rows   The array of rows that will be written in the CSV
// * @returns {Object} Error or success message
// ###
const create_csv = (csv_name, rows) => {
  csv_data = "";
  rows.forEach((row) => {
    csv_data = csv_data.concat(row.join(","));
    csv_data = csv_data.concat("\n");
  });

  fs.writeFile(csv_name, csv_data, "utf8", (err) => {
    if (err) return console.log(err);
    console.log(`Saved new file > ${csv_name}`);
  });
};

module.exports = { create_csv };
