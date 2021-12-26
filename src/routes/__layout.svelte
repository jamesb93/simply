<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="container">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<slot />

<style>
	.container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
