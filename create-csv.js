var fs = require("fs");

// ###*
// * Promise that creates a csv from a set of input rows.
// * A inputs argument containing all the retrieved mongo documents and dates under analysis will be passed because it
// * is the input of all subsequent KPIs calculations.
// * @param [Array] csv_name   The full path to the output CSV, including the filename
// * @param [Array] rows   The array of rows that will be written in the CSV
// * @param {Object} inputs   An object containing two elements: data and dates. data is a sublement that contains Mongo documents of the week under analysis,
// * a week ago and two weeks ago. dates another subelement containing three elements:the formatted dates of the week under analysis, a week ago and two weeks ago.
// * @returns {Object} inputs (the same that was provided as argument)
// ###
const create_csv = (csv_name, rows, inputs) => {
  return new Promise((resolve, reject) => {
    csv_data = "";
    rows.forEach((row) => {
      csv_data = csv_data.concat(row.join(";"));
      csv_data = csv_data.concat("\n");
    });

    fs.writeFile(csv_name, csv_data, "utf8", (err) => {
      if (err) reject(err);
      console.log(`Saved new file > ${csv_name}`);
      resolve(inputs);
    });
  });
};

module.exports = { create_csv };
