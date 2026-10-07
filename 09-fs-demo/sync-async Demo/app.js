const fs = require("fs");

// fs.writeFileSync("messages.txt", "Hello,from node JS!", "utf8");
// console.log("File Created");

// console.log("1");
// const data = fs.readFileSync("messages.txt", "utf8");
// console.log(data);
// console.log("2");
// console.log("File read successfully");

fs.writeFile("student.txt", "Name: Rahul", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("File created");

  fs.readFile("student.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("File content :");
    console.log(data);
  });
});