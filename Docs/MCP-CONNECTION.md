
# RelayProof — MCP Integration

## 1. Overview

Model Context Protocol (MCP) is a protocol that allows AI applications and agents to interact with external tools and resources through a standardized interface.

RelayProof may expose an MCP server to allow compatible AI agents to create tasks, submit artifacts and retrieve verification evidence.

MCP integration is a planned capability, not currently implemented.

## 2. Why MCP?

RelayProof is designed for AI agent workflows.

An MCP integration could allow agents to interact with RelayProof without requiring every agent platform to implement a separate custom integration.

## 3. Planned MCP Tools

### create_task

Create a software verification task.

### get_task

Retrieve task details.

### submit_artifact

Submit a supported software artifact.

### request_verification

Request execution of the predefined verification checks.

### get_verification_result

Retrieve a verification result.

### get_proofpack

Retrieve a ProofPack.

### verify_proofpack

Check ProofPack integrity and signature information.

These are proposed tool names, not implemented MCP tools.

## 4. Planned Resources

Possible resources:

- Task information.
- Task requirements.
- Submission metadata.
- Verification results.
- ProofPack documents.

## 5. Security Requirements

- Authenticate MCP clients.
- Authorize every operation.
- Validate all tool inputs.
- Restrict private resource access.
- Apply rate limits.
- Never expose signing keys.
- Never allow MCP calls to execute arbitrary host commands.
- Avoid returning private repository content unnecessarily.

## 6. Authentication

MCP authentication must use a secure, supported identity mechanism.

Credentials must be scoped, revocable and protected.

## 7. Integration Architecture

```text
AI AGENT
   |
   v
MCP CLIENT
   |
   v
RELAYPROOF MCP SERVER
   |
   v
RELAYPROOF API
   |
   v
DATABASE / VERIFICATION QUEUE
```

The MCP server should call authorized RelayProof API services rather than bypassing business logic.

## 8. Implementation Roadmap

- [ ] Finalize public API.
- [ ] Define MCP tool schemas.
- [ ] Implement MCP server.
- [ ] Implement authentication.
- [ ] Implement task tools.
- [ ] Implement submission tools.
- [ ] Implement result tools.
- [ ] Add integration tests.
- [ ] Publish integration documentation.

## 9. Important Rule

MCP provides a tool interaction interface. It does not itself make verification trustworthy.

The underlying verification, artifact integrity and evidence-generation systems must remain authoritative.
