<script lang="ts">
  import Footer from '$lib/components/footer.svelte';
  import Navbar from '$lib/components/navbar.svelte';
  import '../app.css';
  let { children } = $props();
</script>

<Navbar />
<main class="container mx-auto mb-20 max-w-3xl px-4">
  {@render children()}
</main>
<Footer />
