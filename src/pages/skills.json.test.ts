import { describe, it, expect } from 'vitest';
import { GET } from './skills.json';
import { skills } from '../data/skills';

describe('GET /skills.json', () => {
  it('returns a successful response with correct headers', async () => {
    const response = GET();

    expect(response).toBeInstanceOf(Response);
    expect(response.headers.get('content-type')).toBe('application/json; charset=utf-8');
  });

  it('returns the skills data in the response body', async () => {
    const response = GET();
    const data = await response.json();

    expect(data).toEqual({ skills });
  });
});
