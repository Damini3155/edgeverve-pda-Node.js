// Comprehensive RESTful API Implementation for Students
// Supports full CRUD: Create (POST), Read (GET), Update (PUT), Delete (DELETE)

const express = require("express");
const app = express();
const port = 3001;

// Built-in middleware to parse incoming JSON request bodies
app.use(express.json());

// In-memory student dataset
let students = [
  {
    id: 1,
    name: "Damini",
    email: "damini@example.com",
    course: "MERN",
  },
  {
    id: 2,
    name: "Anuja",
    email: "anuja@example.com",
    course: "JAVA",
  },
  {
    id: 3,
    name: "Sunita",
    email: "sunita@example.com",
    course: "AI&DS",
  },
];

// Home / Health-check route
app.get("/", (req, res) => {
  res.json({
    message: "Student REST API is running successfully!",
  });
});

// GET - Retrieve all students (with optional query filter: ?course=...)
app.get("/api/students", (req, res) => {
  const { course } = req.query;

  if (course) {
    const filteredStudents = students.filter(
      (s) => s.course.toLowerCase() === course.toLowerCase()
    );
    return res.status(200).json(filteredStudents);
  }

  res.status(200).json(students);
});

// GET - Retrieve a single student by numeric ID
app.get("/api/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  res.status(200).json(student);
});

// POST - Add a new student
app.post("/api/students", (req, res) => {
  const { name, email, course } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required fields",
    });
  }

  const newStudent = {
    id: students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 1,
    name,
    email,
    course: course || "General",
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT - Update an existing student by ID
app.put("/api/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  const { name, email, course } = req.body;

  // Update only provided fields
  if (name !== undefined) student.name = name;
  if (email !== undefined) student.email = email;
  if (course !== undefined) student.course = course;

  res.status(200).json(student);
});

// DELETE - Remove a student by ID
app.delete("/api/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const studentIndex = students.findIndex((s) => s.id === id);

  if (studentIndex === -1) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  students.splice(studentIndex, 1);
  res.status(200).json({
    message: "Student deleted successfully",
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Student REST API running at http://localhost:${port}`);
});
