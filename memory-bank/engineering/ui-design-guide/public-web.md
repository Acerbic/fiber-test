---
title: Public Web UI
doc_kind: engineering
doc_function: canonical
purpose: Owns the observed public browser surface and unresolved UI standards.
derived_from:
  - ../frontend.md
  - ../../product/context.md
status: active
audience: humans_and_agents
---

# Public Web UI

## Surface

The only public surface is `/`: a full-viewport black page containing a WebGL scene and gray centered instruction text near the top.

## Composition

- One rotating skull at the origin, scaled to twice its model size.
- Four interactive octahedrons positioned at x/y combinations of ±2.
- Ambient light plus red and white point lights.

## Interaction

Click toggles octahedron active animation; pointer over/out changes opacity. Keyboard interaction, focus treatment, loading/error states, responsive constraints, reduced-motion behavior, and accessibility conformance are not defined and require explicit product decisions.
