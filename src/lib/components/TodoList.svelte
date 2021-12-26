<script lang="ts">
	import { state } from '$lib/app';
	import Todo from '$lib/components/Todo.svelte';
	let focus: number = -1;

	// Handles keypresses.
	const handlePress = (e) => {
		// If 'Escape' is pressed then eliminate focus.
		if (e.key === 'Escape') {
			focus = -1;
		}
	};
</script>

<svelte:window on:keydown={handlePress} />

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
