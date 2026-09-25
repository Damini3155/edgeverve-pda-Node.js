# Comprehensive Guide to TypeScript & Configuration

---

## 📌 1. What is TypeScript?

**TypeScript** is an open-source, strongly typed programming language developed by Microsoft. It is a **strict syntactical superset of JavaScript**, meaning any valid JavaScript code is also valid TypeScript code.

### Key Characteristics:
- **Primary Language for Angular**: TypeScript is the standard language used for Angular application development.
- **Type Safety & Tooling**: Offers design-time type safety, static analysis, autocompletion, refactoring tools, and early error detection before runtime.
- **Transpilation Required**: Browsers and JavaScript runtimes (like Node.js) **cannot execute TypeScript directly**.
- **The TypeScript Compiler (`tsc`)**: Translates (transpiles) TypeScript (`.ts`) code into standard JavaScript (`.js`). 

> [!IMPORTANT]
> The TypeScript compiler (`tsc`) only converts `.ts` files into `.js` files. It **does not execute or run** the code itself. The generated `.js` file is executed by Node.js or the browser engine.

---

## ⚙️ 2. Installation & Setup

### Installing TypeScript Globally via npm

To install a specific version of TypeScript (e.g., version `4.5.4`) globally on your system, use the following command:

```bash
npm install --global typescript@4.5.4
```

Alternatively, you can install the latest version:

```bash
npm install -g typescript
```

### Verifying Installation

Verify that the TypeScript compiler (`tsc`) is installed correctly:

```bash
tsc -v
```

---

## 📁 3. TypeScript Configuration (`tsconfig.json`)

A TypeScript workspace (e.g., an Angular or Node.js project) uses a configuration file named **`tsconfig.json`** located at the root of the project.

- Specifies root files and compiler options required to compile the project.
- Angular workspaces contain multiple configuration files where projects inherit base settings from the root `tsconfig.json`.

### Initializing `tsconfig.json`

To generate a default `tsconfig.json` file:

```bash
tsc --init
```

---

## 🎯 4. `include` and `exclude` Options

The `include` and `exclude` properties in `tsconfig.json` specify which files should be compiled by `tsc`.

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "./dist"
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts",
    "dist"
  ]
}
```

### Explanation:
- **`include`**: Specifies an array of filenames, directory paths, or glob patterns to **include** in compilation.
  - Example: `"src/**/*"` includes all files inside the `src` directory and its subdirectories.
- **`exclude`**: Specifies an array of filenames, directory paths, or glob patterns to **skip/ignore** during compilation.
  - Example: `"node_modules"` prevents compilation of external dependencies.
  - Example: `"**/*.spec.ts"` excludes unit test files from the build process.

---

## 🛠️ 5. TypeScript Compiler Options

Below is a detailed list of common compiler options configurable inside `tsconfig.json`:

| Compiler Option | Description | Default Value |
| :--- | :--- | :--- |
| **`allowJs`** | Allows JavaScript (`.js`) files to be compiled alongside TypeScript files. | `false` |
| **`alwaysStrict`** | Parses code in strict mode and emits `"use strict";` at the top of each generated output file. | `false` |
| **`module`** | Specifies the target module system generated code should use (e.g., `"CommonJS"`, `"AMD"`, `"System"`, `"ES6"`, `"ES2015"`, `"ESNext"`). | `CommonJS` (for ES3/ES5 targets), else `ES6` |
| **`target`** | Specifies the ECMAScript target language version for output JS (e.g., `"ES3"`, `"ES5"`, `"ES6"`, `"ES2020"`, `"ESNext"`). | `ES3` |
| **`moduleResolution`** | Determines how TypeScript resolves module imports. Set to `"node"` for Node.js resolution or `"classic"` for older TS strategies. | `classic` (for ES6/AMD/System), else `node` |
| **`sourceMap`** | Generates corresponding `.map` source map files. Source maps assist in debugging TypeScript code directly in developer tools. | `false` |
| **`outDir`** | Specifies the output directory where transpiled `.js` files will be written. | Root folder / same directory as `.ts` |
| **`baseUrl` or `paths`** | Instructs TypeScript where to locate module declaration files and type definitions (`.d.ts`). | N/A |
| **`watch`** | Enables live reload functionality. Automatically re-triggers the compilation process whenever source files change. | `false` |
| **`experimentalDecorators`** | Enables experimental support for ES decorators (widely used in Angular frameworks). | `false` |

---

## 🚀 6. Workflow Example

1. **Write TypeScript Code (`app.ts`)**:
   ```typescript
   let message: string = "Hello, TypeScript!";
   console.log(message);
   ```

2. **Transpile TypeScript to JavaScript**:
   ```bash
   tsc app.ts
   ```
   *Output*: Generates `app.js` in the same directory (or inside `outDir`).

3. **Run the Generated JavaScript**:
   ```bash
   node app.js
   ```
