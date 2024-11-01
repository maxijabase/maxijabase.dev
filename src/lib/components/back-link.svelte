<script lang="ts">
  interface Props {
    href: string;
    text: string;
  }

  let { href, text }: Props = $props();
</script>

<a
  {href}
  class="italic text-gray-500 transition ease-linear hover:text-gray-400 active:text-gray-500"
  >← {text}</a
>
