<script>
  import ThemeSwitch from './themeswitch.svelte';
</script>

<div class="navbar bg-neutral text-neutral-content sticky top-0 z-10 mb-16 shadow-lg">
  <div class="mx-2 flex-1 px-2">
    <a class="text-lg font-bold" href="/"> Maxi's Blog and Portfolio </a>
  </div>

  <div class="dropdown dropdown-left lg:hidden">
    <div class="btn m-1">Links</div>
    <ul class="bg-neutral rounded-box text-neutral-content menu dropdown-content w-52 p-2 shadow">
      <a class="btn btn-ghost btn-sm rounded-btn" href="/projects"> Portfolio </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/blog"> Blog </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/about"> About </a>
    </ul>
  </div>

  <div class="mx-1 hidden flex-none px-1 lg:flex">
    <div class="flex items-stretch">
      <a class="btn btn-ghost btn-sm rounded-btn" href="/projects"> Portfolio </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/blog"> Blog </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/about"> About </a>
    </div>
  </div>
  <div class="mr-2">
    <ThemeSwitch />
  </div>
</div>
