const fs = require("fs");
fs.writeFile("data/message.txt", "Hello from node JS!", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("File written successfully");
});

fs.appendFile("data/message.txt", "\nHello again from node JS!", (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("File appended successfully");
})

fs.rename("data/message.txt", "data/notes.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("File renamed");
});

fs.unlink("data/notes.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File deleted successfully");
});