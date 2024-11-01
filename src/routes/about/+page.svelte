<script lang="ts">
  import type { Author } from '$lib/models/author';
  import { fetchAuthor } from '$stores/site-metadata';
  import { marked } from 'marked';
  import { Lightbox } from 'svelte-lightbox';

  let author = $state<Author>();
  let loading = $state(false);

  $effect(() => {
    let isCancelled = false;

    const fetchData = async () => {
      loading = true;
      try {
        if (!isCancelled) {
          author = await fetchAuthor();
        }
      } catch (err) {
        console.error('Failed to fetch data', err);
      } finally {
        if (!isCancelled) {
          loading = false;
        }
      }
    };

    fetchData();

    return () => {
      isCancelled = true;
    };
  });
</script>

<h1 class="mb-20 text-center text-5xl font-bold">About Me</h1>

<div class="mb-20 flex items-end">
  <div class="mr-6">
    <h2 class="mb-4 text-3xl font-bold tracking-wider">{author?.name}</h2>
    <p class="mb-4 text-xl">{author?.intro}</p>
  </div>

  <Lightbox transitionDuration={100}>
    <img class="mask mask-squircle" src={author?.picture.url} alt={author?.name} />
  </Lightbox>
</div>

<article div class="prose prose-lg max-w-none text-justify">
  {@html marked(author?.bio ?? '')}
</article>
