# 🚀 Node.js, Express & TypeScript Learning Journey

Welcome to my structured **Node.js, Express, and TypeScript** backend learning repository! This project documents my day-to-day progression through core JavaScript fundamentals, Node.js runtime mechanics, CommonJS modular architecture, HTTP networking, Express.js web APIs, and TypeScript configuration.

---

## 📂 Project Structure

```text
Node.js (PDA)/
├── 📁 01-js-basics/              # Topic 1: Core JavaScript fundamentals for backend dev
│   ├── datatypes.js              # Loose typing & primitive data types (typeof checks)
│   ├── functions.js              # Function declarations, parameters & return values
│   ├── objects.js                # Object literals, properties & typeof inspection
│   └── strings.js                # String methods, concatenation, split & join
│
├── 📁 02-modules/                # Topic 2: Node.js CommonJS module system
│   ├── calc.js                   # Math operations export module (add, sub, mult, div)
│   ├── calc-demo.js              # Consuming and testing the calc module
│   ├── welcome.js                # Welcome object export module
│   └── welcome-demo.js           # Consuming and executing the welcome module
│
├── 📁 03-http/                   # Topic 3: Node.js core HTTP module (native server)
│   ├── 01-basic-server.js        # Basic server creation using http.createServer()
│   ├── 02-inspect-requests.js    # Inspecting HTTP request method and URL
│   └── 03-http-routing.js        # Native manual route handling with HTTP 404
│
├── 📁 04-express/                # Topic 4: Express.js web framework & basic routing
│   ├── 01-basic-routes.js        # Express routing (GET routes & JSON response)
│   ├── 02-student-api.js         # Basic REST API with route parameters (:id) & error handling
│   ├── package.json              # Express package manifest & scripts
│   └── package-lock.json         # Locked dependency versions
│
├── 📁 05-typescript/             # Topic 5: TypeScript tooling & compilation
│   ├── greeter.ts                # TypeScript source file with static types
│   └── greeter.js                # Transpiled JavaScript output (via tsc)
│
├── 📁 06-rest-api/               # Topic 6: Full CRUD RESTful API & Middleware
│   ├── middleware.js             # Custom request logging application middleware
│   ├── server.js                 # Complete Student REST API (GET, POST, PUT, DELETE)
│   ├── package.json              # REST API dependencies & scripts
│   └── package-lock.json         # Locked dependency versions
│
├── 📁 docs/                      # Theory, architecture notes & GitHub guides
│   ├── intro-to-nodejs.md        # Deep dive into Node.js runtime, V8 & Event Loop
│   ├── typescript.md             # TypeScript compilation and tsconfig options
│   └── daily-git-guide.md        # Step-by-step guide for daily GitHub commits & pushes
│
├── .gitignore                    # Excludes node_modules, .env, and OS metadata from Git
├── package.json                  # Root manifest with npm run scripts for all topics
└── README.md                     # Repository documentation & study roadmap
```

---

## 🗺️ Learning Roadmap & Topics Covered

### 🟢 1. JavaScript Basics (`01-js-basics/`)
- **Primitive Data Types**: Working with `number`, `string`, `boolean`, and `undefined` with dynamic typing.
- **String Operations**: String concatenation (`+` and `.concat()`), splitting, indexing (`charAt`), and joining.
- **Objects**: Creating object literals, accessing nested properties, and data structure inspection.
- **Functions**: Parameterized functions and return statements.

### 🟡 2. CommonJS Modules (`02-modules/`)
- Understanding `module.exports` vs. `exports`.
- Creating custom utility modules (`calc.js`) and importing with `require()`.
- Exporting complex objects containing methods, dates, and configuration values (`welcome.js`).

### 🔵 3. Native HTTP Server (`03-http/`)
- Creating HTTP servers without third-party frameworks using Node's built-in `http` module.
- Handling request headers, methods (`GET`, `POST`), and request URLs (`req.url`).
- Implementing multi-route dispatching (`/`, `/about`, `/contact`) and setting HTTP status codes (`404 Not Found`).

