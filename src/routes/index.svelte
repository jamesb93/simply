<script>
import TodoList from '$lib/components/TodoList.svelte';
import NewTodo from '$lib/components/NewTodo.svelte';
</script>

<div class="container">
<div />
<div class="center">
    <NewTodo />
    <TodoList />
</div>
<div />
</div>

<style>
.container {
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
}

.center {
    display: flex;
    flex-direction: column;
    gap: 1em;
    max-width: 900px;
    min-width: 50ch;
    margin: 0 auto;
}
</style>