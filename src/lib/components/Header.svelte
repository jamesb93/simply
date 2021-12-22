<div class="header">
	<a class='link' href='/'>Todo</a>
	<a class='link' href='/done'>Done</a>
</div>

<style>
    .header {
        display: grid;
        grid-template-columns: auto auto;
        gap: 1em;
        place-items: center;
        justify-content: center;
        margin-bottom: 1em;
    }

    .link {
        font-size: 1.75rem;
        text-decoration: none;
    }

    .link:visited {
        color:white;
    }

    .link:active {
        color: white;
        text-decoration: italic;
    }
</style>