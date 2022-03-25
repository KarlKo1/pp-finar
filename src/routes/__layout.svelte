<script context="module">
    export async function load({url, fetch, session}) {
        const {user} = session;

        if (url.pathname !== '/login') {
            if (!user) {
                return {
                    status: 302,
                    redirect: '/login'
                };
            }
        }

        return "what do i put here";
    }
</script>

<script>
    import {navigating} from '$app/stores';
    import {  session } from '$app/stores';
    import Nav from '$lib/Nav.svelte';
    import PreloadingIndicator from '$lib/PreloadingIndicator.svelte';
</script>

{#if $navigating}
    <PreloadingIndicator/>
{/if}

<Nav/>

<main>
    <slot/>
</main>
