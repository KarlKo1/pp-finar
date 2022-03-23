<script context="module">

    export async function load({url, fetch, session}) {
        console.dir("--- root index session ---")
        console.dir(session)

        return {

        }
    }
</script>

<script>
    import {onMount} from 'svelte';
    import {page, session} from '$app/stores';
    // import Pagination from '$lib/Pagination.svelte';

    onMount(async () => {

        let projectDiv = document.getElementById('projects')
        projectDiv.innerHTML = "rastakhan";
    });


    // export let articles;
    // export let pages;
    // export let tags;

    // $: p = +$page.url.searchParams.get('p') || 1;
    // $: tag = $page.url.searchParams.get('tag');
    // $: tab = $page.url.searchParams.get('tab') || 'all';
    // $: page_link_base = tag ? `tag=${tag}` : `tab=${tab}`;
</script>

<svelte:head>
    <title>Conduit</title>
</svelte:head>

<div class="home-page">
    {#if !$session.user}
        <div class="banner">
            <div class="container">
                <h1 class="logo-font">if not session user</h1>
            </div>
        </div>
    {/if}

    <div id="projects">
        Loading...
    </div>

    <div class="container page">
        <div class="row">
            <div class="col-md-9">
                <div class="feed-toggle">
                    <ul class="nav nav-pills outline-active">
                        {#if $session.user}
                            <li class="nav-item">
                                wow you logged in poggers
                            </li>
                        {:else}
                            <li class="nav-item">
                                <a href="/login" rel="prefetch" class="nav-link">Do the in logging</a>
                            </li>
                        {/if}

                    </ul>
                </div>

            </div>
        </div>
    </div>
</div>
