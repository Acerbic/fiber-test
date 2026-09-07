---
title: Frontend Engineering
doc_kind: engineering
doc_function: canonical
purpose: Owns confirmed frontend technology and behavioral constraints.
derived_from:
  - architecture.md
  - ../domain/rules.md
status: active
audience: humans_and_agents
---

# Frontend Engineering

- Framework: Next.js 9.3.2 with React 16.9.0 and TypeScript 3.6.3.
- Rendering: the 3D scene is client-only (`dynamic(..., { ssr: false })`).
- 3D: React Three Fiber 2.4.3 over Three.js 0.108.0.
- Animation: React Spring 8 via `react-spring/three`.
- Styling: component-scoped `styled-jsx` in the root page; the body is black with zero margin and the page fills the viewport.
- Assets: the skull is loaded from the tracked `/static/skull/scene.gltf` payload.

Before changing library APIs or asset paths, verify behavior against the locked versions. Supported browsers, responsive behavior, accessibility targets, and performance budgets are Unknown.