### 🟣 4. Express.js Framework & APIs (`04-express/`)
- Express server configuration and port binding.
- Route handling (`app.get`) with simplified response helpers (`res.send`, `res.json`).
- Parsing incoming JSON payloads with `express.json()` middleware.
- Dynamic route parameters (`req.params.id`) and building in-memory RESTful CRUD endpoints with validation.

### 🔴 5. TypeScript & Transpilation (`05-typescript/`)
- Static type annotations for variables and function signatures.
- Using the TypeScript compiler (`tsc`) to transpile TypeScript code into executable JavaScript.
- Understanding `tsconfig.json` compiler options.

### 🟠 6. RESTful APIs & Middleware (`06-rest-api/`)
- **Express Middleware Lifecycle**: Intercepting requests, logging methods/timestamps, and using `next()`.
- **Full CRUD Endpoints**:
  - `GET /` - Root health check
  - `GET /api/students` - Retrieve all students (supports query filtering: `?course=MERN`)
  - `GET /api/students/:id` - Fetch student by ID with 404 handling
  - `POST /api/students` - Create new student with payload validation and dynamic ID generation (`201 Created`)
  - `PUT /api/students/:id` - Partial and full updates of student records
  - `DELETE /api/students/:id` - Remove student record with confirmation response

---

## ⚡ How to Run the Code

You can run any script directly using `node` or using convenient root `npm run` commands:

### 1. JavaScript Fundamentals
```bash
npm run basics:datatypes    # node 01-js-basics/datatypes.js
npm run basics:functions    # node 01-js-basics/functions.js
npm run basics:objects      # node 01-js-basics/objects.js
npm run basics:strings      # node 01-js-basics/strings.js
```

### 2. CommonJS Modules
```bash
npm run modules:calc        # node 02-modules/calc-demo.js
npm run modules:welcome     # node 02-modules/welcome-demo.js
```

### 3. Native HTTP Server
```bash
npm run http:basic          # node 03-http/01-basic-server.js
npm run http:inspect        # node 03-http/02-inspect-requests.js
npm run http:routes         # node 03-http/03-http-routing.js
```

### 4. Express.js Web Apps & APIs
```bash
npm run express:routes      # node 04-express/01-basic-routes.js
npm run express:students    # node 04-express/02-student-api.js
```

### 5. TypeScript Compilation & Execution
```bash
npm run ts:compile          # tsc 05-typescript/greeter.ts
npm run ts:run              # node 05-typescript/greeter.js
```

### 6. RESTful API & Middleware
```bash
npm run api:middleware      # node 06-rest-api/middleware.js
npm run api:server          # node 06-rest-api/server.js
```

> [!NOTE]
> For `04-express/` and `06-rest-api/`, ensure dependencies are installed if needed:
> ```bash
> cd 06-rest-api
> npm install
> ```

---

## 📤 Daily GitHub Workflow

To push your daily progress to GitHub:

1. **Check Status**:
   ```bash
   git status
   ```
2. **Stage your changes**:
   ```bash
   git add .
   ```
3. **Commit with a descriptive message**:
   ```bash
   git commit -m "feat(rest-api): implement full CRUD endpoints and custom middleware"
   ```
4. **Push to GitHub**:
   ```bash
   git push origin main
   ```

📖 For detailed instructions, first-time setup, and commit message templates, see the **[Daily Git & GitHub Guide](docs/daily-git-guide.md)**.

---

## 📚 Study Guides & References

- 📘 **[Introduction to Node.js Architecture & Event Loop](docs/intro-to-nodejs.md)**
- 📘 **[TypeScript Guide & tsconfig Options](docs/typescript.md)**
- 📘 **[Daily Git Workflow & Commit Guidelines](docs/daily-git-guide.md)**
