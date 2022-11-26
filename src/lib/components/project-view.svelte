<script>
  import ProjectCard from './project-card.svelte'
  import { fetchProjects, projectsStore, loading } from '$stores/site-metadata'

  fetchProjects()
</script>

<div class="grid gap-10 justify-center md:grid-cols-2 lg:grid-cols-3 lg:-mx-44">
  {#if $loading}
    <ProjectCard loading="true" />
    <ProjectCard loading="true" />
    <ProjectCard loading="true" />
  {:else}
    {#each $projectsStore as { name, slug, description, image }}
      <ProjectCard {name} {description} url={image[0].url} {slug} />
    {/each}
  {/if}
</div>
