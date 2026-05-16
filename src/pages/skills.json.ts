import { skills } from '../data/skills';

export const GET = () =>
  new Response(JSON.stringify({ skills }, null, 2), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  });
