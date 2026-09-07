---
title: Domain Model
doc_kind: domain
doc_function: canonical
purpose: Describes the observed runtime concepts without promoting implementation detail into a business model.
derived_from:
  - glossary.md
status: active
audience: humans_and_agents
---

# Domain Model

The project has no persistent business entities. Its observed runtime model is a scene composed of lights, a skull model, and four independent octahedrons. Each octahedron owns two ephemeral client-side booleans: `active` and `hovered`. No state is shared, persisted, or sent to a server.

The glTF model and textures are static assets; implementation details remain owned by code.
