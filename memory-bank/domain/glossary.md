---
title: Domain Glossary
doc_kind: domain
doc_function: canonical
purpose: Defines the small visual vocabulary used by fiber-test.
derived_from:
  - ../dna/governance.md
  - ../product/context.md
status: active
audience: humans_and_agents
---

# Domain Glossary

| Term | Meaning | Source |
| --- | --- | --- |
| Scene | The single React Three Fiber canvas containing lights, one skull, and four octahedrons | `components/SceneCanvas.tsx` |
| Skull | The tracked glTF model loaded from `static/skull/scene.gltf` and rotated continuously | `components/Skull.tsx` |
| Octahedron | An interactive mesh plus line geometry with local active and hover state | `components/Octahedron.tsx` |
| Active | The boolean state toggled by clicking an octahedron; selects its expanded/rotated/pink animation target | `components/Octahedron.tsx` |
| Hovered | The boolean state set by pointer enter/exit; selects material opacity | `components/Octahedron.tsx` |

No business domain vocabulary is documented.
