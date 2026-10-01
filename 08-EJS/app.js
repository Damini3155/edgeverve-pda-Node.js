const express = require("express");

const app = express();

app.set("view engine", "ejs");

const student = [
  {
    id: 1,
    name: "Damini",
    department: "AI&DS",
  },
  {
    id: 2,
    name: "Priya",
    department: "ECE",
  },
];

app.get("/", (req, res) => {
  res.render("home", {
    name: "Damini",
  });
});

app.get("/student", (req, res) => {
  res.render("student", { student: student });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
