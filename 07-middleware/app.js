const express = require("express");
const app = express();

// Import external middleware modules
const logger = require("./logger");
const requestTime = require("./requestTime"); // Fixed: was './requstTime' (typo)
const checkAuth = require("./auth");

// Define inline middleware functions
function firstMiddleware(req, res, next) {
  console.log("First Middleware");
  next();
}

function secondMiddleware(req, res, next) {
  console.log("Second Middleware");
  next();
}

// Register global middleware BEFORE routes so they run for every request
// Order matters: middleware runs top-to-bottom
app.use(logger);          // Logs: timestamp, method, URL
app.use(firstMiddleware); // Logs: "First Middleware"
app.use(secondMiddleware);// Logs: "Second Middleware"
app.use(requestTime);     // Attaches req.requestTime to every request

// Routes
app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

// Route-level middleware: checkAuth runs only for /dashboard
app.get("/dashboard", checkAuth, (req, res) => {
  res.send("Dashboard - Protected Route");
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
