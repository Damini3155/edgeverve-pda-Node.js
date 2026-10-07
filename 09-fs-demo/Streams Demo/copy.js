const fs = require("fs");
const path = require("path");
const { pipeline } = require("stream");

const readableStream = fs.createReadStream(path.join(__dirname, "files", "input"));
const writableStream = fs.createWriteStream(path.join(__dirname, "files", "output.txt"));

pipeline(readableStream, writableStream, (error) => {
    if (error) {
        console.error("Failed to copy file:", error.message);
        process.exitCode = 1;
        return;
    }

    console.log("File copied successfully.");
});
