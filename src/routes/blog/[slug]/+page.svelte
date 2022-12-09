<script>
  import BackLink from '$components/back-link.svelte';

  import { page } from '$app/stores'
  import Head from '$components/head.svelte'
  import { siteMetadataStore } from '$stores/site-metadata'
  import { marked } from 'marked'
  import { onMount } from 'svelte'

  let pathname
  export let data

  onMount(async () => {
    pathname = $page.url.pathname
  })

  const { title, date, content, coverImage, coverImageCaption } = data.post
  const { siteUrl, name: siteName } = $siteMetadataStore || []
</script>

<Head
  title={`${title} · ${siteName}`}
  description={content.slice(0, 120)}
  image={coverImage.url}
  url={`${siteUrl}${pathname}`}
/>

<!-- Back button -->
<BackLink text="back to blog" href="/blog"/>

<!-- Title -->
<div class="prose prose-xl py-5">
  <h1>{title}</h1>
</div>

<!-- Date -->
<p class="text-xs tracking-widest font-semibold mb-6">
  {new Date(date).toDateString()}
</p>

<!-- Image -->
<div class="mb-5">
  <img class="rounded-xl" src={coverImage.url} alt={`Cover image for ${title}`} />
  <p class="text-gray-500 italic font-semibold text-sm">{coverImageCaption}</p>
</div>

<!-- Content -->
<article div class="prose prose-lg max-w-none text-justify">
  {@html marked(content)}
</article>
