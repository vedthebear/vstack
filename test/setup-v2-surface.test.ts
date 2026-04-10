import { describe, expect, test } from 'bun:test';
import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(import.meta.dir, '..');

describe('vstackv2 install surface', () => {
  test('skill surface config defines core, transition, and legacy lists', () => {
    const content = fs.readFileSync(path.join(ROOT, 'config', 'skill-surface.sh'), 'utf-8');
    expect(content).toContain('VSTACK_CORE_SKILLS=(');
    expect(content).toContain('VSTACK_TRANSITION_SKILLS=(');
    expect(content).toContain('VSTACK_LEGACY_SKILLS=(');
  });

  test('setup sources the skill surface config and supports legacy opt-in', () => {
    const content = fs.readFileSync(path.join(ROOT, 'setup'), 'utf-8');
    expect(content).toContain('config/skill-surface.sh');
    expect(content).toContain('--legacy|--all-skills');
    expect(content).toContain('VSTACK_INSTALL_LEGACY');
    expect(content).toContain('should_install_skill');
  });

  test('AGENTS presents the v2 core surface', () => {
    const content = fs.readFileSync(path.join(ROOT, 'AGENTS.md'), 'utf-8');
    expect(content).toContain('vstackv2');
    expect(content).toContain('/browse');
    expect(content).toContain('/investigate');
    expect(content).toContain('/guard');
    expect(content).toContain('/connect-chrome');
  });
});
