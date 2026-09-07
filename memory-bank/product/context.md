---
title: Product Context
doc_kind: product
doc_function: canonical
purpose: Canonical description of the observed fiber-test product baseline.
derived_from:
  - ../dna/governance.md
status: active
audience: humans_and_agents
canonical_for:
  - project_product_context
  - product_problem_space
  - top_level_outcomes
---

# Product Context

`fiber-test` is a browser-based React Three Fiber demonstration. Its single page renders a rotating skull and four interactive octahedrons in a full-viewport WebGL canvas.

The repository does not identify a customer, commercial problem, or current production purpose. Treat the checked-in application as an experiment/demo until the repository owner confirms otherwise.

## Core Product Workflows

- `WF-01` A visitor opens the root page and views the animated 3D scene.
- `WF-02` A visitor hovers over and clicks an octahedron to trigger visual feedback.

The stable interaction is detailed in [`UC-001`](../use-cases/UC-001-explore-scene.md).

## Top-Level Outcomes

No product metrics are documented. Current executable signals are limited to a successful build and a renderable, interactive root page; see [`metrics.md`](metrics.md).

## Product Constraints

- `PCON-01` The observed UI is browser-only and requires client-side WebGL execution.
- `PCON-02` Product audience, supported browsers/devices, accessibility target, and future scope require owner confirmation.

## Sources and Freshness

- `pages/index.tsx` and `components/*.tsx` at commit `b88cbfd` are the canonical implementation evidence.
- `package.json`, `tsconfig.json`, `yarn.lock`, and `now.json` describe the tracked technical baseline.
- Latest default-branch commit: 2020-12-13. Live behavior and continued product intent are unverified.
