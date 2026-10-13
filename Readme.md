 # GitHub Repository Setup

Use these commands to create a new local Git repository, add a `README.md` file, and push it to GitHub.

```bash
echo "# Task-" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/shreyanshgupta1098-debug/Task-.git
git push -u origin main
```

## Push an Existing Repository

Use these commands if the repository already exists on your computer:

```bash
git remote add origin https://github.com/shreyanshgupta1098-debug/Task-.git
git branch -M main
git push -u origin main
```
