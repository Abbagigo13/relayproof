
# RelayProof — Product Requirements Document

**Product:** RelayProof  
**Category:** AI Agent Infrastructure / Software Verification  
**Stage:** Early MVP  
**Initial Market:** Software Engineering  
**Blockchain:** BNB Chain

## 1. Product Overview

RelayProof is an independent software verification platform designed to verify software deliverables produced by AI coding agents and developers.

Instead of trusting an agent's claim that a task is complete, RelayProof independently executes predefined verification checks against the submitted software artifact.

The platform generates a portable evidence document called a ProofPack.

The ProofPack records what was submitted, what was tested, the environment used, and the verification outcome.

## 2. Problem Statement

AI coding agents are increasingly capable of generating and modifying software.

However, there is a major trust problem:

- Agents can claim completion without delivering working software.
- Task owners may lack technical knowledge to inspect submissions.
- Screenshots and completion messages are weak evidence.
- Acceptance criteria may be unclear or change after implementation.
- Software delivery disputes can complicate payment.
- Existing CI reports do not necessarily provide portable, artifact-bound evidence connected to agent identity and task acceptance.

RelayProof introduces an independent verification layer.

## 3. Product Vision

Make every software deliverable carry independently generated evidence.

RelayProof aims to become verification infrastructure for the AI software delivery economy.

## 4. Target Users

### Task Owners

People or organizations assigning software development tasks to AI agents or developers.

### AI Agent Developers

Builders who want to demonstrate that their agents deliver working software.

### Software Developers

Developers who want independent evidence of completed work.

### Agent Platforms

Platforms that want to integrate independent software verification into their workflows.

### Verifier Operators

Organizations that may operate independent verification infrastructure in the future.

## 5. Core Features

### Task Management

- Create software tasks.
- Define acceptance criteria.
- Commit task specifications.
- Define test requirements.
- Manage task lifecycle.

### Agent Management

- Register agents.
- Associate agents with wallet addresses.
- Verify supported Agent ID credentials.
- View submission history.

### Software Submission

- Submit Git repository information.
- Identify exact Git commits.
- Submit source archives.
- Calculate artifact hashes.

### Verification Engine

- Retrieve submitted artifacts.
- Execute predetermined tests.
- Build submitted software.
- Capture logs.
- Record execution environments.
- Produce pass/fail outcomes.

### ProofPack

- Generate structured verification evidence.
- Include artifact and specification hashes.
- Include test results.
- Include environment information.
- Sign verification attestations.
- Support independent evidence inspection.

### Blockchain Integration

- Agent identity verification.
- Task registry.
- Escrow funding.
- Verification attestation validation.
- Conditional settlement.

## 6. MVP Scope

Initial implementation:

- JavaScript and TypeScript projects.
- Manual Git commit submission.
- Task creation.
- Acceptance criteria.
- Verification jobs.
- Docker-based isolated execution.
- ProofPack generation.
- BNB testnet integration.

## 7. Non-Goals

The initial MVP will not:

- Generate software code.
- Guarantee complete software correctness.
- Prove code authorship.
- Claim fully trustless execution.
- Support every programming language.
- Introduce a custom token.
- Implement a complex reputation marketplace.
- Support unrestricted execution of arbitrary software.

## 8. Core User Workflow

1. Task owner creates a task.
2. Acceptance requirements are committed.
3. Agent submits software.
4. RelayProof identifies the exact artifact.
5. Verification job is created.
6. Runner executes the agreed checks.
7. Results are recorded.
8. ProofPack is generated.
9. Task owner reviews evidence.
10. Eligible tasks can proceed to settlement.

## 9. Success Metrics

- Tasks successfully created.
- Submissions successfully processed.
- Verification jobs completed.
- Percentage of jobs producing valid ProofPacks.
- Verification execution failure rate.
- Average verification duration.
- Successful signature validation.
- Successful end-to-end task completion.

## 10. Limitations

Passing tests does not prove universal correctness or absence of vulnerabilities.

The initial RelayProof-operated runner remains a trust assumption.

Evidence must accurately disclose what was tested and what was not tested.

## 11. Future Vision

- Independent verifier operators.
- Developer SDK.
- AI agent integrations.
- MCP integration.
- Multi-language execution.
- Advanced security analysis.
- Reproducible builds.
- Portable agent delivery history.
- More advanced conditional payments.
