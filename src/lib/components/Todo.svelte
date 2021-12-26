<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { storeState } from '$lib/app';
	export let name: string = '';
	export let notes: string = '';
	export let id: number = -1; // ID of the todo
	export let focus: number = -1; // ID to focus
	// When focus == -1 then nothing is considered focused.
	export let done: boolean = false;

	const handleContainerClick = () => {
		if (focus !== id) focus = id;
		else focus = -1;
	};
</script>

<div class="container" on:click={handleContainerClick} transition:fade={{ duration: 200 }}>
	<div class="top">
		<input class="status invisible" type="checkbox" bind:checked={done} on:change={storeState} />
		<div class="name" class:selected={focus === id}>
			{name}
		</div>
	</div>

	<div class="bottom">
		<div class="empty" />
		{#if focus === id}
			<div class="content" transition:fly={{ duration: 200 }}>
				<div class="notes">
					{notes}
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		border-radius: 10px;
		gap: 0.25em;
	}
	.status {
		margin: 0;
		padding: 0;
	}
	.top {
		display: flex;
		flex-direction: row;
		place-items: center;
		gap: 0.3em;
	}
	.bottom {
		margin-left: 1.25em;
	}
	.notes {
		color: rgb(204, 204, 204);
		padding-left: 0.2em;
	}

	.name {
		color: white;
		border-radius: 10px;
		width: 100%;
		padding-left: 0.4em;
	}

	.selected {
		background-color: #284474;
		padding-left: 0.4em;
	}

	div {
		user-select: none;
		-moz-user-select: none;
		-khtml-user-select: none;
		-webkit-user-select: none;
		-o-user-select: none;
	}
</style>
