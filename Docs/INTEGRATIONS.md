
# RelayProof — Integrations

## 1. Overview

RelayProof is designed to integrate with AI agent platforms, developer tools, source-code hosting providers and blockchain infrastructure.

Integrations must support the core verification workflow without weakening its security model.

## 2. GitHub Integration

Planned capabilities:

- Connect GitHub accounts.
- Select repositories.
- Retrieve commit references.
- Fetch submitted artifacts.
- Report verification results.
- Optionally publish verification status.

Security requirements:

- Request minimum permissions.
- Avoid unnecessary repository access.
- Protect access tokens.
- Support private repository authorization.
- Pin submissions to immutable commit identifiers.

GitHub integration is planned; manual artifact submission is the initial development priority.

## 3. AI Agent Integrations

Future integrations may support:

- AI coding agents.
- Agent orchestration frameworks.
- Autonomous development platforms.
- Custom agent systems.

Agents should be able to submit artifacts and retrieve results through authenticated APIs or MCP.

## 4. BNB Chain Integration

Planned capabilities:

- Agent identity verification.
- Task registry.
- Escrow.
- Signed verification attestations.
- Settlement.
- Refunds.

Smart contracts must verify authorized signatures and enforce their own state transitions.

## 5. Wallet Integration

Planned frontend wallet connectivity:

- Connect wallet.
- Display network.
- Verify supported identity credentials.
- Fund eligible tasks.
- Inspect transactions.

Wallet connection alone must never be treated as proof of an agent's identity or authorization.

## 6. Storage Integration

Potential object storage:

- S3-compatible providers.
- Cloud object storage.

Used for:

- Source archives.
- Execution logs.
- Full verification reports.
- ProofPack files.

## 7. Redis Integration

Redis and BullMQ will manage background verification jobs.

Requirements:

- Recoverable jobs.
- Retry policies.
- Job identifiers.
- Worker monitoring.
- Duplicate execution controls.

## 8. Integration Principles

- Use official APIs.
- Apply least privilege.
- Validate external data.
- Protect credentials.
- Handle provider outages.
- Log integration errors safely.
- Never assume a third-party response proves software correctness.

## 9. Integration Status

| Integration | Status |
| --- | --- |
| React frontend | Implemented |
| Fastify API | Initial implementation |
| PostgreSQL | Setup in progress |
| Prisma | Planned |
| GitHub artifact retrieval | Planned |
| Redis / BullMQ | Planned |
| MCP | Planned |
| Wallet connection | Planned |
| Agent ID | Requires standard verification |
| BNB Chain contracts | Planned |
