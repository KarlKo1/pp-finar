<script>
    import {page, session} from '$app/stores';
    import {selectedUserId} from '../stores.ts';
    import {availableYears} from '$lib/utils';
    let years = availableYears();
    export let onYearSelect;
    export let selectedYear = $page.params && $page.params.year ? parseInt($page.params.year) : new Date().getFullYear();
    $: selectedYear = $page.params && $page.params.year ? parseInt($page.params.year) : new Date().getFullYear();
</script>
<style>
    .active {
        background: #799dcf;
        color: #ffffff;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
</style>
<ul>
    {#each years as year}
        <button class="inline-block px-4 py-2 border border-primary-50 hover:bg-primary-50 hover:shadow-md"
                class:active="{year === selectedYear}"
                on:click={()=>onYearSelect(year)}
        >{year}</button>
    {/each}
</ul>
