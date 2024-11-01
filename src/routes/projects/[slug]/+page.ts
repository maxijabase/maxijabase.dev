import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
  return {
    project: params.slug
  };
}) satisfies PageLoad;
