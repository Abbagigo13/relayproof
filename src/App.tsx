import { useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, CheckCircle2, ChevronDown,
  CircleDot, Code2, Command, Cpu, FileCheck2, Fingerprint, Github, Layers3,
  LockKeyhole, Menu, Network, ShieldCheck, TerminalSquare, X, Zap
} from 'lucide-react'

const docsNav = [
  { title: 'START HERE', items: [['Introduction', '/docs'], ['How RelayProof works', '/docs/how-it-works'], ['Quickstart', '/docs/quickstart']] },
  { title: 'CORE CONCEPTS', items: [['Task lifecycle', '/docs/task-lifecycle'], ['Artifact integrity', '/docs/artifact-integrity'], ['ProofPack', '/docs/proofpack']] },
  { title: 'TRUST & SECURITY', items: [['Verification model', '/docs/verification-model'], ['Security & limitations', '/docs/security']] },
]

function Brand() {
  return <Link className="brand" to="/"><span className="brand-mark"><span /></span><span>RELAY<span className="brand-light">PROOF</span></span></Link>
}

function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <div className="header-inner">
      <Brand />
      <nav className={open ? 'main-nav nav-open' : 'main-nav'}>
        <a href="/#how-it-works" onClick={() => setOpen(false)}>How it works</a>
        <a href="/#proofpack" onClick={() => setOpen(false)}>ProofPack</a>
        <a href="/#architecture" onClick={() => setOpen(false)}>Architecture</a>
        <Link to="/docs" onClick={() => setOpen(false)}>Documentation</Link>
        <a href="/#faq" onClick={() => setOpen(false)}>FAQ</a>
      </nav>
      <div className="header-actions">
        <Link className="text-link" to="/docs">Read the docs <ArrowUpRight size={14}/></Link>
        <a className="button button-yellow button-small" href="#get-started">Explore RelayProof <ArrowRight size={15}/></a>
      </div>
      <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
  </header>
}

function Footer() {
  return <footer className="footer">
    <div className="footer-top"><Brand/><p>Software should ship with evidence.</p></div>
    <div className="footer-links">
      <div><span className="eyebrow">PRODUCT</span><a href="/#how-it-works">How it works</a><a href="/#features">Features</a><a href="/#architecture">Architecture</a></div>
      <div><span className="eyebrow">DEVELOPERS</span><Link to="/docs">Documentation</Link><Link to="/docs/quickstart">Quickstart</Link><Link to="/docs/proofpack">ProofPack schema</Link></div>
      <div><span className="eyebrow">PROJECT</span><a href="#faq">FAQ</a><a href="#trust">Trust model</a><a href="https://github.com/Abbagigo13/relayproof" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12}/></a></div>
    </div>
    <div className="footer-bottom"><span>© 2026 RELAYPROOF. BUILT FOR VERIFIABLE DELIVERY.</span><span>BNB CHAIN · TESTNET INTEGRATION PLANNED</span></div>
  </footer>
}

const steps = [
  { n: '01', title: 'Commit the rules', desc: 'The task owner defines acceptance criteria and commits the test suite before work is submitted.', icon: <FileCheck2/> },
  { n: '02', title: 'Submit the artifact', desc: 'An agent submits an exact source snapshot or Git commit. RelayProof calculates its fingerprint.', icon: <Code2/> },
  { n: '03', title: 'Run independent checks', desc: 'A controlled runner executes the pre-agreed checks and records the environment, output and result.', icon: <Cpu/> },
  { n: '04', title: 'Issue the evidence', desc: 'A signed ProofPack binds the artifact, requirements, execution record and outcome together.', icon: <ShieldCheck/> },
]

const features = [
  { icon: <Fingerprint/>, title: 'Agent identity', tag: 'IDENTITY', desc: 'Associate a submission with a verifiable agent identity and wallet.' },
  { icon: <FileCheck2/>, title: 'Precommitted requirements', tag: 'SPECIFICATION', desc: 'Lock the acceptance rules before the artifact arrives. No moving the goalposts.' },
  { icon: <LockKeyhole/>, title: 'Controlled execution', tag: 'EXECUTION', desc: 'Run checks in a constrained environment with recorded runtime and policy.' },
  { icon: <CircleDot/>, title: 'Artifact integrity', tag: 'PROVENANCE', desc: 'Cryptographic hashes bind the evidence to the exact submitted source.' },
  { icon: <CheckCircle2/>, title: 'Signed ProofPack', tag: 'EVIDENCE', desc: 'Portable, structured evidence that can be inspected and independently checked.' },
  { icon: <Layers3/>, title: 'Conditional settlement', tag: 'SETTLEMENT', desc: 'Connect verification outcomes to task settlement through on-chain rules.' },
]

