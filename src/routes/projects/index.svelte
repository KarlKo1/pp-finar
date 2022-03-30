<script context="module">
    export async function load({ url, fetch }) {
        const res = await fetch(`/projects.json`);
        // const projects = await fetch('/projects/test.json')

        return {
            props: {
                projects: await res.json(),
                // profile: prof
            },
        };
    }
</script>

<script>
    import { onMount } from "svelte";
    import { page, session } from "$app/stores";
    // import Pagination from '$lib/Pagination.svelte';
    let promise;
    let year = $page.params && $page.params.year ? $page.params.year : new Date().getFullYear();
    export let projects;


    onMount(async () => {
        const projectDiv = document.getElementById("projects");
        projectDiv.innerHTML = "";

        for (const project of projects) {
            // projectDiv.innerHTML += project
        }
    });

    $:selectedYear = $page.params && $page.params.year ? $page.params.year : new Date().getFullYear();
</script>

<svelte:head>
    <title>brr</title>
</svelte:head>

<div class="home-page">
    <!--{#if !$session.user}-->
    <!--    <div class="banner">-->
    <!--        <div class="container">-->
    <!--            <h1 class="logo-font">Finar</h1>-->
    <!--            <p>A place to share your knowledge.</p>-->
    <!--        </div>-->
    <!--    </div>-->
    <!--{/if}-->
    <h5 class="p-3">{("projects")}</h5>
    <table class="text-left border shadow">
        <thead class="bg-primary-800 text-white">
        <tr>
            <th class="p-1 border">#</th>
            <th class="p-1 border">{('foremanName')}</th>
            <th class="p-1 border">{('budget')}</th>
            <th class="p-1 border">{('Finar')}</th>
            <th class="p-1 border">{('profit')}</th>
        </tr>
        </thead>
        <tbody>
        {#each projects as project,i}
                    <tr>
                        <td class="p-1 border">{i+1}</td>
                        <td class="p-1 border">{project.NAME}</td>
                        <td class="p-1 border">
                            <a class="text-primary-800"
                               href="projects/{project['projectId']}/budget?year={selectedYear}"> {project["projectName"]}</a>
                        </td>
                        <td class="p-1 border">
                            <a class="text-primary-800"
                               href="projects/{project['projectId']}?year={selectedYear}"> {project["projectName"]}</a>
                        </td>
                        <td class="p-1 border text-right {project['profit'] < 0 ? 'text-error-800' : ''}">{project["profit"]}</td>
                    </tr>
        {/each}
    </tbody>
    <div class="container page">
        <div class="row">
            <div id="projects">Loading...</div>
        </div>
    </div>
</div>
