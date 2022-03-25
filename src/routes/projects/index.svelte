<!--<script context="module">-->
<!--    export async function load({url, fetch}) {-->
<!--        const projects = await fetch('/projects/getUsers.json')-->
<!--        // const projects = await fetch('/projects/test.json')-->
<!--        const {users} = await projects.json()-->

<!--        setTimeout(() => {-->
<!--            console.log(users)-->
<!--        }, 1000)-->

<!--        return {-->
<!--            props: {-->
<!--                users-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->

<script>
    import {onMount} from 'svelte';
    import {page, session} from '$app/stores';
    // import Pagination from '$lib/Pagination.svelte';

    export let users;

    onMount(async () => {
            // console.log(users)

        let projectDiv = document.getElementById('projects')
        projectDiv.innerHTML = "soon TM";
    });
</script>

<svelte:head>
    <title>Conduit</title>
</svelte:head>

<div class="home-page">
    {#if !$session.user}
        <div class="banner">
            <div class="container">
                <h1 class="logo-font">conduit</h1>
                <p>A place to share your knowledge.</p>
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
                                Welcome?
                            </li>
                        {:else}
                            <li class="nav-item">
                                <a href="/login" rel="prefetch" class="nav-link">Sign in</a>
                            </li>
                        {/if}

                    </ul>
                </div>

            </div>
        </div>
    </div>
</div>
