const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Node.js Streams Demo - Server is running!");
});

// Stream a PDF file to the client for download
app.get("/download", (req, res) => {
  // Use path.join + __dirname so the path resolves correctly
  // regardless of where you run the node command from
  const filePath = path.join(__dirname, "..", "files", "sample.pdf");

  // Check if the file exists before attempting to stream it
  if (!fs.existsSync(filePath)) {
    return res.status(404).send("File not found");
  }

  // res.download() streams the file to the client as a download
  res.download(filePath, "sample.pdf", (err) => {
    if (err) {
      console.error("Error sending file:", err.message);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});