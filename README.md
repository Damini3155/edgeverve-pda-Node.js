# Node.js & TypeScript Learning Workspace

This repository contains structured practice modules for **Node.js** fundamentals, **JavaScript revision**, module exports/imports, and **TypeScript** configuration.

---

## 📂 Project Structure

```text
-edgeverve-pda-Node.js/
├── 📁 js-basics/             # JavaScript fundamentals & slide exercises
│   ├── datatypes.js          # Loose typing & primitive data types
│   ├── functions.js          # Node.js function definitions & parameters
│   ├── objects.js            # Object creation & typeof operator
│   └── strings.js            # String manipulation & string methods
├── 📁 modules/               # Node.js CommonJS module system examples
│   ├── calc.js               # Exporting math utility functions (add, sub, mult, div)
│   ├── index.js              # Importing and using calc module
│   ├── welcome.js            # Exporting welcome object & properties
│   └── app.js                # Importing and executing welcome module
├── 📁 typescript/            # TypeScript examples & compilation
│   ├── TypeScriptFirst.ts    # TypeScript source code
│   └── TypeScriptFirst.js    # Transpiled JavaScript output
├── 📁 docs/                  # Detailed documentation & guides
│   ├── intonodejs.md         # Comprehensive guide to Node.js runtime & architecture
│   └── typescript.md         # Comprehensive guide to TypeScript & tsconfig options
├── package.json              # Project manifest and execution scripts
└── README.md                 # Workspace documentation
```

---

## 🚀 Running the Examples

You can run any of the scripts directly using `node` or using `npm run`:

### 1. JavaScript Basics (`js-basics/`)
```bash
npm run basics:datatypes   # node js-basics/datatypes.js
npm run basics:functions   # node js-basics/functions.js
npm run basics:objects     # node js-basics/objects.js
npm run basics:strings     # node js-basics/strings.js
```

### 2. Node.js Modules (`modules/`)
```bash
npm run modules:calc      # node modules/index.js
npm run modules:welcome   # node modules/app.js
```

### 3. TypeScript (`typescript/`)
```bash
npm run ts:compile        # tsc typescript/TypeScriptFirst.ts
npm run ts:run            # node typescript/TypeScriptFirst.js
```

---

## 📚 Documentation

- [Intro to Node.js Guide](docs/intonodejs.md)
- [TypeScript & Configuration Options Guide](docs/typescript.md)
