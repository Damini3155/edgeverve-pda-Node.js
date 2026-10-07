fs.appendFile("data/message.txt", "\nHello again from node JS!", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File appended successfully");
});
