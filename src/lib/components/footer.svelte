<script>
  import LinkedinIcon from './linkedin-icon.svelte'
  import GithubIcon from './github-icon.svelte'
  import {
    fetchSocials,
    socialsStore,
  } from '$stores/site-metadata'

  fetchSocials()

  const { githubUrl, linkedinUrl } = $socialsStore
  
</script>

<footer class="p-8 footer bg-neutral text-neutral-content footer-center">
  <div>
    <div class="grid grid-flow-col gap-6">
      <a href={linkedinUrl} target="_blank" rel="noreferrer">
        <LinkedinIcon />
      </a>
      <a href={githubUrl}>
        <GithubIcon />
      </a>
    </div>
  </div>
</footer>
