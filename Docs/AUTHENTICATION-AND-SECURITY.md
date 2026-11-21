
# RelayProof — Authentication and Security

## 1. Security Objectives

RelayProof handles submitted software artifacts, verification evidence, user information and potentially escrow-related operations.

Security must be part of the architecture from the beginning.

## 2. Authentication

Authentication is planned.

Possible authentication methods:

- Email and password.
- Wallet-based authentication.
- External identity providers.

The final method must be selected before production authentication is implemented.

## 3. Authorization

Authorization must distinguish:

- Task owner.
- Agent owner.
- Authorized submitter.
- Verifier operator.
- Public evidence viewer.
- Platform administrator.

Users must not access private tasks or submissions belonging to other users without authorization.

## 4. Password Security

If passwords are used:

- Never store plaintext passwords.
- Use a modern password hashing algorithm such as Argon2id.
- Apply secure password reset procedures.
- Protect authentication endpoints with rate limits.

## 5. Session Security

- Use secure cookies where applicable.
- Apply HttpOnly.
- Apply Secure in production.
- Use appropriate SameSite settings.
- Rotate sessions when required.
- Support logout and session invalidation.

## 6. API Security

- Validate all input.
- Restrict request sizes.
- Apply rate limiting.
- Configure CORS narrowly.
- Avoid detailed internal errors in public responses.
- Validate resource ownership.
- Protect against common web vulnerabilities.

## 7. Verification Runner Security

Submitted software is untrusted.

The runner must:

- Run as non-root.
- Avoid privileged containers.
- Never mount the host Docker socket.
- Avoid unnecessary host mounts.
- Restrict network access.
- Enforce CPU limits.
- Enforce memory limits.
- Enforce execution timeouts.
- Limit processes and storage.
- Destroy execution environments after use.
- Avoid access to application secrets.

A container is not automatically a complete security boundary. Production should evaluate disposable VMs or stronger isolation.

## 8. Signing Key Security

Verification signing keys must be:

- Stored separately from ordinary application data.
- Access-controlled.
- Rotatable.
- Auditable.
- Protected from submitted-code execution environments.

The runner must not receive escrow administrator private keys.

## 9. Blockchain Security

Smart contracts must include:

- Access control.
- Replay protection.
- Deadline validation.
- Signature validation.
- Reentrancy protection where applicable.
- Safe token handling where applicable.
- Clear escrow state transitions.

## 10. Privacy

Public ProofPacks must not expose:

- Private source code.
- API keys.
- Environment secrets.
- Personal information.
- Private repository credentials.
- Sensitive execution logs.

## 11. Incident Handling

Security incidents must be documented.

Response procedure:

1. Identify the affected component.
2. Restrict further exposure.
3. Preserve relevant evidence.
4. Rotate compromised credentials or keys.
5. Investigate the root cause.
6. Apply remediation.
7. Document the incident.

## 12. Current Status

Authentication and production security controls are planned.

The initial health-check API does not implement user authentication.
