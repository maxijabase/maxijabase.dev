<script>
  import Footer from '$components/footer.svelte'
  import Navbar from '$components/navbar.svelte'
  import '../app.css'
</script>

<Navbar />
<main class="container max-w-3xl mx-auto px-4 mb-20">
  <slot />
</main>
<Footer />
