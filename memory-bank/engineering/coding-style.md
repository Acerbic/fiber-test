---
title: Coding Style
doc_kind: engineering
doc_function: convention
purpose: Records only coding conventions observable in the repository.
derived_from:
  - architecture.md
status: active
audience: humans_and_agents
---

# Coding Style

- Use TypeScript/TSX and function components for the current frontend surface.
- Keep page composition in `pages/` and reusable scene elements in `components/`.
- Follow the existing four-space indentation and trailing-comma style in touched files unless a formatter is introduced separately.
- Keep implementation facts in code and durable intent/contracts in Memory Bank.

No formatter, linter, naming policy, import-order rule, or strict TypeScript policy is configured. Avoid claiming one until it is adopted.
