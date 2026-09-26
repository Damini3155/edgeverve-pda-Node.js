const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
    res.send("welcome to Express Js");
});
app.get("/about", (req, res) => {
    res.send("About page");
});
app.get("/contact", (req, res) => {
    res.send("Contat page");
});
app.get("/api/student", (req, res) => {
    res.json({
        id:1,
        name:"Damini",
        course:"AI&DS"
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});