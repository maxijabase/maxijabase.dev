<script>
  import ThemeSwitch from './themeswitch.svelte'
</script>

<div
  class="navbar mb-16 shadow-lg bg-neutral text-neutral-content sticky top-0 z-10"
>
  <div class="flex-1 px-2 mx-2">
    <a class="text-lg font-bold" href="/"> Maxi's Blog and Portfolio </a>
  </div>

  <div class="dropdown dropdown-left lg:hidden">
    <div tabindex="0" class="m-1 btn">Links</div>
    <ul
      tabindex="0"
      class="bg-neutral rounded-box shadow text-neutral-content p-2 w-52 menu dropdown-content "
    >
      <a class="btn btn-ghost btn-sm rounded-btn" href="/projects">
        Portfolio
      </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/blog">
        Blog
      </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/about">
        About
      </a>
    </ul>
  </div>

  <div class="flex-none hidden px-1 mx-1 lg:flex">
    <div class="flex items-stretch">
      <a class="btn btn-ghost btn-sm rounded-btn" href="/projects">
        Portfolio
      </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/blog">
        Blog
      </a>
      <a class="btn btn-ghost btn-sm rounded-btn" href="/about">
        About
      </a>
    </div>
  </div>
  <div class="mr-2">
    <ThemeSwitch />
  </div>
</div>
