const fs = require("fs");

fs.writeFileSync("messages.txt", "Hello,from node JS!", "utf8");
console.log("File Created");