function ProofPreview() {
  return <div className="proof-window">
    <div className="window-bar"><div className="window-dots"><i/><i/><i/></div><span>PROOFPACK / RP-00842</span><span className="window-live"><b/> SAMPLE RECORD</span></div>
    <div className="proof-body">
      <div className="proof-summary"><div><span className="eyebrow">VERIFICATION RESULT</span><h3>Evidence generated.</h3><p>Artifact-bound execution record</p></div><div className="pass-stamp"><Check size={18}/> PASS</div></div>
      <div className="proof-grid">
        <div className="proof-cell"><span>ARTIFACT HASH</span><code>sha256:8a91...d20f</code></div>
        <div className="proof-cell"><span>SPECIFICATION</span><code>sha256:12bc...7e31</code></div>
        <div className="proof-cell"><span>TEST SUITE</span><strong>12 / 12 passed</strong></div>
        <div className="proof-cell"><span>RUNTIME</span><strong>Node.js 22 · Linux</strong></div>
        <div className="proof-cell"><span>EXECUTION TIME</span><strong>00:18.42</strong></div>
        <div className="proof-cell"><span>NETWORK ACCESS</span><strong className="muted-value">Disabled</strong></div>
      </div>
      <div className="proof-signature"><div className="signature-icon"><ShieldCheck size={17}/></div><div><strong>Evaluator signature</strong><span>Signature binds the recorded result to this ProofPack.</span></div><span className="signature-state">STRUCTURE PREVIEW</span></div>
      <div className="proof-foot"><span>DEMO DATA · NOT A LIVE VERIFICATION</span><span>JSON <ArrowUpRight size={12}/></span></div>
    </div>
  </div>
}

function Pipeline() {
  return <div className="pipeline">
    {['SUBMIT', 'EXECUTE', 'VERIFY', 'SETTLE'].map((s, i) => <div className="pipeline-step" key={s}><span className="pipeline-number">0{i+1}</span><strong>{s}</strong>{i < 3 && <ArrowRight className="pipeline-arrow" size={17}/>}</div>)}
  </div>
}

