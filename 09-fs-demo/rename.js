const fs = require("fs");
fs.rename("data/message.txt", "data/notes.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("File renamed");
});