---
title: Configuration
doc_kind: ops
doc_function: canonical
purpose: Owns known configuration inputs and secret-handling gaps.
derived_from:
  - development.md
status: active
audience: humans_and_agents
---

# Configuration

No application environment variables or configuration files are referenced by tracked runtime code. `.env*` files are ignored and must not be committed.

`now.json` contains historical deployment configuration: version 2, public access, name `fiber-test`. It does not prove a live deployment or current platform choice.

Secret ownership and access procedures are not applicable to the observed codebase; revisit if an external integration is introduced.
