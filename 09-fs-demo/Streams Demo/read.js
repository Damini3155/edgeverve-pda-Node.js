const fs = require("fs");
const path = require("path");
const { pipeline } = require("stream");

const readableStream = fs.createReadStream(path.join(__dirname, "files", "input"));

pipeline(readableStream, process.stdout, (error) => {
    if (error) {
        console.error("Failed to read file:", error.message);
        process.exitCode = 1;
    }
});
