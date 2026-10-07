const fs = require("fs");
const path = require("path");

// Write to ../files/output.txt (one level up from uploads/, into files/)
// Using path.join + __dirname makes the path absolute and reliable
const stream = fs.createWriteStream(
  path.join(__dirname, "..", "files", "output.txt")
);

stream.write("First Line\n");
stream.write("Second Line\n");

stream.end();

stream.on("finish", () => {
  console.log("File writing completed");
});

stream.on("error", (err) => {
  console.error("Error writing file:", err.message);
});