<script lang="ts">
  import BackLink from '$lib/components/back-link.svelte';
  import type { Project } from '$lib/models/project';
  import { fetchProject } from '$stores/site-metadata';
  import { marked } from 'marked';

  let { data } = $props();
  let project = $state<Project>();
  let loading = $state(false);

  $effect(() => {
    let isCancelled = false;

    const fetchData = async () => {
      loading = true;
      try {
        if (!isCancelled) {
          console.log(data.project);
          project = await fetchProject(data.project);
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
  <!-- Back button skeleton -->
  <div class="mb-4 animate-pulse">
    <div class="h-8 w-32 rounded bg-gray-200"></div>
  </div>

  <!-- Title skeleton -->
  <div class="prose prose-xl animate-pulse py-5">
    <div class="h-10 w-2/3 rounded bg-gray-200"></div>
  </div>

  <!-- Image skeleton -->
  <div class="mb-5 animate-pulse">
    <div class="h-[400px] w-full rounded-lg bg-gray-200"></div>
  </div>

  <!-- Content skeleton -->
  <article class="prose prose-lg max-w-none animate-pulse space-y-4 text-justify">
    <div class="h-4 w-full rounded bg-gray-200"></div>
    <div class="h-4 w-5/6 rounded bg-gray-200"></div>
    <div class="h-4 w-4/5 rounded bg-gray-200"></div>
    <div class="h-4 w-full rounded bg-gray-200"></div>
    <div class="h-4 w-3/4 rounded bg-gray-200"></div>
  </article>
{:else}
  <!-- Back button -->
  <BackLink text="back to projects" href="/projects" />

  <!-- Title -->
  <div class="prose prose-xl py-5">
    <h2>{project?.name}</h2>
  </div>

  <!-- Image -->
  <div class="mb-5">
    <img class="rounded-lg" src={project?.image[0].url} alt={project?.description} />
  </div>

  <!-- Content -->
  <article class="prose prose-lg max-w-none text-justify">
    {@html marked(project?.about ?? '')}
  </article>
{/if}
