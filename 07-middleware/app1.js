const express = require("express");
const app = express();
const logger = require("./logger");
const requestTime = require("./requstTime");
const firstMiddleware = require("./firstMiddleware");
const checkAuth = require("./auth");


app.use(logger);
app.use(firstMiddleware);
app.use(requestTime);
app.use(checkAuth);
const checkAuth = require("./auth");
app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(3001, () => {
  console.log("serever runnint on port 3001");
});
