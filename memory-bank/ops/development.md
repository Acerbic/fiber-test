---
title: Local Development
doc_kind: ops
doc_function: canonical
purpose: Canonical local setup and development commands for fiber-test.
derived_from:
  - ../dna/governance.md
  - ../engineering/architecture.md
status: active
audience: humans_and_agents
---

# Local Development

## Prerequisites

- Node.js and Yarn are required, but supported versions are not pinned. A normal production build fails on the available Node.js 24.19.0 with `ERR_OSSL_EVP_UNSUPPORTED` in legacy Webpack/OpenSSL hashing.
- Use the tracked `yarn.lock`; do not silently replace it with another package-manager lockfile.

## Setup and Run

```bash
./init.sh
yarn dev
```

The development server uses the default Next.js behavior. No database, service dependency, seed data, or required environment variable is documented.

## Verification

```bash
yarn build
git diff --check
```

During adoption, a diagnostic build succeeded on Node.js 24 only with `NODE_OPTIONS=--openssl-legacy-provider`. This is evidence of the compatibility gap, not the canonical development command or a selected long-term fix. The owner must choose and pin a supported Node.js version or modernize the toolchain.

For UI changes, open `/` and verify the smoke surfaces in [`../engineering/testing-conventions.md`](../engineering/testing-conventions.md).
