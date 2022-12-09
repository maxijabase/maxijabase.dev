<script>
  import { page } from '$app/stores'
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
  title={`Blog · ${siteName}`}
  description={`A list of recent blog posts.`}
  image={openGraphDefaultImage.url}
  url={`${siteUrl}${pathname}`}
/>

<h1 class="font-bold mb-20 text-center text-5xl">Blog posts</h1>

{#each data.posts as { title, slug, content, coverImage }}
  <div class="card text-center shadow-2xl mb-20">
    <figure>
      <img src={coverImage.url} alt={`Cover image for ${title}`} />
    </figure>
    <div class="card-body prose max-w-none">
      <h2 class="title">
        {title}
      </h2>
      {content.split(' ', 20).join(' ')}...
      <div class="justify-center card-actions">
        <a href={`/blog/${slug}`} class="btn btn-outline no-underline mt-4">Read Now</a>
      </div>
    </div>
  </div>
{/each}
