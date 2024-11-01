<script lang="ts">
  import BackLink from '$lib/components/back-link.svelte';
  import type { Post } from '$lib/models/post.js';
  import { fetchPost } from '$stores/site-metadata.js';
  import { marked } from 'marked';

  let { data } = $props();
  let post = $state<Post>();
  let loading = $state(false);

  $effect(() => {
    let isCancelled = false;

    const fetchData = async () => {
      loading = true;
      try {
        if (!isCancelled) {
          console.log(data.post);
          post = await fetchPost(data.post);
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

{#if loading}
  <div class="animate-pulse">
    <!-- Back button skeleton -->
    <div class="mb-4 h-6 w-32 rounded bg-gray-200"></div>

    <!-- Title skeleton -->
    <div class="prose prose-xl py-5">
      <div class="h-12 w-3/4 rounded bg-gray-200"></div>
    </div>

    <!-- Date skeleton -->
    <div class="mb-6 h-4 w-40 rounded bg-gray-200"></div>

    <!-- Image skeleton -->
    <div class="mb-5">
      <div class="h-96 rounded-xl bg-gray-200"></div>
      <div class="mt-2 h-4 w-1/2 rounded bg-gray-200"></div>
    </div>

    <!-- Content skeleton -->
    <article class="prose prose-lg max-w-none space-y-4 text-justify">
      {#each Array(8) as _}
        <div class="h-4 rounded bg-gray-200"></div>
        <div class="h-4 w-11/12 rounded bg-gray-200"></div>
        <div class="h-4 w-10/12 rounded bg-gray-200"></div>
      {/each}
    </article>
  </div>
{:else}
  <!-- Original content -->
  <BackLink text="back to blog" href="/blog" />

  <!-- Title -->
  <div class="prose prose-xl py-5">
    <h1>{post?.title}</h1>
  </div>

  <!-- Date -->
  <p class="mb-6 text-xs font-semibold tracking-widest">
    {new Date(post?.date ?? '').toDateString()}
  </p>

  <!-- Image -->
  <div class="mb-5">
    <img class="rounded-xl" src={post?.coverImage.url} alt={`Cover image for ${post?.title}`} />
    <p class="text-sm font-semibold italic text-gray-500">{post?.coverImageCaption}</p>
  </div>

  <!-- Content -->
  <article div class="prose prose-lg max-w-none text-justify">
    {@html marked(post?.content ?? '')}
  </article>
{/if}
