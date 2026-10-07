// A stream allows us to process data piece by piece instead of loading everything into memory once.

// Readable stream, writable stream, duplex stream, transform stream
// Multer is a middleware handling multipart/form-data

const fs = require("fs");
const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const upload = multer({ dest: "uploads/" });
const port = 3000;

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("Node js streams demo");
});

app.get("/download", (req, res) => {
  const filePath = "files/sample.pdf";
  res.download(filePath);
});

app.get("/download-stream", (req, res) => {
  const filePath = "files/sample.pdf";

  const readableStream = fs.createReadStream(filePath);

  readableStream.pipe(res);
});

app.listen(port, () => {
  console.log("Server running on port 3000");
});
