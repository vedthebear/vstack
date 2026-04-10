import * as fs from 'fs';
import * as path from 'path';

export interface SkillSurface {
  core: string[];
  transition: string[];
  legacy: string[];
}

const ROOT = path.resolve(import.meta.dir, '..');
const SURFACE_FILE = path.join(ROOT, 'config', 'skill-surface.sh');

function parseArray(content: string, name: string): string[] {
  const match = content.match(new RegExp(`${name}=\\(([^]*?)\\)`, 'm'));
  if (!match) return [];

  return match[1]
    .split('\n')
    .map(line => line.replace(/#.*/, '').trim())
    .filter(Boolean);
}

export function readSkillSurface(filePath: string = SURFACE_FILE): SkillSurface {
  const content = fs.readFileSync(filePath, 'utf-8');
  return {
    core: parseArray(content, 'VSTACK_CORE_SKILLS'),
    transition: parseArray(content, 'VSTACK_TRANSITION_SKILLS'),
    legacy: parseArray(content, 'VSTACK_LEGACY_SKILLS'),
  };
}

export function classifySkill(skill: string, surface: SkillSurface = readSkillSurface()): 'core' | 'transition' | 'legacy' | 'unclassified' {
  if (surface.core.includes(skill)) return 'core';
  if (surface.transition.includes(skill)) return 'transition';
  if (surface.legacy.includes(skill)) return 'legacy';
  return 'unclassified';
}
