// Express.js is a lightweight web framework for Node.js built on top of the HTTP module.
// It simplifies routing, middleware integration, and request/response handling.

const express = require("express");
const app = express();
const port = 3001;

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to Express.js");
});

// About route
app.get("/about", (req, res) => {
    res.send("About page");
});

// Contact route
app.get("/contact", (req, res) => {
    res.send("Contact page");
});

// JSON API route
app.get("/api/student", (req, res) => {
    res.json({
        id: 1,
        name: "Damini",
        course: "AI&DS"
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
