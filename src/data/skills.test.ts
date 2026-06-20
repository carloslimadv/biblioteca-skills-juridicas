import { describe, it, expect } from 'vitest';
import { command } from './skills';

describe('command', () => {
  it('formats command for codex agent (default)', () => {
    expect(command('my-skill')).toBe('npx skills add https://github.com/carloslimadv/biblioteca-skills-juridicas --skill my-skill');
  });

  it('formats command explicitly for codex agent', () => {
    expect(command('my-skill', 'codex')).toBe('npx skills add https://github.com/carloslimadv/biblioteca-skills-juridicas --skill my-skill');
  });

  it('formats command for claude-code agent', () => {
    expect(command('my-skill', 'claude-code')).toBe('npx skills add https://github.com/carloslimadv/biblioteca-skills-juridicas --skill my-skill --agent claude-code');
  });

  it('formats command correctly for other agents (fallback to default)', () => {
    expect(command('my-skill', 'other-agent')).toBe('npx skills add https://github.com/carloslimadv/biblioteca-skills-juridicas --skill my-skill');
  });
});
