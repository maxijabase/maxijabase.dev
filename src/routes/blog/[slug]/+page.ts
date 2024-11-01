import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
  return {
    post: params.slug
  };
}) satisfies PageLoad;
