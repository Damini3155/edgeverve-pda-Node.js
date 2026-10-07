const express = require("express");
const app = express();
const db = require("./DB");

app.use(express.json());

app.post("/employees", (req, res) => {
    const { emp_name, department, salary, email } = req.body;

    const query =
        "INSERT INTO employees (emp_name, department, salary, email) VALUES (?, ?, ?, ?)";

    db.query(query, [emp_name, department, salary, email], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.status(201).json({
            message: "Employee inserted successfully",
            employee: result
        });
    });
});

app.get("/employees", (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json(result);
    });
});

app.get("/employees/:id", (req, res) => {
    const id = req.params.id;

    db.query(
        "SELECT * FROM employees WHERE emp_id = ?",
        [id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });

            res.json(result);
        }
    );
});

app.put("/employees/:id", (req, res) => {
    const { emp_name, department, salary, email } = req.body;
    const id = req.params.id;

    const query =
        "UPDATE employees SET emp_name=?, department=?, salary=?, email=? WHERE emp_id=?";

    db.query(
        query,
        [emp_name, department, salary, email, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });

            res.json({
                message: "Employee updated successfully"
            });
        }
    );
});

app.delete("/employees/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM employees WHERE emp_id=?", [id], (err, result) => {
    if (err) return res.send(err);

    res.send("Employee deleted successfully");
  });
});

app.listen(3006, () => {
    console.log("Server is running on port 3006");
});

