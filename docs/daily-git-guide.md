# 🚀 Daily Git & GitHub Workflow Guide

A practical, step-by-step guide for committing and pushing your daily learning topics to GitHub with clean history.

---

## 📌 1. One-Time Setup (First Time Only)

If you haven't linked this local project to GitHub yet, follow these steps:

### Step 1.1: Initialize Git
Open your terminal in the project root (`Node.js (PDA)`):
```bash
git init
```

### Step 1.2: Check Status
Verify that `.gitignore` is working (make sure `node_modules` is **not** listed):
```bash
git status
```

### Step 1.3: Create Initial Commit
```bash
git add .
git commit -m "chore: initial commit - organized node.js learning workspace"
```

### Step 1.4: Rename Branch to `main`
```bash
git branch -M main
```

### Step 1.5: Create a Repository on GitHub
1. Go to [GitHub](https://github.com) and click **New Repository**.
2. Name it (for example: `nodejs-learning-journey` or `edgeverve-node-pda`).
3. **Do not** initialize with README, `.gitignore`, or license (we already created them locally).
4. Click **Create repository**.

### Step 1.6: Connect Local Repo to GitHub & Push
Copy the remote URL from your GitHub page:
```bash
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

---

## 📅 2. Daily Workflow (Pushing Topics Daily)

Whenever you finish working on a topic or at the end of every study session:

### Step 1: Check what changed
```bash
git status
```

### Step 2: Stage changes
Stage all changes in the project:
```bash
git add .
```
*Or stage only a specific folder you worked on:*
```bash
git add 04-express/
```

### Step 3: Commit with a meaningful message
Follow the **Conventional Commit** format:
```bash
git commit -m "feat(topic): short description of what you learned"
```

#### Example Commit Messages for Daily Progress:
| Topic | Commit Message Example |
| :--- | :--- |
| **JS Basics** | `git commit -m "feat(js-basics): add datatypes, functions, objects, and strings practice"` |
| **Modules** | `git commit -m "feat(modules): implement CommonJS calc and welcome export/import demos"` |
| **HTTP** | `git commit -m "feat(http): build core http server, inspect headers and handle routes"` |
| **Express Basics** | `git commit -m "feat(express): implement GET routing and student JSON API"` |
| **Express API** | `git commit -m "feat(express): add student REST API with route parameters and 404 handler"` |
| **TypeScript** | `git commit -m "feat(typescript): configure tsc compilation and greeter demo"` |
| **Documentation** | `git commit -m "docs: update daily learning log and README"` |

### Step 4: Push to GitHub
```bash
git push
```

---

## 💡 3. Daily Learning Routine Best Practices

1. **Commit Small, Commit Often**: Commit after each completed file or concept rather than waiting until the end of the week.
2. **Never Commit `node_modules`**: The `.gitignore` file at the root already protects you. If you ever see `node_modules` in `git status`, do not proceed until verifying `.gitignore`.
3. **Write Meaningful Messages**: A commit message like `feat(express): add route params validation` looks 10x more professional to hiring managers than `update` or `done`.
4. **Keep README Updated**: Update the Progress Tracker in `README.md` before committing your day's work.

---

## 🛠️ 4. Quick Command Cheat Sheet

```bash
git status                  # View modified and untracked files
git log --oneline -n 5      # View the last 5 commits concisely
git diff                    # Inspect unstaged changes
git restore <file>          # Discard changes to a local file
```
