
# RelayProof — Project Implementation Plan

## 1. Objective

Build RelayProof as a working independent software-verification platform.

Development must proceed in measurable milestones.

## 2. Phase 1: Project Foundation

Status: Initial foundation completed.

- [x] Create frontend project.
- [x] Build public landing page.
- [x] Build initial documentation interface.
- [x] Initialize Git repository.
- [x] Push initial code.
- [x] Create backend workspace.
- [x] Initialize Fastify.
- [x] Add environment configuration.
- [x] Implement API health check.

## 3. Phase 2: Database Foundation

Status: Next implementation milestone.

- [ ] Install PostgreSQL.
- [ ] Create relayproof database.
- [ ] Configure DATABASE_URL.
- [ ] Install Prisma.
- [ ] Initialize Prisma.
- [ ] Create initial database schema.
- [ ] Run first migration.
- [ ] Test database connection.
- [ ] Implement database access module.

## 4. Phase 3: Core API

- [ ] Implement task module.
- [ ] Implement agent module.
- [ ] Implement submission module.
- [ ] Implement verification module.
- [ ] Add validation.
- [ ] Add error handling.
- [ ] Add pagination.
- [ ] Add authorization.

## 5. Phase 4: Dashboard

- [ ] Build dashboard layout.
- [ ] Build overview.
- [ ] Build Task Explorer.
- [ ] Build Create Task.
- [ ] Build Task Details.
- [ ] Build Verification Runs.
- [ ] Build ProofPack Explorer.
- [ ] Connect frontend to backend.

## 6. Phase 5: Verification Infrastructure

- [ ] Design runner protocol.
- [ ] Build artifact retrieval.
- [ ] Implement artifact hashing.
- [ ] Implement isolated execution.
- [ ] Implement build execution.
- [ ] Implement test execution.
- [ ] Capture execution logs.
- [ ] Add execution limits.
- [ ] Implement job retry behavior.
- [ ] Persist results.

## 7. Phase 6: ProofPack

- [ ] Finalize schema.
- [ ] Generate JSON evidence.
- [ ] Hash report.
- [ ] Sign attestation.
- [ ] Validate signatures.
- [ ] Build public evidence viewer.

## 8. Phase 7: Blockchain

- [ ] Verify Agent ID requirements.
- [ ] Design task registry.
- [ ] Design escrow.
- [ ] Implement attestation validation.
- [ ] Add replay protection.
- [ ] Write contract tests.
- [ ] Deploy to BNB testnet.
- [ ] Integrate frontend wallet.

## 9. Phase 8: End-to-End Testing

- [ ] Create task.
- [ ] Submit artifact.
- [ ] Execute verification.
- [ ] Generate ProofPack.
- [ ] Verify signature.
- [ ] Test failure scenarios.
- [ ] Test settlement.
- [ ] Prepare demonstration.

## 10. Completion Criteria

The MVP is not complete until a user can:

1. Create a task.
2. Submit a supported software artifact.
3. Trigger independent verification.
4. Inspect the actual verification result.
5. Retrieve a valid ProofPack.
6. Verify the ProofPack signature.

Blockchain settlement is an additional milestone and must not be represented as functional until tested.
