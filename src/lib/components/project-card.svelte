<script>
  export let url = ''
  export let name = ''
  export let slug = ''
  export let description = ''
</script>

<a href="/projects/{slug}">
  <div class="card w-80 bg-base-100 shadow-xl group image-full">
    <figure><img src={url} alt={description} class="transition group-hover:scale-105" /></figure>
    <div class="card-body pt-14">
      <h1 class="card-title text-2xl transition-all group-hover:text-3xl">{name}</h1>
      <p class="text-base transition-all group-hover:text-lg">{description}</p>
    </div>
  </div>
</a>
