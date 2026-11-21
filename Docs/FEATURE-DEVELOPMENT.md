
# RelayProof — Feature Development Guide

## 1. Purpose

This guide defines how new RelayProof features should be planned, implemented and tested.

## 2. Feature Development Lifecycle

1. Define the problem.
2. Write acceptance criteria.
3. Review the architecture.
4. Identify affected modules.
5. Design database changes.
6. Implement backend functionality.
7. Implement frontend functionality.
8. Add tests.
9. Update documentation.
10. Review and merge.

## 3. Task Management Feature

Expected responsibilities:

- Create tasks.
- Retrieve tasks.
- List tasks.
- Update permitted fields.
- Manage task states.
- Version task requirements.

Acceptance criteria:

- Invalid requests are rejected.
- Valid tasks are persisted.
- Task ownership is enforced.
- Specification commitments are recorded.
- State transitions are validated.

## 4. Submission Feature

Expected responsibilities:

- Receive artifact information.
- Validate submission format.
- Associate submission with task.
- Identify exact commit or archive.
- Calculate artifact hash.

Acceptance criteria:

- Unsupported artifact formats are rejected.
- Artifact identity is recorded.
- Submission history is preserved.
- Untrusted code is never executed in the API.

## 5. Verification Feature

Expected responsibilities:

- Create verification job.
- Queue job.
- Execute in isolated environment.
- Capture output.
- Store result.
- Report status.

Acceptance criteria:

- Jobs can be recovered after worker interruption.
- Duplicate execution is controlled.
- Resource limits are enforced.
- Test failures are distinguished from infrastructure errors.

## 6. ProofPack Feature

Expected responsibilities:

- Assemble evidence.
- Calculate hashes.
- Include environment information.
- Record test outcomes.
- Sign attestation.
- Support verification.

Acceptance criteria:

- Artifact hash matches submitted artifact.
- Specification and test commitments match task version.
- Signature validates.
- Report is accessible to authorized users.
- Sensitive information is not exposed.

## 7. Frontend Feature Rules

Every feature must include:

- Loading state.
- Empty state.
- Success state.
- Error state.
- Responsive layout.
- Accessible controls.

## 8. Backend Feature Rules

- Validate requests.
- Validate permissions.
- Handle exceptions.
- Avoid exposing sensitive details.
- Use transactions where necessary.
- Add tests.

## 9. Pull Request Checklist

- [ ] Feature matches requirements.
- [ ] TypeScript passes.
- [ ] Tests pass.
- [ ] No secrets committed.
- [ ] Database migration reviewed.
- [ ] Documentation updated.
- [ ] Existing functionality preserved.

## 10. Definition of Done

A feature is complete only when implementation, validation, testing and documentation are complete.

A visual mockup alone does not count as a completed backend feature.
