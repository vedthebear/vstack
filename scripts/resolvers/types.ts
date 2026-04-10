export type Host = 'claude' | 'codex';

export interface HostPaths {
  skillRoot: string;
  localSkillRoot: string;
  binDir: string;
  browseDir: string;
}

export const HOST_PATHS: Record<Host, HostPaths> = {
  claude: {
    skillRoot: '~/.claude/skills/vstack',
    localSkillRoot: '.claude/skills/vstack',
    binDir: '~/.claude/skills/vstack/bin',
    browseDir: '~/.claude/skills/vstack/browse/dist',
  },
  codex: {
    skillRoot: '$VSTACK_ROOT',
    localSkillRoot: '.agents/skills/vstack',
    binDir: '$VSTACK_BIN',
    browseDir: '$VSTACK_BROWSE',
  },
};

export interface TemplateContext {
  skillName: string;
  tmplPath: string;
  benefitsFrom?: string[];
  host: Host;
  paths: HostPaths;
  preambleTier?: number;  // 1-4, controls which preamble sections are included
}
