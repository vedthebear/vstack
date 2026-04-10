# vstackv2 — Personal AI Coding Toolkit

vstackv2 is a lean skill pack for AI coding agents. The default surface is small:
keep the browser runtime, a few high-leverage workflow skills, and only enough
transition compatibility to avoid breaking old habits.

## Core layers

1. Browser/runtime
2. Core skills
3. Optional legacy/transition skills

## Core skills

Skills live in `.agents/skills/`. The default install emphasizes this smaller set.

| Skill | What it does |
|-------|-------------|
| `/browse` | Persistent browser for QA, screenshots, evidence capture, and dogfooding. |
| `/office-hours` | Shape an idea before coding. Useful for scope, framing, and the first cut at the work. |
| `/investigate` | Root-cause debugging and implementation troubleshooting. |
| `/review` | Diff-focused code review before landing changes. |
| `/qa` | Browser-driven QA loop that tests and fixes issues. |
| `/ship` | Ship workflow for tests, review, PR prep, and release hygiene. |
| `/guard` | Combined safety mode for destructive commands and scoped edits. |
| `/connect-chrome` | Launch visible Chrome with the vstack side panel. |
| `/vstack-upgrade` | Update the toolkit. |

## Transition skills

These still work in v2, but they are no longer the primary public surface:

- `/plan-ceo-review`
- `/plan-eng-review`
- `/qa-only`
- `/careful`
- `/freeze`
- `/unfreeze`
- `/codex`

## Legacy skills

The repo still retains a broader legacy layer for now, but those skills are
unsupported by default in the v2 install surface. Use `./setup --legacy` if you
explicitly want the broader historical toolkit.

## Build commands

```bash
bun install
bun run build
bun run gen:skill-docs
bun run gen:skill-docs --host codex
bun run test:core
```

## Key conventions

- The browser command registry remains the source of truth for browse commands.
- Generated skill docs still exist where code-coupled sections must stay in sync.
- Setup now defaults to the v2 core surface. Legacy skills are opt-in.
