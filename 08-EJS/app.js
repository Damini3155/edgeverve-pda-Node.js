const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home",{
    name:"Damini"
  });
});
app.get("/student", (req, res) => {
  res.render("student", {
    name: "Damini",
  });
});
app.listen(3001, () => {
  console.log("Server running on port 3001");
});
