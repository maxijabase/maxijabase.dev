<script lang="ts">
  import type { Post } from '$lib/models/post';
  import { fetchPosts } from '$stores/site-metadata.js';

  let posts = $state<Post[]>([]);
  let loading = $state(false);

  $effect(() => {
    let isCancelled = false;

    const fetchData = async () => {
      loading = true;
      try {
        if (!isCancelled) {
          posts = await fetchPosts();
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

<h1 class="mb-20 text-center text-5xl font-bold">Blog posts</h1>

{#if loading}
  {#each Array(3) as _}
    <div class="card mb-20 animate-pulse text-center shadow-2xl">
      <figure class="h-48 bg-gray-400"></figure>
      <div class="prose card-body max-w-none">
        <div class="mx-auto h-8 w-3/4 rounded bg-gray-400"></div>
        <div class="h-4 rounded bg-gray-400"></div>
        <div class="h-4 w-5/6 rounded bg-gray-400"></div>
        <div class="h-4 w-4/6 rounded bg-gray-400"></div>
        <div class="card-actions justify-center">
          <div class="btn btn-outline mt-4 opacity-50">Read Now</div>
        </div>
      </div>
    </div>
  {/each}
{:else}
  {#each posts as { title, slug, content, coverImage }}
    <div class="card mb-20 text-center shadow-2xl">
      <figure>
        <img src={coverImage.url} alt={`Cover image for ${title}`} />
      </figure>
      <div class="prose card-body max-w-none">
        <h2 class="title">
          {title}
        </h2>
        {content.split(' ', 20).join(' ')}...
        <div class="card-actions justify-center">
          <a href={`/blog/${slug}`} class="btn btn-outline mt-4 no-underline">Read Now</a>
        </div>
      </div>
    </div>
  {/each}
{/if}
