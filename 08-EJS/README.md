# 📘 EJS (Embedded JavaScript Templates)

---

## 1. 🔍 What is EJS?

**EJS (Embedded JavaScript)** is a simple **templating engine** for Node.js that lets you generate **HTML pages dynamically** by embedding JavaScript directly inside your HTML.

Instead of sending plain text or static HTML from your server, EJS lets you:
- Inject **variables** into HTML
- Use **loops** to display lists of data
- Use **conditionals** (`if/else`) inside your HTML

EJS files have the extension **`.ejs`** and live inside a `views/` folder.

```
Normal HTML (static)          EJS Template (dynamic)
─────────────────────         ──────────────────────────
<h1>Hello!</h1>               <h1>Hello, <%= name %>!</h1>
                              → renders as: <h1>Hello, Damini!</h1>
```

---

## 2. ✅ Why is EJS Used?

| Reason | Explanation |
| :--- | :--- |
| **Dynamic HTML** | Render different content based on server data |
| **Simple syntax** | Uses plain JavaScript — no new language to learn |
| **Reusable templates** | One template handles many different responses |
| **Pass data from server** | Send variables, arrays, objects from Express to HTML |
| **Works directly with Express** | Only needs `app.set("view engine", "ejs")` — no extra config |

Without EJS (or any templating engine), you would have to manually build HTML strings in JavaScript — which is messy and hard to maintain.

---

## 3. 🪜 Steps to Set Up and Use EJS

### Step 1: Install EJS

```bash
npm install ejs
```

### Step 2: Set EJS as the view engine in Express

```js
// app.js
const express = require("express");
const app = express();

app.set("view engine", "ejs");
// Express automatically looks for .ejs files in the /views folder
```

### Step 3: Create the `views/` folder and add `.ejs` files

```
08-EJS/
├── views/
│   ├── home.ejs       ← your HTML template
│   └── student.ejs    ← template with loop for list data
└── app.js
```

### Step 4: Write your EJS template (`views/home.ejs`)

```html
<!DOCTYPE html>
<html>
<head><title>Home</title></head>
<body>
  <h1>Welcome, <%= name %>!</h1>
  <p>This page is rendered using EJS.</p>
</body>
</html>
```

### Step 5: Render the template from Express using `res.render()`

```js
app.get("/", (req, res) => {
  res.render("home", { name: "Damini" });
  //           ↑              ↑
  //     template name    data sent to template
});
```

Express automatically looks for `views/home.ejs` and replaces `<%= name %>` with `"Damini"`.

---

## 4. 🏷️ EJS Tag Reference

| Tag | Purpose | Example |
| :--- | :--- | :--- |
| `<%= value %>` | **Output** — renders a variable as HTML | `<%= name %>` → `Damini` |
| `<% code %>` | **Execute** — runs JS logic (no output) | `<% if (isAdmin) { %>` |
| `<%- html %>` | **Unescaped output** — renders raw HTML | `<%- "<b>Bold</b>" %>` |
| `<%# comment %>` | **Comment** — not rendered in output | `<%# This is a comment %>` |

---

## 5. 🔄 Using Loops in EJS (Display a List)

**In Express (`app.js`)**:
```js
const students = [
  { id: 1, name: "Damini", department: "AI&DS" },
  { id: 2, name: "Priya",  department: "ECE" },
];

app.get("/student", (req, res) => {
  res.render("student", { student: students });
});
```

**In EJS template (`views/student.ejs`)**:
```html
<ul>
  <% student.forEach(s => { %>
    <li><%= s.id %> - <%= s.name %> - <%= s.department %></li>
  <% }); %>
</ul>
```

---

## 📂 Files in This Folder

| File | Description |
| :--- | :--- |
| [`app.js`](./app.js) | Express server — sets EJS as view engine, renders templates |
| [`views/home.ejs`](./views/home.ejs) | Home page template — displays a dynamic welcome message |
| [`views/student.ejs`](./views/student.ejs) | Student list template — loops through student array |

---

## ▶️ How to Run

```bash
cd 08-EJS
npm install
node app.js
```

Then open your browser and visit:
- `http://localhost:3001/` — Home page (renders `home.ejs` with name variable)
- `http://localhost:3001/student` — Student list page (renders `student.ejs` with array loop)
