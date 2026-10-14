const expresss = require("express");
const helmet = require("helmet");

const app = expresss();

app.use(helmet());
app.use(expresss.urlencoded({ extended: false }));

function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );
}

app.get("/", (req, res) => {
  res.send(`
        <h1>Nodejs Security</h1>
        <p><a href="/unsafe?name=Damini">Unsafe Example</a></p>
        <p><a href="/safe?name=Damini">Safe Example</a></p>
    `);
});

app.get("/unsafe", (req, res) => {
  const name = req.query.name || "Student";

  res.send(`
        <h2>Welcome ${name}</h2>
        <p>This is an unsafe example of XSS attack</p>
        <a href="/">Home</a>
    `);
});

app.get("/safe", (req, res) => {
  const name = escapeHtml(req.query.name || "Student");

  res.send(`
        <h2>Welcome ${name}</h2>
        <p>This is a safe example of XSS prevention</p>
        <a href="/">Home</a>
    `);
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
