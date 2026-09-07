---
title: Context Map
doc_kind: domain
doc_function: canonical
purpose: Defines project boundaries and absent external contexts.
derived_from:
  - model.md
status: active
audience: humans_and_agents
---

# Context Map

The application has one observed context: a client-rendered 3D scene. The Next.js page mounts the scene, the scene composes renderable objects, and each object owns its local animation behavior. No API, persistence, authentication, queue, webhook, or other external bounded context is present.
