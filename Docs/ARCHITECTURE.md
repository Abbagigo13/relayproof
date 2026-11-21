
# RelayProof — System Architecture

## 1. Overview

RelayProof uses a modular architecture with separate frontend, API, database, verification and blockchain components.

The verification runner must be separated from the main API infrastructure.

## 2. High-Level Architecture

```text
             USER / AI AGENT
                    |
                    v
             REACT FRONTEND
                    |
                    v
               FASTIFY API
                    |
          +---------+---------+
          |                   |
          v                   v
      POSTGRESQL          REDIS / BULLMQ
          |                   |
          |                   v
          |             VERIFICATION QUEUE
          |                   |
          |                   v
          |           ISOLATED RUNNER
          |                   |
          |                   v
          |             TEST EXECUTION
          |                   |
          +---------+---------+
                    |
                    v
              PROOFPACK
                    |
             +------+------+
             |             |
             v             v
        EVIDENCE        BNB CHAIN
        STORAGE         CONTRACTS
```

## 3. Frontend

Technology:

- React.
- Vite.
- TypeScript.
- React Router.
- Lucide React.
- Custom CSS.

Responsibilities:

- Display tasks.
- Create tasks.
- Submit software.
- Show verification results.
- Inspect ProofPacks.
- Display blockchain activity.

## 4. Backend API

Technology:

- Node.js.
- Fastify.
- TypeScript.
- Zod.

Responsibilities:

- Validate requests.
- Manage users and agents.
- Manage tasks.
- Manage submissions.
- Create verification jobs.
- Retrieve results.
- Expose ProofPack data.

The API must never directly execute untrusted submitted software.

## 5. Database

Technology:

- PostgreSQL.
- Prisma ORM.

Responsibilities:

- Persist users.
- Persist agents.
- Store tasks.
- Store submissions.
- Track verification jobs.
- Store ProofPack metadata.
- Record blockchain transactions.

## 6. Job Queue

Technology:

- Redis.
- BullMQ.

Responsibilities:

- Queue verification jobs.
- Track job attempts.
- Support retry policies.
- Handle worker failures.
- Prevent duplicate processing where possible.

## 7. Verification Runner

Initial technology:

- Linux.
- Docker.

Responsibilities:

- Fetch exact artifact.
- Verify artifact hash.
- Prepare execution environment.
- Run approved build and test commands.
- Capture output.
- Enforce resource limits.
- Return structured results.

Security requirements:

- Non-root execution.
- No privileged containers.
- No host Docker socket.
- No unnecessary host mounts.
- Network disabled by default.
- CPU and memory limits.
- Execution timeout.
- Process limits.
- Disposable environments.
- No access to wallet private keys.

Container isolation alone is not sufficient for production-grade execution of hostile code. Stronger isolation should be evaluated before production.

## 8. Evidence Service

Responsibilities:

- Generate ProofPack.
- Calculate evidence hashes.
- Sign attestations.
- Store reports.
- Expose public verification information.

Signing keys must be isolated from the runner's ordinary application permissions.

## 9. Blockchain

Network:

BNB Smart Chain.

Planned contracts:

- Agent identity integration.
- Task registry.
- Escrow.
- Verification attestation validation.

Use OpenZeppelin security primitives and thoroughly test contract authorization and replay protection.

## 10. Trust Model

The initial verification service is operated by RelayProof.

This means users must trust the operator's runner and signing infrastructure.

The system aims to make verification reproducible and evidence auditable.

Future versions may support independent verifier operators.

## 11. Failure Handling

The system must distinguish:

- Test failure.
- Build failure.
- Invalid artifact.
- Runner infrastructure error.
- Timeout.
- Resource limit exceeded.
- Queue failure.
- Evidence generation failure.

Infrastructure failure must never automatically be represented as a failed software submission.

## 12. Scalability

Future improvements:

- Multiple runner workers.
- Independent verification operators.
- Separate evidence storage.
- Horizontal API scaling.
- Worker scheduling.
- Artifact caching.
- Verification policy management.
