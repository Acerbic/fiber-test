---
title: Domain States
doc_kind: domain
doc_function: canonical
purpose: Defines the observed local interaction state transitions.
derived_from:
  - model.md
  - rules.md
status: active
audience: humans_and_agents
---

# Domain States

Each octahedron independently occupies the Cartesian product of:

- `active = false | true`, toggled by click;
- `hovered = false | true`, set by pointer over/out.

There are no loading, error, persisted, server, or user-session states defined as explicit application contracts.
