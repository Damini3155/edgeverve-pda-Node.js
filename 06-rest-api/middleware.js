// Middleware in Express:
// A function that runs between receiving an HTTP request and sending the response.

const express = require("express");
const app = express();
const port = 3001;

// Custom application-level middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] Middleware executed for: ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware or route handler
});

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Express Middleware Demo!");
});

app.listen(port, () => {
  console.log(`Middleware demo server running at http://localhost:${port}`);
});
