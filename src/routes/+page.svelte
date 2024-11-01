<script lang="ts">
  import { fetchAuthor, fetchProjects } from '$stores/site-metadata';
  import { Lightbox } from 'svelte-lightbox';
  import type { Author } from '$lib/models/author';
  import type { Project } from '$lib/models/project';
  import ProjectCard from '$lib/components/project-card.svelte';

  let author = $state<Author>();
  let projects = $state<Project[]>([]);
  let loading = $state(false);

  $effect(() => {
    let isCancelled = false;

    const fetchData = async () => {
      loading = true;
      try {
        const [fetchedProjects, fetchedAuthor] = await Promise.all([
          fetchProjects(),
          fetchAuthor()
        ]);

        if (!isCancelled) {
          author = fetchedAuthor;
          projects = fetchedProjects;
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

<div class="mb-40 flex items-end">
  <div class="mr-6">
    <h2 class="mb-4 text-3xl font-bold tracking-normal">{author?.name}</h2>
    <p class="mb-4 text-xl">{author?.intro}</p>
  </div>
  <Lightbox transitionDuration={100}>
    <img class="mask mask-squircle" src={author?.picture.url} alt={author?.name} />
  </Lightbox>
</div>

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
