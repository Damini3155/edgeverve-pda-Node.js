const fs = require("fs");
fs.unlink("data/notes.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File deleted successfully");
});
