// Express.js REST API Example: In-memory CRUD operations for Students
const express = require("express");

const app = express();
const port = 3001;

// Middleware to parse incoming JSON payloads
app.use(express.json());

// In-memory student dataset
let students = [
    {
        id: 1,
        name: "Damini",
        course: "AI&DS"
    },
    {
        id: 2,
        name: "Anuja",
        course: "AI&DS"
    },
    {
        id: 3,
        name: "Sunita",
        course: "AI&DS"
    }
];

// GET: Fetch all students
app.get("/students", (req, res) => {
    res.json(students);
});

// GET: Fetch student by ID with route parameter parsing (:id)
app.get("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
