import { describe, expect, test } from 'bun:test';
import { classifySkill, readSkillSurface } from '../scripts/skill-surface';

describe('skill surface helpers', () => {
  test('reads core, transition, and legacy sets from config', () => {
    const surface = readSkillSurface();
    expect(surface.core).toContain('browse');
    expect(surface.transition).toContain('plan-ceo-review');
    expect(surface.legacy).toContain('retro');
  });

  test('classifies known skills into the expected v2 tiers', () => {
    const surface = readSkillSurface();
    expect(classifySkill('qa', surface)).toBe('core');
    expect(classifySkill('codex', surface)).toBe('transition');
    expect(classifySkill('document-release', surface)).toBe('legacy');
    expect(classifySkill('vstack', surface)).toBe('unclassified');
  });
});