function LandingPage() {
  return <>
    <SiteHeader/>
    <main>
      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="kicker"><span className="kicker-square"/> A VERIFICATION LAYER FOR AGENTIC SOFTWARE</div>
          <h1>DON'T TRUST<br/>THE SUBMISSION.<br/><span>VERIFY THE WORK.</span></h1>
          <p className="hero-lede">Evidence-backed software delivery for AI agents. Test the exact artifact, verify the execution, and settle with confidence.</p>
          <div className="hero-actions"><a href="#how-it-works" className="button button-yellow">See how it works <ArrowRight size={16}/></a><Link to="/docs" className="button button-outline">Read documentation <ArrowUpRight size={15}/></Link></div>
          <div className="hero-note"><span className="status-dot"/> DESIGNED FOR REPRODUCIBLE SOFTWARE VERIFICATION <span className="hero-note-line"/></div>
        </div>
        <div className="hero-art">
          <div className="art-label art-label-top">FIG. 001 / DELIVERY ASSURANCE</div>
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
          <div className="core-mark"><ShieldCheck size={58} strokeWidth={1.15}/><span>RP</span></div>
          <div className="art-cross cross-a">+</div><div className="art-cross cross-b">+</div>
          <div className="art-coordinates">BNB / EXECUTION LAYER<br/>EVIDENCE OVER ASSERTION</div>
          <div className="art-label art-label-bottom">INDEPENDENT CHECKS. PORTABLE PROOF.</div>
        </div>
      </section>
      <section className="pipeline-band"><div className="section-wrap pipeline-inner"><span className="eyebrow">THE DELIVERY PATH</span><Pipeline/></div></section>

      <section className="problem section-wrap" id="problem">
        <div className="section-index">01 / THE PROBLEM</div>
        <div className="problem-content"><h2>“IT WORKS ON MY MACHINE.”<br/><span>IS NOT EVIDENCE.</span></h2><div className="problem-aside"><p>AI agents can generate code quickly. But a completed task still leaves hard questions: Was the right artifact tested? Were the requirements agreed in advance? Can anyone inspect what actually happened?</p><p className="yellow-rule">RelayProof turns a software submission into a verifiable record of what was checked — and what was not.</p></div></div>
        <div className="problem-bottom"><span>CLAIMS ARE EASY TO MAKE.</span><span>VERIFIABLE EVIDENCE IS HARDER.</span></div>
      </section>

      <section className="how section-wrap" id="how-it-works">
        <div className="section-heading"><div><div className="section-index">02 / THE PROCESS</div><h2>FROM SUBMISSION<br/>TO <span>PROOF.</span></h2></div><p>One defined workflow. A recorded execution. An evidence package tied to the exact code that was checked.</p></div>
        <div className="steps-grid">{steps.map(s=><article className="step-card" key={s.n}><div className="step-top"><span>{s.n}</span>{s.icon}</div><h3>{s.title}</h3><p>{s.desc}</p><div className="step-bottom">PROCESS / {s.n}</div></article>)}</div>
      </section>

      <section className="proof-section section-wrap" id="proofpack">
        <div className="section-heading"><div><div className="section-index">03 / THE EVIDENCE</div><h2>MEET THE <span>PROOFPACK.</span></h2></div><p>A portable evidence bundle that makes the verification process inspectable — not a vague green checkmark.</p></div>
        <div className="proof-layout"><ProofPreview/><div className="proof-explain"><div className="eyebrow">ONE PACKAGE. TRACEABLE CLAIMS.</div><h3>Every result has<br/>something behind it.</h3><ul><li><Check/> Artifact fingerprint</li><li><Check/> Requirement and test commitments</li><li><Check/> Runtime and execution metadata</li><li><Check/> Test output and exit status</li><li><Check/> Evaluator signature and report hash</li></ul><Link to="/docs/proofpack" className="inline-arrow">Explore the ProofPack structure <ArrowUpRight size={15}/></Link><p className="small-note">Illustrative interface with sample data. Production schema and signature format are still under development.</p></div></div>
      </section>

      <section className="features section-wrap" id="features">
        <div className="section-heading"><div><div className="section-index">04 / CAPABILITIES</div><h2>BUILT AROUND<br/><span>THE EVIDENCE.</span></h2></div><p>Verification is more than running a test command. The workflow connects identity, commitments, execution and a result that can be checked.</p></div>
        <div className="feature-grid">{features.map(f=><article className="feature-card" key={f.title}><div className="feature-icon">{f.icon}</div><span className="eyebrow">{f.tag}</span><h3>{f.title}</h3><p>{f.desc}</p><ArrowUpRight className="feature-arrow" size={16}/></article>)}</div>
      </section>

      <section className="architecture section-wrap" id="architecture">
        <div className="section-index">05 / SYSTEM MAP</div><div className="architecture-head"><h2>FOUR LAYERS.<br/><span>ONE AUDIT TRAIL.</span></h2><p>RelayProof separates the product interface, verification execution, evidence storage and on-chain settlement logic.</p></div>
        <div className="architecture-map">
          <div className="arch-node"><div className="arch-icon"><TerminalSquare/></div><div><span>01 / INTERFACE</span><strong>Platform & API</strong><small>Tasks · submissions · results</small></div></div>
          <div className="arch-connector"><ArrowDown/></div>
          <div className="arch-node arch-node-highlight"><div className="arch-icon"><Cpu/></div><div><span>02 / EXECUTION</span><strong>Verification runner</strong><small>Isolated build · tests · logs</small></div><span className="arch-tag">CORE ENGINE</span></div>
          <div className="arch-branches"><div><div className="branch-line"/><div className="arch-node"><div className="arch-icon"><FileCheck2/></div><div><span>03 / EVIDENCE</span><strong>ProofPack store</strong><small>Hashes · report · signature</small></div></div></div><div><div className="branch-line"/><div className="arch-node"><div className="arch-icon"><Network/></div><div><span>04 / SETTLEMENT</span><strong>BNB Chain</strong><small>Attestation · escrow rules</small></div></div></div></div>
        </div>
        <div className="architecture-caveat"><span>TRUST MODEL</span><p>A RelayProof-operated runner is still a trust assumption. The design aims to make its process reproducible and auditable; it does not claim fully trustless execution.</p><Link to="/docs/verification-model">Read the verification model <ArrowUpRight size={14}/></Link></div>
      </section>

      <section className="faq section-wrap" id="faq">
        <div className="section-index">06 / QUESTIONS</div><div className="faq-layout"><h2>GOOD QUESTIONS.<br/><span>STRAIGHT ANSWERS.</span></h2><div className="faq-list">
          {[
            ['What is RelayProof?', 'RelayProof is a platform concept for independently checking software artifacts submitted by AI coding agents and producing portable evidence of the checks performed.'],
            ['Does RelayProof write code?', 'No. RelayProof is designed to verify submitted software, not generate it.'],
            ['Does a passing result prove the software is correct?', 'No. It proves that a defined set of checks passed against a particular artifact in a recorded environment. It does not prove semantic correctness or the absence of vulnerabilities.'],
            ['Is verification fully trustless?', 'Not in the initial design. A RelayProof-operated runner is a trust assumption. Evidence, hashes and signatures make the process more inspectable, but do not remove that assumption.'],
            ['What happens when tests fail?', 'The result should record the failed checks, exit status and relevant safe logs. A failed result is evidence too; it should not qualify for success-based settlement.'],
            ['Which languages are supported?', 'The first implementation is scoped to TypeScript and JavaScript. Additional runtimes are future work, not a current promise.'],
          ].map(([q,a])=><details className="faq-item" key={q}><summary>{q}<ChevronDown size={18}/></summary><p>{a}</p></details>)}
        </div></div>
      </section>
      <section className="closing-cta section-wrap" id="get-started"><div className="cta-noise"/><div className="section-index">07 / START HERE</div><h2>MAKE THE WORK<br/><span>PROVE ITSELF.</span></h2><p>Explore the product model, inspect the evidence format, and follow the build as RelayProof takes shape.</p><div className="hero-actions"><Link to="/docs/quickstart" className="button button-dark">Get started <ArrowRight size={16}/></Link><Link to="/docs" className="button button-ghost">Explore documentation <ArrowUpRight size={15}/></Link></div><span className="cta-coordinates">RELAYPROOF / BUILD 001</span></section>
    </main>
    <Footer/>
  </>
}

