<script>
	import '../app.css';
	import { fade } from 'svelte/transition';
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

<style>
	.container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
