---
title: Environments And Stages
doc_kind: ops
doc_function: canonical
purpose: Records confirmed environments and gaps in deployed-stage ownership.
derived_from:
  - config.md
status: active
audience: humans_and_agents
---

# Environments And Stages

| Stage | Status | Access / health / observability |
| --- | --- | --- |
| Local development | Configured via `yarn dev` | Default Next.js local URL; no health endpoint or observability |
| Production | Unknown | `now.json` is historical evidence only; no live URL, owner, dashboard, or health check is documented |

Staging, preview, test accounts, logs, metrics, traces, and error tracking are not documented.
