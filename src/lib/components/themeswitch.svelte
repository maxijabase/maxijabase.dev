<script>
  import { themeChange } from 'theme-change'

  let darkMode = true

  function handleSwitchDarkMode() {
    darkMode = !darkMode

    darkMode
      ? localStorage.setItem('theme', 'dark')
      : localStorage.setItem('theme', 'light')

      themeChange(false);
  }
</script>

<div>
  <input
    checked={darkMode}
    on:click={handleSwitchDarkMode}
    type="checkbox"
    id="theme-toggle"
  />
  <label for="theme-toggle" />
</div>

<style lang="postcss">
  #theme-toggle {
    @apply invisible;
  }

  #theme-toggle + label {
    @apply inline-block cursor-pointer h-8 w-8 rounded-full duration-300 content-[''];
  }

  #theme-toggle:not(:checked) + label {
    @apply bg-amber-400;
  }

  #theme-toggle:checked + label {
    @apply bg-transparent;
    box-shadow: inset -8px -6px 1px 1px #ddd;
  }
</style>
