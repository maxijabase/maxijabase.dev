<script>
  export let url = ''
  export let name = ''
  export let slug = ''
  export let description = ''
</script>

<a href="/projects/{slug}" class="group">
  <div class="card card-compact w-72 md:w-80 bg-base-100 shadow-2xl transition-all group-hover:shadow-black">
    <figure><img src={url} alt="Shoes" class="transition group-hover:scale-105" /></figure>
    <div class="card-body">
      <h2 class="card-title">{name}</h2>
      <p>{description}</p>
    </div>
  </div>
</a>
