# 📘 Middleware in Express.js

---

## 1. 🔍 What is Middleware?

**Middleware** is a **function** that runs **between** the moment Express receives an HTTP request and the moment it sends a response back to the client.

Think of it like a **pipeline of checkpoints** — every incoming request passes through each middleware in the order they are registered, before reaching the final route handler.

```
Client Request
     ↓
 [Middleware 1]  →  (e.g., logger)
     ↓
 [Middleware 2]  →  (e.g., auth check)
     ↓
 [Route Handler] →  res.send("Home page")
     ↓
Client Response
```

A middleware function has access to:
- `req` — the request object
- `res` — the response object
- `next` — a function to pass control to the next middleware

---

## 2. ✅ Why is Middleware Used?

Middleware is used to **add reusable logic** that applies to many routes without repeating code inside every route handler.

Instead of writing the same logging, auth, or parsing code in every route, you write it **once** as middleware and register it globally.

| Without Middleware | With Middleware |
| :--- | :--- |
| Repeat auth logic in every route | Write auth once, apply everywhere |
| Manually log every request | Register logger once with `app.use()` |
| Parse JSON in every route handler | Use `express.json()` once |

---

## 3. 🛠️ What Problem Does Middleware Solve?

| Problem | Middleware Solution |
| :--- | :--- |
| **Code duplication** — same logic written in every route | Write once, apply globally with `app.use()` |
| **Authentication** — checking if user is logged in | `checkAuth` middleware blocks unauthorized access |
| **Logging** — tracking every incoming request | `logger` middleware logs method, URL, timestamp |
| **Data parsing** — reading JSON from request body | `express.json()` parses body before route handler runs |
| **Error handling** — catching and formatting errors | Error middleware catches all unhandled errors |

---

## 4. 🪜 Steps: How to Create & Register Middleware

### Step 1: Create a middleware function

```js
function myMiddleware(req, res, next) {
  // Your logic here
  console.log("Middleware running...");
  next(); // MUST call next() to continue the chain
}
```

### Step 2: Export it (if in a separate file)

```js
module.exports = myMiddleware;
```

### Step 3: Import it in your main app file

```js
const myMiddleware = require("./myMiddleware");
```

### Step 4: Register it using `app.use()`

```js
// Global middleware — runs for every request
app.use(myMiddleware);

// Route-level middleware — runs only for a specific route
app.get("/dashboard", myMiddleware, (req, res) => {
  res.send("Dashboard");
});
```

> ⚠️ **IMPORTANT:** Always register `app.use()` middleware **BEFORE** your route definitions, otherwise the middleware will not run for those routes.

---

## 5. ❓ Why Do We Use the `next()` Function?

The `next()` function tells Express:
> **"This middleware is done. Move to the next middleware or route handler."**

Without `next()`, the request gets **stuck** — Express won't move forward and the client will never receive a response (it will just hang/timeout).

```js
// ✅ Correct — chain continues
function logger(req, res, next) {
  console.log(req.method, req.url);
  next(); // passes control to next middleware/route
}

// ❌ Wrong — request gets stuck forever, no response sent
function logger(req, res, next) {
  console.log(req.method, req.url);
  // next is never called!
}
```

**Exception:** If your middleware **sends a response itself** (like a 401 Unauthorized), you should NOT call `next()`:

```js
function checkAuth(req, res, next) {
  const isLoggedIn = false;
  if (isLoggedIn) {
    next(); // logged in → continue to route
  } else {
    res.status(401).send("Unauthorized"); // NOT logged in → stop here
  }
}
```

---

## 6. 📋 General Syntax

```js
// Middleware function signature
function middlewareName(req, res, next) {
  // 1. Do something (log, check auth, parse data, etc.)
  // 2. Either call next() to continue OR send a response to stop
  next();
}
```

| Parameter | Description |
| :--- | :--- |
| `req` | The incoming HTTP request (headers, body, URL, method, etc.) |
| `res` | The outgoing HTTP response (send data back to client) |
| `next` | A function — call it to hand off to the next middleware or route |

---

## 7. 📤 How to Export Middleware

To keep your code clean and organized, define middleware in **separate files** and export them using `module.exports`.

### Creating the middleware file (e.g., `logger.js`)

```js
// logger.js
function logger(req, res, next) {
  const time = new Date().toISOString();
  console.log(`${time} - ${req.method} ${req.url}`);
  next();
}

module.exports = logger; // Export the function
```

### Importing and using it in `app.js`

```js
// app.js
const logger = require("./logger"); // Import

app.use(logger); // Register globally
```

---

## 📂 Files in This Folder

| File | Description |
| :--- | :--- |
| [`app.js`](./app.js) | Main Express app — registers and uses all middleware |
| [`logger.js`](./logger.js) | Logs timestamp, HTTP method, and URL for every request |
| [`requestTime.js`](./requestTime.js) | Attaches current timestamp to `req.requestTime` |
| [`auth.js`](./auth.js) | Route-level auth middleware — blocks unauthorized access |
| [`firstMiddleware.js`](./firstMiddleware.js) | Simple middleware that logs "First Middleware" |

## ▶️ How to Run

```bash
cd 07-middleware
npm install
node app.js
```

Then open your browser and visit:
- `http://localhost:3001/` — Home page (all global middleware runs)
- `http://localhost:3001/about` — About page
- `http://localhost:3001/dashboard` — Protected route (checkAuth middleware runs)
