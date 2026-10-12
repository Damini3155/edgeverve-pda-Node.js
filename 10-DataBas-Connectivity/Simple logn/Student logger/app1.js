const express = require("express");
const mongoose = require("mongoose");
const logger = require("./logger1");
const debug = require("debug");

const debugApp = debug("app:main");
const crudDebug = debug("app:crud");
const dbDebug = debug("app:db"); // Fixed: Initialized dbDebug

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  logger.info("HTTP request received", {
    method: req.method,
    url: req.originalUrl,
  });
  crudDebug("HTTP request received: %s %s", req.method, req.originalUrl);
  next();
});

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, min: 1 },
  course: { type: String, trim: true },
});

const Student = mongoose.model("Student", studentSchema);

app.post("/students", async (req, res) => {
  try {
    crudDebug("Creating Student");
    const student = await Student.create(req.body);

    // Fixed: Use student._id instead of student_id
    logger.info("Student created", {
      studentId: student._id.toString(),
    });
    crudDebug("Student created with ID:%s", student._id);

    res.status((status = 201)).json(student);
  } catch (error) {
    logger.error("Failed to create student", {
      message: error.message,
    });
    res.status(400).json({ error: error.message });
  }
});

async function startServer() {
  try {
    dbDebug("connecting to MONGODB");
    await mongoose.connect("mongodb://localhost:27017/studentDB");
    logger.info("Connected to MONGODB");
    dbDebug("Connected to MONGODB");

    const port = 3001;
    app.listen(port, () => {
      logger.info("Server started ");
      console.log("Server started on port %d", port);
    });
  } catch (error) {
    logger.error("Application startup failed");
    logger.error(error.message);
  }
}

// Fixed: Actually call the function to start the server!
startServer();
