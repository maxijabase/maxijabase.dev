<script>
    import { destroy_each } from "svelte/internal"


  export let url = ''
  export let name = ''
  export let slug = ''
  export let description = ''
</script>

<div class="card w-80 bg-base-100 shadow-xl image-full">
  <figure><img src={url} alt="{description}" /></figure>
  <div class="card-body">
    <h1 class="card-title text-2xl">{name}</h1>
    <p>{description}</p>
    <div class="card-actions justify-start">
      <a href="projects/{slug}">
        <button class="btn btn-accent">Read now!</button>
      </a>
    </div>
  </div>
</div>
