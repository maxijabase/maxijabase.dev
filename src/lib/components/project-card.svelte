<script>
  export let url = ''
  export let name = ''
  export let slug = ''
  export let description = ''
  export let loading
</script>

{#if loading}
  <div class="card card-compact w-72 md:w-80 bg-base-100 shadow-2xl">
    <figure>
      <img
        class="animate-pulse"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
        alt="Loading"
      />
    </figure>
    <div class="card-body">
      <h2 class="bg-gray-400 animate-pulse h-4 w-3/4 mb-2 rounded-lg" />
      <p class="bg-gray-400 animate-pulse h-2 w-2/5 mb-2 rounded-lg" />
      <p class="bg-gray-400 animate-pulse h-2 w-3/6 mb-2 rounded-lg" />
    </div>
  </div>
{:else}
  <a href="/projects/{slug}" class="group">
    <div
      class="card card-compact md:w-72 lg:w-80 shadow-xl transition group-hover:shadow-black group-hover:scale-[1.03] group-active:scale-100 group-active:shadow-none"
    >
      <figure><img src={url} alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  </a>
{/if}
