---
title: "PRD-001: Current fiber-test Baseline"
doc_kind: prd
doc_function: canonical
purpose: Governs the observed product scope, users, risks, and unknowns at adoption.
derived_from:
  - ../product/context.md
  - ../product/customers.md
  - ../product/metrics.md
  - ../domain/rules.md
status: draft
audience: humans_and_agents
---

# PRD-001: Current fiber-test Baseline

## Problem

The repository implements a small 3D browser demonstration but had no durable product documentation. Its current purpose cannot be reconstructed beyond observable behavior, and the default branch has not changed since 2020.

## Users And Jobs

| User | Job | Known pain |
| --- | --- | --- |
| Browser visitor; profile unknown | View the scene and interact with octahedrons | Not documented |
| Repository maintainer; role unknown | Understand and safely change the demo | Context, checks, supported runtime, and release procedure were undocumented |

## Goals

- `G-01` Preserve an evidence-backed description of the checked-in baseline.
- `G-02` Make confirmed behavior, operational gaps, and freshness limits explicit.

## Non-Goals

- `NG-01` No dependency modernization or runtime changes during adoption.
- `NG-02` Do not invent customers, deployment state, roadmap, or success targets.

## Scope And Rules

In scope: the single client-rendered scene, continuous skull rotation, four independently interactive octahedrons, and existing local commands. New features, deployment changes, analytics, authentication, persistence, APIs, and test-stack selection are out of scope.

- `BR-01` The scene loads only in the browser.
- `BR-02` Each octahedron toggles its own active state on click.
- `BR-03` Hover affects only the targeted octahedron's presentation.

## Success Signals

| ID | Signal | Baseline | Target | Method |
| --- | --- | --- | --- | --- |
| `MET-01` | Production build | Fails on Node.js 24.19.0; diagnostic legacy-provider build passes | Successful exit on a pinned supported runtime without compatibility overrides | `yarn build` |
| `MET-02` | Scene interaction | No automation | Owner to define | Browser smoke check |

## Evidence And Freshness

High-confidence facts come from the tracked code, assets, manifests, configuration, and Git history at `b88cbfd`. The demo/experiment classification has Medium confidence. The latest default-branch commit is 2020-12-13, so live deployment and present-day compatibility are unknown. Detailed provenance remains in repository-root `brownfield-intake-prd.md` as historical adoption evidence.

## Risks And Open Questions

- `RISK-01` Old dependencies may not run on current Node.js or browsers.
- `RISK-02` No automated checks protect rendering, assets, or interaction.
- `RISK-03` The multi-megabyte asset has no loading/error UX or performance budget.
- `OQ-01` What are the current purpose, audience, and lifetime?
- `OQ-02` Which runtime, devices, browsers, and deployment platform are supported?
- `OQ-03` Who owns releases, dependencies, asset licensing, and Memory Bank maintenance?

## Downstream Features

None. Adoption does not authorize product delivery work.
