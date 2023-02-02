<script>
  import ProjectView from '$components/project-view.svelte'
  import Head from '$components/head.svelte'
  import { Lightbox } from 'svelte-lightbox'
  import { authorsStore, siteMetadataStore } from '$stores/site-metadata'
  export let data

  const { siteUrl, description, openGraphDefaultImage } = $siteMetadataStore || []
  const { name: authorName } = $authorsStore || []
</script>

<Head
  title={`Home · ${authorName}`}
  {description}
  image={openGraphDefaultImage.url}
  url={`${siteUrl}`}
/>

{#each data.authors as { name, intro, picture: { url } }}
  <div class="flex mb-40 items-end">
    <div class="mr-6">
      <h2 class="text-3xl mb-4 font-bold tracking-normal">{name}</h2>
      <p class="text-xl mb-4">{intro}</p>
    </div>
    <Lightbox transitionDuration="100">
      <img class="mask mask-squircle" src={url} alt={name} />
    </Lightbox>
  </div>
{/each}

<ProjectView />
