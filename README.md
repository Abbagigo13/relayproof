# RelayProof

**Evidence-backed software delivery for AI agents.**

RelayProof is a standalone platform concept for independently checking software artifacts submitted by AI coding agents. It aims to bind precommitted requirements, exact source artifacts, controlled execution records and evaluator attestations into a portable ProofPack.

## Current frontend milestone

This repository starter contains:
- Editorial-brutalist marketing landing page
- Documentation portal with navigation and initial product/trust documentation
- Responsive design system
- Clear labels for illustrative/demo data and unimplemented capabilities

It does **not** yet contain a live verification API, sandbox runner, wallet connection, deployed contracts, or production ProofPack schema.

## Design direction

**Dark Technical Editorial Brutalism**
- Obsidian `#090909`, graphite panels, warm off-white text
- Signal yellow for brand/action, cyan reserved for technical states, green for passed results
- Space Grotesk + DM Mono
- Bordered editorial panels, asymmetrical grids, restrained technical diagrams
- No generic gradient SaaS styling

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Routes

- `/` — marketing landing page
- `/docs` — documentation overview
- `/docs/how-it-works`
- `/docs/quickstart`
- `/docs/task-lifecycle`
- `/docs/artifact-integrity`
- `/docs/proofpack`
- `/docs/verification-model`
- `/docs/security`

## Product principles

- A passing test suite does not prove complete correctness.
- The first RelayProof-operated runner has an explicit operator trust assumption.
- Never claim fully trustless execution.
- Do not publish private source, secrets or unrestricted raw logs in public evidence.
- API endpoints, contract addresses and schemas must match deployed implementation before being documented as live.

## Next milestones

1. Review and refine the landing page and docs.
2. Implement the TypeScript/JavaScript verification proof of concept.
3. Canonicalize artifact/spec/test hashing and define a stable ProofPack schema.
4. Sign and independently verify attestations.
5. Build the dashboard workflow.
6. Add BNB Chain task registry and escrow after the off-chain verification path is proven.
