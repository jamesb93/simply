<script lang="ts">
	import { state, storeState } from '$lib/app';

	let name: string = 'New Todo';
	let notes: string = 'Notes';

	// Add a todo to the LocalStorage
	const addTodo = () => {
		const todo = {
			name: name,
			notes: notes === 'Notes' ? '' : notes,
			done: false
		};

		$state.todos.uncategorised.push(todo);
		name = 'New Todo';
		notes = 'Notes';

		storeState();
		$state = $state;
	};

	// Handle keypresses
	const handlePress = (e) => {
		// If 'Enter' add the todo
		if (e.key === 'Enter') {
			addTodo();
		}
	};
</script>

<svelte:window on:keypress={handlePress} />

<div class="container">
	<form class="entry">
		<input
			class="name"
			bind:value={name}
			on:focus={() => {
				if (name === 'New Todo') {
					name = '';
				}
			}}
			on:blur={() => {
				if (name === '') {
					name = 'New Todo';
				}
			}}
		/>
		<input
			class="details"
			bind:value={notes}
			on:focus={() => {
				if (notes === 'Notes') {
					notes = '';
				}
			}}
			on:blur={() => {
				if (notes === '') {
					notes = 'Notes';
				}
			}}
		/>
	</form>
	<div class="add" on:click={addTodo}>+</div>
</div>

<style>
	div {
		user-select: none;
		-moz-user-select: none;
		-khtml-user-select: none;
		-webkit-user-select: none;
		-o-user-select: none;
	}
	.container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 1em;
		border-radius: 10px;
		gap: 0.15em;
		background: rgb(99, 99, 99);
		min-height: 50px;
	}

	.entry {
		display: flex;
		flex-direction: column;
		width: 90%;
		gap: 0.3em;
	}

	.name {
		color: white;
		padding: 0.1em;
		background-color: rgb(99, 99, 99);
		border: none;
		font-size: 1.1rem;
	}

	.details {
		color: rgb(204, 204, 204);
		background-color: rgb(99, 99, 99);
		border: none;
	}

	.add {
		user-select: none;
		-moz-user-select: none;
		-khtml-user-select: none;
		-webkit-user-select: none;
		-o-user-select: none;
		font-size: 1.5rem;
		max-height: max-content;
	}

	.add:hover {
		color: rgb(170, 210, 255);
	}

	.add:active {
		color: rgb(82, 163, 255);
	}
</style>
