
# RelayProof — Design System

## 1. Design Direction

### Dark Technical Editorial Brutalism

RelayProof should look like serious verification infrastructure, not a generic SaaS dashboard.

The interface should communicate:

- Technical credibility.
- Security.
- Precision.
- Transparency.
- Evidence.
- Reliability.

Avoid generic purple-gradient SaaS styling.

## 2. Color Palette

| Name | Hex | Usage |
| --- | --- | --- |
| Near Black | #090909 | Main background |
| Graphite | #151515 | Cards and panels |
| Warm White | #F2F0E8 | Main typography |
| Signal Yellow | #E5B93F | Primary actions |
| Electric Cyan | #65DDF2 | Technical information |
| Verified Green | #35C98A | Successful verification |
| Error Red | #E45D5D | Failed verification |
| Muted Grey | #888888 | Secondary information |
| Border | #292929 | Dividers and panels |

## 3. Typography

Primary font:

- Space Grotesk

Technical font:

- DM Mono

Typography rules:

- Large editorial headings.
- Compact technical labels.
- Clear hierarchy.
- Monospace for hashes, IDs, logs and technical values.
- Readable body text.

## 4. UI Principles

### Precision

Every important status must be clearly communicated.

### Evidence First

Show verification results and evidence rather than decorative statistics.

### Technical Clarity

Use diagrams, metadata panels, timelines and structured information.

### Restrained Animation

Use subtle transitions and meaningful loading states.

### Responsive Design

Support desktop, tablet and mobile.

## 5. Public Website

Required sections:

- Navigation.
- Hero.
- Problem statement.
- How RelayProof works.
- ProofPack preview.
- Features.
- Architecture.
- Developer resources.
- FAQ.
- Footer.

## 6. Dashboard Design

The dashboard should feel like a premium technical command center.

Planned pages:

- Overview.
- Task Explorer.
- Create Task.
- Task Details.
- Verification Runs.
- Verification Details.
- ProofPack Explorer.
- Agents.
- Wallet.
- On-chain Activity.
- Settings.
- Developer Hub.

## 7. Dashboard Components

Reusable components:

- Sidebar navigation.
- Top navigation.
- Status badges.
- Task cards.
- Verification timeline.
- Artifact metadata panels.
- Hash display.
- Code/log viewer.
- ProofPack viewer.
- Empty states.
- Loading skeletons.
- Error states.
- Confirmation dialogs.

## 8. Status Design

| Status | Meaning |
| --- | --- |
| CREATED | Task created |
| OPEN | Accepting submissions |
| SUBMITTED | Artifact submitted |
| QUEUED | Verification waiting |
| VERIFYING | Verification running |
| PASSED | Defined checks passed |
| FAILED | One or more defined checks failed |
| ERROR | Infrastructure or execution error |
| SETTLED | Escrow settlement completed |
| REFUNDED | Refund completed |

A technical execution error must not be presented as a normal test failure.

## 9. Documentation Design

Documentation should use:

- Left navigation sidebar.
- Central article area.
- Optional right-side table of contents.
- Search.
- Code examples.
- Copy controls.
- Previous and next navigation.

## 10. Accessibility

- Keyboard navigation.
- Visible focus indicators.
- Sufficient contrast.
- Semantic HTML.
- Accessible form labels.
- Reduced-motion support.

## 11. Design Rule

Never sacrifice usability for visual effects.

The interface must help users understand exactly what happened during verification.
