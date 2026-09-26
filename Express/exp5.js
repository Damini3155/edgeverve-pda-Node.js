const express = require("express");

const app = express();

const port = 3001;

app.use(express.json());

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

// Get all students
app.get("/students", (req, res) => {
    res.json(students);
});

// Get student by ID
app.get("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(student => student.id === id);

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

