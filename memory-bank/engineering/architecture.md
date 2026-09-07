---
title: Architecture
doc_kind: engineering
doc_function: canonical
purpose: Canonical map of the checked-in fiber-test architecture and boundaries.
derived_from:
  - ../dna/governance.md
  - ../domain/context-map.md
status: active
audience: humans_and_agents
---

# Architecture

## System Shape

`fiber-test` is a single-page Next.js application. `pages/index.tsx` is the sole route and dynamically loads `SceneCanvas` with SSR disabled. React Three Fiber owns the WebGL canvas; Three.js supplies geometry, color, and glTF loading; React Spring animates octahedron properties.

## Module Boundaries

| Module | Responsibility |
| --- | --- |
| `pages/index.tsx` | Page layout, global styling, instruction overlay, client-only scene boundary |
| `components/SceneCanvas.tsx` | Canvas, lighting, and scene composition |
| `components/Skull.tsx` | glTF loading and per-frame skull rotation |
| `components/Octahedron.tsx` | Independent pointer state and spring animation |
| `components/CanvasOctahedron.tsx` | Unreferenced standalone single-octahedron canvas |
| `static/skull/` | glTF, binary, and texture assets |

## Data and Integrations

All observed state is in-memory React component state. There is no server API, database, cache, authentication, background worker, or external runtime integration.

## Constraints and Risks

- Dependencies target a 2019–2020 ecosystem and compatibility with current Node.js/browsers is unverified.
- Asset loading and React Three Fiber APIs follow legacy versions locked in `yarn.lock`.
- No architecture decisions are documented beyond what can be observed in code; do not infer modernization choices.
