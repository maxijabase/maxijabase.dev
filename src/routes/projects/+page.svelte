<script>
  import { page } from '$app/stores'
  import ProjectView from '$components/project-view.svelte'
  import Head from '$components/head.svelte'
  import { siteMetadataStore } from '$stores/site-metadata'
  import { onMount } from 'svelte'

  export let data
  let pathname

  onMount(async () => {
    pathname = $page.url.pathname
  })

  const {
    siteUrl,
    name: siteName,
    openGraphDefaultImage,
  } = $siteMetadataStore || []
</script>

<Head
  title={`Projects · ${siteName}`}
  description={`A list of recent projects.`}
  image={openGraphDefaultImage.url}
  url={`${siteUrl}${pathname}`}
/>

<h1 class="font-bold mb-20 text-center text-5xl">My projects</h1>

<ProjectView />
