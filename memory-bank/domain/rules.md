---
title: Domain Rules
doc_kind: domain
doc_function: canonical
purpose: Owns the stable interaction rules observable in the current scene.
derived_from:
  - model.md
status: active
audience: humans_and_agents
---

# Domain Rules

- `BR-01` Clicking an octahedron toggles only that octahedron's active state.
- `BR-02` Pointer entry marks the targeted octahedron hovered; pointer exit clears it.
- `BR-03` Active and hovered state affect presentation only and are not persisted.
- `BR-04` The skull rotates continuously while its render group is available.

These rules describe observed behavior at commit `b88cbfd`; product authority for preserving them long term is unknown.
