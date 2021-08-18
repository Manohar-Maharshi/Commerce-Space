<!-- routify:options preload="proximity" -->
<script>
	import Navbar from '../components/Navbar.svelte'

</script>

<Navbar />
<main>
	<slot />
</main>

<style>
	main{
		padding: 0 3rem;
		margin: 0 auto;
	}
</style>
