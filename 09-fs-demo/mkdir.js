const fs = require("fs");
fs.mkdir("data/newFolder", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Folder created successfully");
});