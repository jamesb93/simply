<script>
    import TodoList from '$lib/components/TodoList.svelte';
    import NewTodo from '$lib/components/NewTodo.svelte';
    import { state } from '$lib/app';
    import Todo from '$lib/components/Todo.svelte';
    let focus = -1;

    function handleKeys(e) {
        if (e.key === 'Escape') {
            focus = -1;
        }
    }

</script>

<div class="container">
    <div />
    <div class="center">        
        <div class="list">
            {#if $state}
            {#each $state.todos.uncategorised as todo, id}
                {#if todo.done}
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