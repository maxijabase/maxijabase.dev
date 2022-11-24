<script context="module">
  import {
    authorsStore,
    fetchAuthors,
    fetchSocials,
    socialsStore,
  } from '$stores/site-metadata'

  fetchAuthors()
  fetchSocials()
</script>

<footer
  class="p-10 footer bg-primary text-primary-content footer-center"
>
  <div class="grid grid-flow-col gap-4">
    <a class="link link-hover" href="/projects">Portfolio</a>
    <a class="link link-hover" href="/blog">Blog</a>
    <a class="link link-hover" href="/about">About</a>
  </div>
</footer>
