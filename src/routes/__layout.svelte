<script>
	import '../app.css';
	import { fade } from 'svelte/transition';
	import Header from '$lib/components/Header.svelte'
</script>

<Header />

<main>
	<slot />
</main>