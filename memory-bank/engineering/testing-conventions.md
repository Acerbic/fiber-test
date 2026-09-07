---
title: Testing Conventions
doc_kind: engineering
doc_function: canonical
purpose: Records current verification surfaces and testing gaps.
derived_from:
  - architecture.md
  - ../flows/testing-policy.md
status: active
audience: humans_and_agents
---

# Testing Conventions

No automated test framework, lint command, type-check command, browser test, or CI workflow is configured.

## Current Required Checks

- Run `yarn build` for changes that may affect compilation or the production bundle.
- Manually smoke-test the root page for scene rendering, skull rotation, asset loading, and each octahedron's click/hover behavior when UI behavior changes.
- Run `git diff --check` for every change.

Record any skipped check and reason. Adding an automated test stack requires a separate scoped decision; no preferred framework is established.

## Adoption Verification Record

- Dependency installation from `yarn.lock`: passed with Yarn 1.22.22.
- Standard build on Node.js 24.19.0: failed with `ERR_OSSL_EVP_UNSUPPORTED` from legacy Webpack hashing.
- Diagnostic build with `NEXT_TELEMETRY_DISABLED=1 NODE_OPTIONS=--openssl-legacy-provider`: passed. The flag is not adopted as project policy.
