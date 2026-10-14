import express from "express";
import jwt from "jsonwebtoken";
const app = express();
const port = 3001;
app.use(express.json());

const jWT_SECRET = "secretkey123";

const user = {
  id: 1,
  username: "admin",
  password: "pass123",
};

app.get("/", (req, res) => {
  res.send("JWT authentication server running ");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username !== user.username || password !== user.password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    jWT_SECRET,
    { expiresIn: "1h" },
  );
  res.json({ message: "Login successful", token });
});

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Access denied" });
  }
  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, jWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
}

// Added verifyToken middleware here
app.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "Profile Accessed",
    user: req.user,
  });
});

app.listen(port, () => {
  console.log("Server started");
});
