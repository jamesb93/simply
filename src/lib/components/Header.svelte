<div class="header">
	<div />
	<div class="center">
		<a class="link" href="/">Todo</a>
		<div class="divider">|</div>
		<a class="link" href="/done">Done</a>
	</div>
</div>

<style>
	.header {
		display: grid;
		grid-template-columns: auto auto auto;
		gap: 1em;
		place-items: center;
		justify-content: center;
		margin-bottom: 1em;
	}

	.center {
		display: flex;
		flex-direction: row;
		gap: 1em;
	}

	.divider {
		font-size: 1.75rem;
	}

	.link {
		font-size: 1.75rem;
		text-decoration: none;
		color: white;
	}

	.link:visited {
		color: white;
	}

	.link:active {
		color: white;
		text-decoration: italic;
	}
</style>
