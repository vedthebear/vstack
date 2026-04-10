#!/usr/bin/env bash
# vstackv2 skill surface
#
# The repo can still contain more skills than the public toolkit exposes.
# Setup uses this file to decide which skills are part of the core install,
# which ones remain as soft-transition compatibility helpers, and which ones
# stay legacy-only unless explicitly requested.

# Small public surface optimized for a personal global install.
VSTACK_CORE_SKILLS=(
  browse
  office-hours
  investigate
  review
  qa
  ship
  guard
  connect-chrome
  vstack-upgrade
)

# Keep these available by default during the v2 transition because they map to
# still-useful workflows or safety controls, even though they are no longer part
# of the "core" docs and recommendations.
VSTACK_TRANSITION_SKILLS=(
  plan-ceo-review
  plan-eng-review
  qa-only
  careful
  freeze
  unfreeze
  codex
)

# Retained in-repo, but not linked into a default install unless the user asks
# for the broader legacy surface.
VSTACK_LEGACY_SKILLS=(
  autoplan
  benchmark
  canary
  cso
  design-consultation
  design-review
  document-release
  land-and-deploy
  plan-design-review
  retro
  setup-browser-cookies
  setup-deploy
)
