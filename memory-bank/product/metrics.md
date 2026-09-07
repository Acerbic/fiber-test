---
title: Product Metrics
doc_kind: product
doc_function: canonical
purpose: Owns product success signals and measurement gaps.
derived_from:
  - context.md
status: active
audience: humans_and_agents
---

# Product Metrics

No analytics, baseline, target, SLO, or instrumentation owner is documented.

| Metric ID | Signal | Baseline | Target | Measurement |
| --- | --- | --- | --- | --- |
| `MET-01` | Production build completes | Fails on Node.js 24.19.0; diagnostic legacy-provider build passes | Build exits successfully on a pinned supported runtime without compatibility overrides | `yarn build` |
| `MET-02` | Root scene renders and responds to octahedron pointer input | No automated baseline | Owner to define | Browser smoke/E2E check; not yet implemented |

These are engineering verification signals, not evidence of product value. Product metrics remain an owner-confirmation gap.
