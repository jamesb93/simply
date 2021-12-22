<script>
	import { state } from '$lib/app';
	import Todo from '$lib/components/Todo.svelte';
	let focus = -1;

	function handleKeys(e) {
		if (e.key === 'Escape') {
			focus = -1;
		}
	}
</script>

<svelte:window on:keydown={handleKeys} />

<div class="list">
    {#if $state}
	{#each $state.todos.uncategorised as todo, id}
		{#if !todo.done}
			<Todo name={todo.name} notes={todo.notes} {id} bind:done={todo.done} bind:focus />
		{/if}
	{/each}
    {/if}
</div>

<style>
	.list {
		display: flex;
		flex-direction: column;
		gap: 0.75em;
	}
</style>
