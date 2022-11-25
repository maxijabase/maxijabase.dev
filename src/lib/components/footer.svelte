<script context="module">
  import LinkedinIcon from './linkedin-icon.svelte'
  import GithubIcon from './github-icon.svelte'
  import { PUBLIC_LINKEDIN_LINK, PUBLIC_GITHUB_LINK } from '$env/static/public'
</script>

<footer
  class="p-8 footer bg-neutral text-neutral-content footer-center"
>
  <div>
    <div class="grid grid-flow-col gap-6">
      <a href={PUBLIC_LINKEDIN_LINK} target="_blank" rel="noreferrer">
        <LinkedinIcon />
      </a>
      <a href={PUBLIC_GITHUB_LINK} target="_blank" rel="noreferrer">
        <GithubIcon />
      </a>
    </div>
  </div>
</footer>
