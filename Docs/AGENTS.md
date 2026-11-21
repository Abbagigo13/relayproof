
# RelayProof — AI Agent Development Instructions

This document provides instructions for AI coding assistants and developers working on RelayProof.

## 1. Project Identity

RelayProof is a standalone independent software-verification platform.

Do not confuse it with unrelated projects or repositories.

Core principle:

**Don't trust the submission. Verify the work.**

## 2. Product Context

RelayProof verifies software artifacts submitted by AI coding agents and developers.

The platform:

1. Defines task requirements.
2. Receives software submissions.
3. Executes predetermined verification checks.
4. Records evidence.
5. Generates signed ProofPacks.
6. Can connect eligible outcomes to BNB Chain settlement.

## 3. Technology Stack

Frontend:

- React
- Vite
- TypeScript
- React Router
- Lucide React
- CSS

Backend:

- Node.js
- Fastify
- TypeScript
- Zod

Database:

- PostgreSQL
- Prisma

Jobs:

- Redis
- BullMQ

Verification:

- Linux
- Docker for initial MVP

Blockchain:

- BNB Chain
- Solidity
- Hardhat
- OpenZeppelin
- Viem
- Wagmi

## 4. Coding Rules

- Use TypeScript.
- Prefer modular architecture.
- Keep API routes separate from business logic.
- Validate incoming data.
- Use typed interfaces.
- Handle errors explicitly.
- Avoid unnecessary dependencies.
- Avoid duplicated logic.
- Keep files focused on one responsibility.
- Use environment variables for configuration.

## 5. Frontend Rules

Follow the RelayProof design system:

- Near-black background.
- Graphite surfaces.
- Warm white typography.
- Signal-yellow primary accent.
- Electric-cyan technical accents.
- Verified-green success indicators.

Avoid:

- Generic purple gradients.
- Excessive glow.
- Unnecessary animation.
- Fake statistics.
- Fake verification results.

Use realistic loading, empty, error and success states.

## 6. Backend Rules

- Never execute untrusted code inside the API process.
- Keep database access in appropriate modules.
- Validate all external inputs.
- Use explicit task state transitions.
- Avoid exposing private data.
- Make background jobs recoverable.
- Do not trust client-provided verification outcomes.

## 7. Verification Rules

- Bind evidence to the exact artifact.
- Record the test suite commitment.
- Record environment details.
- Capture execution results.
- Distinguish test failure from infrastructure failure.
- Never claim that passing tests prove complete correctness.

## 8. Security Rules

- Never commit .env files.
- Never expose private keys.
- Never run untrusted code with host privileges.
- Do not mount Docker sockets into submitted-code containers.
- Restrict network access.
- Enforce resource and time limits.
- Keep signing keys isolated.
- Review authorization before modifying escrow logic.

## 9. Documentation Rules

When a feature changes:

1. Update its technical documentation.
2. Update API examples if necessary.
3. Update README progress.
4. Mark the feature complete only after testing.
5. Document known limitations.

## 10. Development Workflow

Before editing:

- Inspect existing files.
- Understand the current implementation.
- Identify dependencies.
- Avoid overwriting working functionality.

After editing:

- Run type checking.
- Run tests.
- Run the build.
- Report modified files.
- Report unresolved issues.

## 11. Important Restrictions

Never invent:

- API endpoints.
- Contract addresses.
- Agent ID standards.
- Successful transaction records.
- Verification results.
- Completed features.

If something is planned, label it planned.

If something is not known, investigate before making assumptions.
