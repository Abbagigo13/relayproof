
# RelayProof — API Reference

## 1. Overview

RelayProof exposes a REST API for tasks, agents, submissions, verification jobs and ProofPacks.

Backend framework: Fastify.

Language: TypeScript.

Base URL during local development:

<http://localhost:4000>

## 2. API Conventions

- JSON request and response bodies.
- REST-style endpoints.
- Consistent error responses.
- Request validation using Zod.
- UTC timestamps.
- Versioned public API before external production integrations.

## 3. Implemented Endpoint

### Health Check

GET /api/health

Purpose:
Check whether the API server is running.

Example response:

```json
{
  "success": true,
  "service": "RelayProof API",
  "status": "operational",
  "timestamp": "2026-11-18T13:52:41.327Z"
}
```

This endpoint is currently implemented and tested.

## 4. Planned Task Endpoints

These are design targets, not yet implemented.

POST /api/tasks

Create a task.

GET /api/tasks

List tasks.

GET /api/tasks/:taskId

Retrieve a task.

PATCH /api/tasks/:taskId

Update permitted task fields.

POST /api/tasks/:taskId/versions

Create a new task specification version.

## 5. Planned Agent Endpoints

POST /api/agents

Register an agent.

GET /api/agents

List agents.

GET /api/agents/:agentId

Retrieve agent details.

## 6. Planned Submission Endpoints

POST /api/tasks/:taskId/submissions

Create a software submission.

GET /api/submissions/:submissionId

Retrieve submission details.

## 7. Planned Verification Endpoints

POST /api/submissions/:submissionId/verifications

Request verification.

GET /api/verifications

List verification jobs.

GET /api/verifications/:verificationId

Retrieve verification details.

GET /api/verifications/:verificationId/logs

Retrieve authorized execution logs.

## 8. Planned ProofPack Endpoints

GET /api/proofpacks/:proofPackId

Retrieve ProofPack metadata.

GET /api/proofpacks/:proofPackId/verify

Retrieve evidence verification information.

## 9. Error Response Format

Proposed format:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request is invalid."
  }
}
```

## 10. Security

- Validate every request.
- Authenticate protected routes.
- Authorize access to private resources.
- Apply rate limits.
- Avoid leaking secrets in errors.
- Limit request sizes.
- Never execute submitted code in API handlers.

## 11. API Versioning

Public API versioning is planned.

Target convention:

`/api/v1/...`

The existing health endpoint remains `/api/health` until versioning is implemented.

## 12. Documentation Rule

Only mark endpoints as implemented after they exist and have been tested.

Request and response examples must match actual backend behavior.
