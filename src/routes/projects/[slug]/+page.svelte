<script>
  import { page } from '$app/stores'
  import BackLink from '$components/back-link.svelte'
  import Head from '$components/head.svelte'
  import { siteMetadataStore } from '$stores/site-metadata'
  import { marked } from 'marked'
  import { onMount } from 'svelte'
  export let data
  let pathname

  onMount(async () => {
    pathname = $page.url.pathname
  })

  const { siteUrl, name: siteName, openGraphDefaultImage } = $siteMetadataStore || []
</script>

<Head
  title={`${data.project.name} · ${siteName}`}
  description={data.project.description.slice(0, 120)}
  image={openGraphDefaultImage.url}
  url={`${siteUrl}${pathname}`}
/>

<!-- Back button -->
<BackLink text="back to projects" href="/projects"/>

<!-- Title -->
<div class="prose prose-xl py-5">
  <h2>{data.project.name}</h2>
</div>

<!-- Image -->
<div class="mb-5">
  <img class="rounded-lg" src={data.project.image[0].url} alt={data.project.title} />
</div>

<!-- Content -->
<article class="prose prose-lg max-w-none text-justify">
  {@html marked(data.project.about ?? '')}
</article>
