<script lang="ts">
  interface Props {
    url?: string;
    name?: string;
    slug?: string;
    description?: string;
    loading?: boolean;
  }

  const { url, name, slug, description, loading }: Props = $props();
</script>

{#if loading}
  <div class="card card-compact bg-base-100 w-72 shadow-2xl md:w-80">
    <figure>
      <img
        class="animate-pulse"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
        alt="Loading"
      />
    </figure>
    <div class="card-body">
      <p class="mb-2 h-4 w-3/4 animate-pulse rounded-lg bg-gray-400"></p>
      <p class="mb-2 h-2 w-2/5 animate-pulse rounded-lg bg-gray-400"></p>
      <p class="mb-2 h-2 w-3/6 animate-pulse rounded-lg bg-gray-400"></p>
    </div>
  </div>
{:else}
  <a href="/projects/{slug}" class="group">
    <div
      class="card card-compact shadow-md transition group-hover:scale-[1.03] group-hover:shadow-black group-active:scale-100 group-active:shadow-none md:w-72 lg:w-80"
    >
      <figure><img src={url} alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  </a>
{/if}
