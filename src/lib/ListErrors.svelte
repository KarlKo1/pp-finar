<script>
    export let errors;
</script>

{#if errors}
    {#if typeof errors === 'string'}
        <ul class="error-messages">
            {errors}
        </ul>
    {:else}
        <ul class="error-messages">
            {#each Object.keys(errors) as key}
                <li>{key} {errors[key]}</li>
            {/each}
        </ul>
    {/if}
{/if}