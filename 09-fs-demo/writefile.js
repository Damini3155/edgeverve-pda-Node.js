const fs = require("fs");
fs.writeFile("data/message.txt", "Hello from node JS!", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("File written successfully");
});






