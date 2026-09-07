---
title: "UC-001: Explore The 3D Scene"
doc_kind: use_case
doc_function: canonical
purpose: Captures the observed visitor flow for viewing and interacting with the scene.
derived_from:
  - ../flows/use-case.md
  - ../product/context.md
  - ../prd/PRD-001-current-baseline.md
  - ../domain/rules.md
status: active
audience: humans_and_agents
---

# UC-001: Explore The 3D Scene

## Goal And Actor

A browser visitor views the animated composition and receives visual feedback from an octahedron.

## Trigger And Preconditions

The visitor opens `/`. The browser must execute JavaScript and WebGL, and the tracked skull assets must be reachable.

## Main Flow

1. The page loads a client-only canvas.
2. The scene displays the rotating skull, lights, and four octahedrons.
3. Pointing at an octahedron changes its opacity.
4. Clicking it toggles its active animation target.

## Alternatives And Exceptions

- `ALT-01` The visitor may only view the continuously animated scene.
- `EX-01` Asset, WebGL, and loading failures have no defined user-facing handling.

## Postconditions And Rules

- Successful interaction changes only ephemeral presentation state for the targeted octahedron.
- No state is persisted or sent to a server.
- `BR-01` Each octahedron owns independent active and hover state.
- `BR-02` Interaction changes presentation only.

## Traceability

| Relation | References |
| --- | --- |
| PRD | `PRD-001` |
| Features / ADR / runbooks | none |
