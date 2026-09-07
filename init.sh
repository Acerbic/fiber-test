#!/usr/bin/env bash
#
# Generic local-checkout bootstrap. Adapt this script in the downstream
# repository when the project has additional setup requirements.

set -euo pipefail

has_command() {
  command -v "$1" >/dev/null 2>&1
}

if [[ -f mise.toml || -f .mise.toml || -f .tool-versions ]]; then
  if ! has_command mise; then
    echo "mise is required by this checkout but is not installed." >&2
    exit 1
  fi

  mise trust
  mise install
fi

if [[ -f .gitmodules ]]; then
  git submodule update --init --recursive
fi

if [[ -f .envrc ]]; then
  if ! has_command direnv; then
    echo "direnv is required by .envrc but is not installed." >&2
    exit 1
  fi

  direnv allow
fi

cat <<'EOF'
Bootstrap prerequisites are ready.
EOF

if ! has_command yarn; then
  echo "Yarn is required to install this project's locked dependencies." >&2
  exit 1
fi

yarn install --frozen-lockfile

cat <<'EOF'
Dependencies installed from yarn.lock.

Run `yarn dev` for local development or `yarn build` for a production build.
EOF
