const fs = require("fs");
const archiver = require("archiver");

const zip_directory = (zipFile, out) => {
  // console.log('Zip directory ' + out + ' to file ' + source)
  // create a file to stream archive data to.
  stream = fs.createWriteStream(zipFile);
  archive = archiver("zip", { zlib: { level: 9 } });

  archive.on("error", function (err) {
    console.log("Error generating ZIP file: " + err.code);
  });

  // append files from a sub-directory, putting its contents at the root of archive
  archive
    .directory(out, false)
    .on("error", function (err) {
      console.log("Error generating ZIP file: " + err.code);
    })
    .pipe(stream);

  stream.on("close", function () {
    console.log(
      "ZIP file has been created with size " +
        archive.pointer() +
        " total bytes"
    );
  });
  archive.finalize();
  return "ok";
};

module.exports = { zip_directory };
