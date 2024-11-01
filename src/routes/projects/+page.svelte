<script lang="ts">
  import { fetchProjects } from '$stores/site-metadata';
  import type { Project } from '$lib/models/project';
  import ProjectCard from '$lib/components/project-card.svelte';

  let projects = $state<Project[]>([]);
  let loading = $state(false);

  $effect(() => {
    let isCancelled = false;

    const fetchData = async () => {
      loading = true;
      try {
        if (!isCancelled) {
          projects = await fetchProjects();
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

<div class="grid justify-center gap-10 md:grid-cols-2 lg:-mx-44 lg:grid-cols-3">
  {#if loading}
    <ProjectCard loading={true} />
    <ProjectCard loading={true} />
    <ProjectCard loading={true} />
  {:else}
    {#each projects as { name, slug, description, image }}
      <ProjectCard {name} {description} url={image[0].url} {slug} />
    {/each}
  {/if}
</div>
