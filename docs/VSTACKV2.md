# vstackv2

vstackv2 reshapes this repo from a broad skill distribution into a lean personal
toolkit for future AI coding sessions.

## Architecture

v2 is intentionally organized around three layers:

1. Browser/runtime
   - The persistent browse daemon is the stable base.
   - Command syntax, help, and command docs still derive from the browse command registry.
2. Core skills
   - Small default install surface.
   - High-frequency workflows only: idea shaping, build/debug, review, QA, ship, safety, visible Chrome.
3. Legacy/transition
   - Retained in-repo for compatibility and migration.
   - Not part of the default public surface unless explicitly requested.

## Skill classification

### Core

- `browse`
- `office-hours`
- `investigate`
- `review`
- `qa`
- `ship`
- `guard`
- `connect-chrome`
- `vstack-upgrade`

### Transition

- `plan-ceo-review`
- `plan-eng-review`
- `qa-only`
- `careful`
- `freeze`
- `unfreeze`
- `codex`

### Legacy

- `autoplan`
- `benchmark`
- `canary`
- `cso`
- `design-consultation`
- `design-review`
- `document-release`
- `land-and-deploy`
- `plan-design-review`
- `retro`
- `setup-browser-cookies`
- `setup-deploy`

## Authoring model

v2 narrows generation rather than removing it everywhere.

- Keep generated sections where syntax drift would hurt:
  - browse command reference
  - host-specific skill transforms still used by active installs
- Prefer plain authored files where the content is stable and not code-coupled.

## Install model

`./setup` now defaults to the v2 core surface plus a small transition layer.

Use `./setup --legacy` or `VSTACK_INSTALL_LEGACY=1 ./setup` to expose the broader
historical set of skills.
