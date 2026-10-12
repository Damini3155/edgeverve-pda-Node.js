const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Welcome",
  });
});
app.get("/students/:id", async (req, res, next) => {
  const id = req.params.id;
  debugger;
  const student = await findStudent(id);
  res.json(student);
});
app.get("/students", (req, res) => {
  throw new Error("unable to fetch students");
});
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});
app.use((error, req, res, next) => {
  console.log(error.stack);
  res.status(500).json({
    message: "Internal Server Error",
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

