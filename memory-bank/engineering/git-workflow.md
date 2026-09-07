---
title: Git Workflow
doc_kind: engineering
doc_function: convention
purpose: Records confirmed repository workflow facts and ownership gaps.
derived_from:
  - ../dna/governance.md
status: active
audience: humans_and_agents
---

# Git Workflow

- Default branch observed from `origin/HEAD`: `master`.
- Keep changes reviewable and run the checks defined in [`testing-conventions.md`](testing-conventions.md).
- Commit-message, branch-name, review, merge, release, and branch-protection policies are not documented.
- Dependabot branches exist remotely but are not evidence that upgrades were accepted.
