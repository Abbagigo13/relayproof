
# RelayProof — Debugging Guide

## 1. Purpose

This document provides troubleshooting procedures for local development and future production environments.

## 2. Frontend Problems

### Missing dev script

Error:

```text
npm error Missing script: "dev"
```

Solution:

Check the current directory and inspect package.json.

```powershell
Get-Location
Get-Content package.json
npm run
```

Run commands from the actual project directory.

### Port 5173 already in use

Check running processes:

```powershell
netstat -ano | findstr :5173
```

Stop the process only after identifying it.

## 3. Backend Problems

### API does not start

Check:

```powershell
cd backend
npm run
npm run dev
```

Inspect the terminal error.

### Port 4000 already in use

```powershell
netstat -ano | findstr :4000
```

Identify the process before terminating it.

### Health endpoint unavailable

Open:

<http://localhost:4000/api/health>

Confirm the backend server is running.

## 4. PostgreSQL Problems

### PostgreSQL connection refused

Check the Windows service.

```powershell
Get-Service *postgres*
```

Check port:

```powershell
netstat -ano | findstr :5432
```

Confirm:

- PostgreSQL service is running.
- Port is correct.
- Database exists.
- Username is correct.
- Password is correct.

### Database does not exist

Connect through pgAdmin or psql and create it:

```sql
CREATE DATABASE relayproof;
```

## 5. Prisma Problems

### Environment variable missing

Check that backend/.env exists.

Confirm DATABASE_URL is configured.

### Migration failure

Inspect the error before changing the schema.

Do not delete the database or migration history as a first response.

### Client generation problems

Run the version-appropriate Prisma generation command after checking the installed Prisma packages.

## 6. Git Problems

### Remote repository not found

Check:

```powershell
git remote -v
```

Verify:

- Repository exists.
- Owner is correct.
- Repository name is correct.
- GitHub authentication works.

### Unexpected files staged

Check:

```powershell
git status
git diff --cached
```

Never commit `.env`.

## 7. Verification Runner Problems

Potential causes:

- Invalid artifact.
- Missing runtime.
- Unsupported package manager.
- Timeout.
- Memory limit.
- Docker failure.
- Network restriction.
- Worker interruption.

Record the exact error category.

Do not convert infrastructure failures into normal failed-test results.

## 8. Debugging Procedure

For every issue:

1. Capture the exact error.
2. Identify the affected component.
3. Reproduce the issue.
4. Inspect relevant logs.
5. Identify the root cause.
6. Make the smallest safe change.
7. Run the affected test.
8. Run broader regression tests.
9. Update documentation if needed.

## 9. Reporting Bugs

Include:

- Description.
- Steps to reproduce.
- Expected result.
- Actual result.
- Error output.
- Environment.
- Relevant logs.
- Suspected component.

## 10. Important Rule

Never fix an error by blindly deleting project files, dependencies, databases or Git history.

Understand the failure first.
