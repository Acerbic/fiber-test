---
title: Domain Events
doc_kind: domain
doc_function: canonical
purpose: Records browser events that change observable scene state.
derived_from:
  - states.md
status: active
audience: humans_and_agents
---

# Domain Events

| Event | Trigger | Effect |
| --- | --- | --- |
| Octahedron clicked | React Three Fiber `onClick` | Toggle targeted octahedron `active` |
| Pointer entered octahedron | `onPointerOver` | Set targeted octahedron `hovered` true |
| Pointer left octahedron | `onPointerOut` | Set targeted octahedron `hovered` false |
| Render frame | React Three Fiber `useRender` | Increment skull Y rotation when its group ref exists |

No external, persisted, or integration events exist in tracked sources.
