<script>
    import { state } from '$lib/app';
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify($state));

</script>

<footer>
    <a class='download' download='simply.json' href={dataStr}>Export Data</a>
    <div class="author">
        Made by <a target='_blank' href='https://jamesbradbury.net'>James Bradbury</a>
    </div>
</footer>

<style>
    footer {
        display: flex;
        flex-direction: row;
        gap: 2em;
        margin: 0 auto;
        margin-top: auto;
        margin-bottom: 5em;
    }

    a {
        color: white;
    }

    a:visited {
        color: white;
    }

    a:hover {
        font-style: italic;
    }
</style>