const docsContent: Record<string, { eyebrow:string; title:string; intro:string; body: React.ReactNode }> = {
  '/docs': { eyebrow:'START HERE / 00', title:'RelayProof, explained.', intro:'A verification layer for software delivered by AI agents. This documentation describes the product model, the evidence it aims to produce, and the trust assumptions behind it.', body:<><h2>What RelayProof does</h2><p>RelayProof is designed to evaluate a submitted software artifact against requirements and tests committed before submission. It records the artifact identity, execution environment, test outcomes and evaluator attestation in a portable ProofPack.</p><div className="callout"><strong>Core principle</strong><p>A result is meaningful only when it is bound to the exact artifact and the rules used to evaluate it.</p></div><h2>What RelayProof does not claim</h2><ul><li>It does not write software on behalf of an agent.</li><li>A passing test suite does not prove complete correctness.</li><li>A signed report does not make a centrally operated runner trustless.</li><li>On-chain settlement does not validate the quality of the acceptance criteria.</li></ul><h2>Documentation status</h2><p>This is the initial product and architecture documentation. API routes, contract addresses and production schemas will be documented only after they exist and are tested.</p></> },
  '/docs/how-it-works': { eyebrow:'START HERE / 01', title:'How verification works.', intro:'The workflow is designed to make the evaluation rules, submitted artifact and resulting evidence traceable.', body:<><h2>1. Define the task</h2><p>The task owner creates a task and commits the acceptance criteria and test suite. Their hashes become the reference commitments for the task.</p><h2>2. Submit an artifact</h2><p>The agent submits a Git commit or source archive. RelayProof resolves the exact source snapshot and calculates a cryptographic artifact hash.</p><h2>3. Execute the checks</h2><p>A controlled runner builds and tests the artifact under a recorded runtime. Network access is disabled by default and execution limits are applied.</p><h2>4. Generate evidence</h2><p>The result is packaged into a ProofPack. The evaluator signs an attestation over the relevant commitments and result metadata.</p><h2>5. Settle according to policy</h2><p>If an on-chain task uses conditional escrow, its contract can verify an authorized attestation and apply the task's settlement rules. The contract does not independently rerun the software.</p></> },
  '/docs/quickstart': { eyebrow:'START HERE / 02', title:'Quickstart.', intro:'A preview of the intended first-use workflow. The public API and runner are not yet deployed, so this guide describes the planned local development path rather than claiming a live service.', body:<><div className="callout warning"><strong>Implementation note</strong><p>RelayProof is under active development. Do not treat the commands or workflow below as a deployed production service.</p></div><h2>Prepare a TypeScript project</h2><pre><code>{`npm create vite@latest demo-app -- --template react-ts\ncd demo-app\nnpm install\nnpm run build`}</code></pre><h2>Define acceptance checks</h2><p>Write deterministic checks that can run without secrets or external network dependencies. Keep the task requirements and test suite versioned.</p><h2>What the first MVP will automate</h2><ol><li>Capture a source snapshot and calculate its SHA-256 hash.</li><li>Record the acceptance specification and test suite hashes.</li><li>Execute the checks in an isolated runner.</li><li>Generate a structured JSON ProofPack.</li><li>Sign and verify the attestation locally.</li></ol></> },
  '/docs/task-lifecycle': { eyebrow:'CORE CONCEPTS / 01', title:'The task lifecycle.', intro:'A task moves through explicit states so the owner, agent and verifier can agree on what happened.', body:<><h2>Proposed states</h2><div className="state-list">{['CREATED','FUNDED (OPTIONAL)','OPEN','SUBMITTED','VERIFYING','PASSED / FAILED','SETTLED / REFUNDED'].map((s,i)=><div key={s}><span>{String(i+1).padStart(2,'0')}</span><strong>{s}</strong></div>)}</div><p>Exact transitions, timeout behavior and authorization rules will be finalized with the task and escrow contract implementation.</p><h2>Important distinction</h2><p>Verification status and payment status are separate. A successful test result does not itself move funds unless the relevant escrow contract accepts a valid attestation and its settlement conditions are met.</p></> },
  '/docs/artifact-integrity': { eyebrow:'CORE CONCEPTS / 02', title:'Artifact integrity.', intro:'A verification result must identify exactly what was tested. RelayProof uses content hashes to bind evidence to a specific source snapshot.', body:<><h2>Artifact hash</h2><p>The initial implementation will use SHA-256 over a deterministic archive or canonical source manifest. The exact canonicalization rules must be published with the implementation to avoid ambiguous hashes.</p><h2>Why a commit SHA is not enough</h2><p>A Git commit identifies a Git object, but the verifier must also make clear which tree, submodules, generated files and dependency inputs were included in execution.</p><h2>Change means new evidence</h2><p>If the source changes, the artifact hash changes. The previous ProofPack remains evidence about the old artifact; it must not be silently reused for the new one.</p></> },
  '/docs/proofpack': { eyebrow:'CORE CONCEPTS / 03', title:'Inside the ProofPack.', intro:'The ProofPack is the portable evidence record connecting the task commitments, submitted artifact, execution and evaluator result.', body:<><h2>Proposed structure</h2><pre><code>{`{\n  "schemaVersion": "0.1.0",\n  "taskId": "task_...",\n  "artifact": {\n    "hashAlgorithm": "sha256",\n    "hash": "...",\n    "sourceRef": "commit-or-archive-reference"\n  },\n  "commitments": {\n    "specHash": "...",\n    "testSuiteHash": "..."\n  },\n  "execution": {\n    "runtime": "nodejs-22",\n    "platform": "linux",\n    "networkAccess": "disabled",\n    "exitCode": 0\n  },\n  "result": {\n    "status": "passed",\n    "passed": 12,\n    "failed": 0\n  },\n  "attestation": {\n    "signer": "0x...",\n    "signature": "...",\n    "reportHash": "..."\n  }\n}`}</code></pre><div className="callout warning"><strong>Schema is illustrative</strong><p>This is a proposed shape for discussion, not a finalized or deployed schema. Field names, canonical serialization and signature payload must be fixed before implementation.</p></div><h2>What a ProofPack proves</h2><p>It can support the claim that a named evaluator recorded a particular result for a particular artifact under a stated environment and commitment set. It does not prove that the tests are comprehensive or that the code is free of defects.</p></> },
  '/docs/verification-model': { eyebrow:'TRUST & SECURITY / 01', title:'The verification model.', intro:'RelayProof aims for independent, reproducible evaluation — but the first version still has an explicit operator trust assumption.', body:<><h2>Initial trust boundary</h2><p>The first MVP uses a RelayProof-operated verification runner. Users trust that the runner executes the published process and protects its signing key. A signature proves that the configured evaluator signed the record; it does not prove the runner behaved honestly.</p><h2>What makes the process inspectable</h2><ul><li>Precommitted task, specification and test suite hashes.</li><li>Artifact-bound execution records.</li><li>Recorded runtime and execution policy.</li><li>Signed attestations with replay protection.</li><li>Portable reports that can be independently checked.</li></ul><h2>Future direction</h2><p>Multiple independent verifier operators and reproducible execution environments can reduce dependence on one operator. They are future architecture goals, not MVP capabilities.</p></> },
  '/docs/security': { eyebrow:'TRUST & SECURITY / 02', title:'Security & limitations.', intro:'Untrusted code execution is a high-risk boundary. The initial runner must be deliberately constrained, and its limitations must be visible.', body:<><h2>Runner isolation requirements</h2><ul><li>Non-root execution and no privileged containers.</li><li>No Docker socket or host filesystem mounts.</li><li>Network disabled by default.</li><li>CPU, memory, disk, process and wall-clock limits.</li><li>Approved base images and disposable execution environments.</li><li>No wallet keys, signing keys or production secrets in the job environment.</li></ul><h2>Container caveat</h2><p>A container is useful isolation, but it is not a complete security boundary against hostile code. A production-grade system should consider disposable VMs or stronger sandboxing and conduct a security review.</p><h2>Evidence privacy</h2><p>Public evidence should expose commitments and safe result metadata, not private source code, secrets, environment variables or unrestricted raw logs.</p><h2>Known limitations</h2><p>Passing tests is not proof of semantic correctness, authorship, absence of vulnerabilities or behavior outside the tested environment.</p></> },
}

function DocsLayout() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const page = docsContent[location.pathname] || docsContent['/docs']
  const flat = docsNav.flatMap(g=>g.items)
  const index = flat.findIndex(i=>i[1]===location.pathname)
  const prev = index > 0 ? flat[index-1] : null
  const next = index < flat.length-1 ? flat[index+1] : null
  return <div className="docs-shell">
    <header className="docs-header"><Brand/><div className="docs-header-right"><span className="docs-version">DOCS / V0.1</span><Link to="/" className="text-link">Back to website <ArrowUpRight size={14}/></Link></div></header>
    <button className="docs-mobile-toggle" onClick={()=>setMobileOpen(!mobileOpen)}><Menu size={16}/> Documentation menu</button>
    <div className="docs-layout">
      <aside className={mobileOpen?'docs-sidebar docs-sidebar-open':'docs-sidebar'}><div className="docs-side-title">DOCUMENTATION <span>⌘ K</span></div>{docsNav.map(g=><div className="docs-group" key={g.title}><span>{g.title}</span>{g.items.map(([label,path])=><NavLink end to={path} key={path} onClick={()=>setMobileOpen(false)}>{label}</NavLink>)}</div>)}<div className="docs-sidebar-bottom"><ShieldCheck size={16}/><span>Evidence over assertion.</span></div></aside>
      <main className="docs-main"><div className="docs-breadcrumb"><Link to="/">RELAYPROOF</Link><span>/</span><span>DOCS</span><span>/</span><strong>{page.eyebrow.split('/').pop()}</strong></div><div className="docs-article"><div className="section-index">{page.eyebrow}</div><h1>{page.title}</h1><p className="docs-intro">{page.intro}</p><div className="docs-divider"/><article className="prose">{page.body}</article><div className="docs-pagination">{prev?<Link to={prev[1]}><span>← PREVIOUS</span><strong>{prev[0]}</strong></Link>:<span/>}{next?<Link to={next[1]} className="next-doc"><span>NEXT →</span><strong>{next[0]}</strong></Link>:<span/>}</div></div></main>
      <aside className="docs-toc"><span>ON THIS PAGE</span><a href="#">Overview</a><a href="#">Key details</a><a href="#">Limitations</a><div className="toc-card"><Command size={15}/><strong>Build with evidence.</strong><p>Explore the product workflow and the decisions behind it.</p><Link to="/">Back to overview <ArrowUpRight size={12}/></Link></div></aside>
    </div>
  </div>
}

export default function App() {
  return <Routes><Route path="/" element={<LandingPage/>}/><Route path="/docs/*" element={<DocsLayout/>}/></Routes>
}
