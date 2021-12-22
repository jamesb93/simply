<script>
	import { state } from '$lib/app';
</script>

<div class="container">
	{#each Object.keys($state.todos) as category}
		{category}
	{/each}
</div>

<style>
	.container {
		background-color: #1c1c1c;
		min-width: min-content;
		min-height: 100vh;
		padding: 1em;
	}
</style>
