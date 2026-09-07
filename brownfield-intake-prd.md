# Brownfield Intake PRD: fiber-test

## Status and evidence policy

- Status: temporary intake for Memory Bank adoption.
- Evidence cutoff: repository state at `b88cbfd66bd18fc4e6a792757a4a37d2bcb9c76d` (2020-12-13).
- Repository owner: `Acerbic`, inferred from the GitHub repository URL; ongoing product and operational ownership is otherwise unknown.
- Confidence labels: High means directly observable in tracked sources; Medium means a narrow inference from multiple tracked sources; Low is not promoted to a project fact.
- Freshness concern: the latest commit on the default branch is from 2020, so runtime, deployment, and dependency facts describe the checked-in baseline and are not evidence of current production behavior.

## Current product problem and users

The repository contains a single-page browser demonstration of React Three Fiber. It renders a rotating skull and four interactive octahedrons in a full-viewport Three.js canvas. Clicking an octahedron changes its scale, position, rotation, and color; pointer hover changes opacity. (Sources: `pages/index.tsx`, `components/SceneCanvas.tsx`, `components/Skull.tsx`, `components/Octahedron.tsx`; confidence: High; owner: Unknown.)

The intended user is not documented. The code and package name suggest an experiment or technology demonstration rather than a defined customer-facing product. (Sources: `package.json` name `my-app`, repository name, minimal UI; confidence: Medium; owner: Unknown.)

### User jobs

- View the composite 3D scene in a browser. (Source: `pages/index.tsx`; confidence: High.)
- Interact with octahedrons by clicking and hovering. (Sources: on-screen copy in `pages/index.tsx`, handlers in `components/Octahedron.tsx`; confidence: High.)

## Goals, non-goals, and scope

### Observed goals

- Demonstrate client-side rendering with React Three Fiber and Three.js. (Sources: dependency manifest and component imports; confidence: High.)
- Load and continuously rotate a tracked glTF skull asset. (Sources: `components/Skull.tsx`, `static/skull/scene.gltf`; confidence: High.)
- Animate octahedron interaction with React Spring. (Sources: `components/Octahedron.tsx`, `package.json`; confidence: High.)

### Non-goals

No explicit non-goals are documented. Authentication, persistence, APIs, multi-page navigation, accessibility targets, analytics, and server-side domain behavior are absent from the tracked implementation; absence is not evidence that they are permanently out of scope. (Sources: complete tracked-file inventory; confidence: High for absence, owner: Unknown.)

### Adaptation scope

Document the current repository baseline, local commands, architecture, browser interaction contracts, assets, and known delivery gaps. Do not add product features, modernize dependencies, or infer a production operating model as part of Memory Bank adoption.

## Success signals

No product metrics, SLOs, analytics, or acceptance criteria are documented. The narrow executable signals available from the repository are:

- `yarn dev` starts the Next.js development server. (Source: `package.json`; confidence: High as configured, not yet runtime-verified.)
- `yarn build` produces a Next.js production build. (Source: `package.json`; confidence: High as configured, not yet runtime-verified.)
- The root page renders without server-side loading of the canvas because `SceneCanvas` is imported with `ssr: false`. (Source: `pages/index.tsx`; confidence: High.)

## Inventory

### Runtime modules and boundaries

- `pages/index.tsx`: the only page; owns viewport styling, instruction text, and client-only loading of the scene. (High.)
- `components/SceneCanvas.tsx`: composes the canvas, ambient and point lights, skull, and four octahedrons. (High.)
- `components/Skull.tsx`: loads `/static/skull/scene.gltf` with `GLTFLoader` and rotates the group on each render frame. (High.)
- `components/Octahedron.tsx`: owns local active/hover state and spring-driven geometry/material animation. (High.)
- `components/CanvasOctahedron.tsx`: standalone canvas wrapper for one octahedron; no tracked module imports it. (High.)
- `static/skull/`: glTF scene, binary geometry payload, and base-color/normal textures. (High.)

### Technology and dependencies

