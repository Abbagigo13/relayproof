
# RelayProof — Database Design

## 1. Database Technology

Primary database: PostgreSQL.

ORM: Prisma.

Development database: Local PostgreSQL on Windows.

Production database: To be selected before deployment.

## 2. Design Principles

- Use UUID identifiers for application entities.
- Store timestamps in UTC.
- Use explicit task and verification states.
- Preserve historical submission records.
- Avoid silently changing committed specifications.
- Keep sensitive data private.
- Store large artifacts and logs outside PostgreSQL when appropriate.

## 3. Planned Models

### User

Represents a RelayProof account.

Fields:

- id
- email
- passwordHash or externalAuthSubject
- displayName
- role
- createdAt
- updatedAt

Authentication implementation must determine the exact identity strategy before this schema is finalized.

### Agent

Represents an AI agent or software submitter.

Fields:

- id
- name
- description
- ownerId
- walletAddress
- agentIdTokenId
- identityStatus
- createdAt
- updatedAt

Agent ID fields remain optional until the actual supported identity standard is verified.

### Task

Represents a software development task.

Fields:

- id
- ownerId
- title
- description
- requirements
- specificationHash
- testSuiteHash
- status
- deadline
- createdAt
- updatedAt

### TaskVersion

Stores immutable or versioned task requirements.

Fields:

- id
- taskId
- version
- specification
- specificationHash
- testSuiteHash
- createdAt

### Submission

Represents an artifact submitted for a task.

Fields:

- id
- taskId
- agentId
- artifactType
- repositoryUrl
- commitHash
- archiveHash
- artifactHash
- status
- createdAt

### VerificationJob

Tracks execution jobs.

Fields:

- id
- submissionId
- queueJobId
- status
- attempt
- runnerVersion
- startedAt
- completedAt
- errorCode
- createdAt

### VerificationResult

Stores execution outcomes.

Fields:

- id
- verificationJobId
- buildStatus
- testStatus
- exitCode
- environmentHash
- reportHash
- summary
- createdAt

### ProofPack

Stores evidence metadata.

Fields:

- id
- submissionId
- verificationResultId
- schemaVersion
- artifactHash
- specificationHash
- testSuiteHash
- reportHash
- signature
- signerKeyId
- storageLocation
- createdAt

### BlockchainTransaction

Stores on-chain references.

Fields:

- id
- taskId
- transactionHash
- chainId
- contractAddress
- eventType
- status
- createdAt

## 4. Relationships

- One User can own multiple Agents.
- One User can create multiple Tasks.
- One Task can have multiple TaskVersions.
- One Task can have multiple Submissions.
- One Agent can create multiple Submissions.
- One Submission can have multiple VerificationJobs.
- One VerificationJob can produce a VerificationResult.
- One VerificationResult can be represented by a ProofPack.
- A Task can have multiple BlockchainTransactions.

## 5. Data Integrity

- Foreign keys must be enforced.
- Task versions must preserve previous commitments.
- Artifact hashes must be validated.
- Verification records must not be silently overwritten.
- Transaction hashes must be unique per applicable chain.
- State transitions must be validated.

## 6. Storage Strategy

PostgreSQL:

- Application records.
- Metadata.
- Task requirements.
- Verification states.
- ProofPack references.

Object storage:

- Source archives when retention is permitted.
- Execution logs.
- Full reports.
- Evidence documents.

Do not store private repository credentials or secrets in ordinary task records.

## 7. Migration Policy

- Use Prisma migrations.
- Commit migrations to Git.
- Review schema changes before applying.
- Never reset a production database to resolve a migration issue.
- Back up important data before destructive migrations.

## 8. Current Status

The database schema is planned.

PostgreSQL and Prisma connection, migrations and models must be implemented and tested before this document is treated as a finalized database specification.
