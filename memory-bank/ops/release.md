---
title: Release Process
doc_kind: ops
doc_function: canonical
purpose: Owns the observed release configuration and explicitly records operational gaps.
derived_from:
  - stages.md
  - ../engineering/testing-conventions.md
status: active
audience: humans_and_agents
---

# Release Process

There is no confirmed current release process. `now.json` indicates historical ZEIT Now v2 deployment intent, but no workflow, live project, credentials procedure, release owner, rollback method, or verification URL is documented.

Before establishing a release process:

1. Confirm the target platform and owner.
2. Define supported runtime versions.
3. Require a successful production build and browser smoke check.
4. Document deployment, version verification, and rollback using safe procedures without secrets.