- Next.js 9.3.2, React/React DOM 16.9.0, React Three Fiber 2.4.3, Three.js 0.108.0, React Spring 8, and TypeScript 3.6.3. (Source: `package.json`; High.)
- Yarn lockfile is tracked; no `packageManager` field or Node/Yarn version is pinned. (Sources: `yarn.lock`, `package.json`; High.)
- TypeScript permits JavaScript, skips library checking, and has `strict: false`; compilation emits no files. (Source: `tsconfig.json`; High.)

### UI and browser contracts

- One full-viewport black page with a gray instruction overlay and WebGL canvas. (Source: `pages/index.tsx`; High.)
- Four octahedrons are positioned at the four combinations of x/y ±2; the skull is centered and scaled by 2. (Source: `components/SceneCanvas.tsx`; High.)
- Octahedron click toggles an active animation; hover toggles material opacity. Keyboard and touch-specific interaction contracts are not documented. (Source: `components/Octahedron.tsx`; High.)

### External integrations and data

- Runtime asset loading is local from the tracked `static/skull` path. (Source: `components/Skull.tsx`; High.)
- No API clients, databases, queues, webhooks, scheduled jobs, authentication, or server endpoints are present in tracked sources. (Complete tracked-file inventory; High for absence.)
- Some component comments attribute the example to a CodeSandbox URL. (Source: component headers; High.)

### Configuration, delivery, and operations

- Available commands are `dev`, `build`, and `start`; there are no test, lint, or type-check scripts. (Source: `package.json`; High.)
- `now.json` declares a public version-2 deployment named `fiber-test`, consistent with the historical ZEIT Now platform. Whether any deployment still exists or this config remains valid is Unknown. (Source: `now.json`; High for tracked configuration, Unknown for live state.)
- No CI/CD workflows, environment examples, health checks, observability, alerts, rollback instructions, migrations, or runbooks are tracked. (Complete tracked-file inventory; High for absence.)
- `.env*` is ignored; no required environment variables are referenced by the source. (Sources: `.gitignore`, source search; High.)

### Existing documentation and decisions

- No README, repository instructions, docs, ADRs, or runbooks are tracked on the default branch. (Complete tracked-file inventory; High.)
- Git history indicates an initial experiment in September 2019 and dependency bumps through December 2020. Commit messages are the only historical rationale and do not establish durable architecture decisions. (Source: Git history; High.)

## Risks and technical debt

- Dependency versions and the default branch are old; compatibility with supported Node.js/browser versions and current hosting is unverified. (Manifest plus Git timestamps; High.)
- No automated checks protect rendering, asset loading, interaction, or builds. (Manifest/file inventory; High.)
- `Skull` assumes the loader result is array-like and references legacy React Three Fiber APIs; runtime behavior needs verification with the locked dependency graph. (Source: `components/Skull.tsx`; Medium risk assessment.)
- The 3D asset payload is several megabytes and no performance budget or loading/error UI is defined. (Tracked asset sizes and UI sources; High for facts, Medium for impact.)
- Accessibility behavior, supported browsers/devices, licensing/provenance of the skull asset, and security/update ownership are undocumented. (Inventory; High for absence.)

## Assumptions, conflicts, and open questions

### Assumptions retained as assumptions

- This is an experimental/demo repository, based on naming, UI copy, and lack of broader product infrastructure. Owner confirmation is required.
- Yarn is the intended package manager because `yarn.lock` is tracked. Owner confirmation is required.

### Conflicts

- No direct source conflicts were found.

### Open questions

- What current product purpose, audience, and expected lifetime does the repository have? Owner: repository owner.
- Should the application still be deployable, and if so to which platform/environment? Owner: repository owner.
- Which Node.js, Yarn, browsers, and devices are supported? Owner: repository owner.
- Is the skull asset licensed for the intended use, and where is provenance recorded? Owner: repository owner.
- Are dependency modernization, automated testing, accessibility, and performance work desired follow-ups? Owner: repository owner.
- Who owns releases, incident response, and Memory Bank maintenance? Owner: repository owner.

## Intentionally unadapted evidence

- Dependabot branches were observed but are not treated as merged project state.
- Live GitHub settings, issues, pull requests, deployments, branch protection, secrets, and external hosting state were not available through the checked-out repository.
- No delivery epic, feature package, implementation plan, or historical ADR is created because existing evidence does not require one.
