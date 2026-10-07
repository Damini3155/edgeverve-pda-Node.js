const fs = require("fs");
const path = require("path");

// Read from ../files/input (one level up from uploads/, into files/)
// Using path.join + __dirname makes the path absolute and reliable
const readStream = fs.createReadStream(
  path.join(__dirname, "..", "files", "input"),
  { encoding: "utf-8", highWaterMark: 10 }
);

// Fires every time a new chunk of data is available
readStream.on("data", (chunk) => {
  console.log("New chunk received:");
  console.log(chunk);
});

// Fires when the entire file has been read
readStream.on("end", () => {
  console.log("File reading completed");
});

// Fires if an error occurs (e.g. file not found)
readStream.on("error", (err) => {
  console.error("Error reading file:", err.message);
});