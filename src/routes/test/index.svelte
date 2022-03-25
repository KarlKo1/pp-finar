<!-- This is all purely for prisma API tests -->
<script context="module">
    export async function load({ session }) {
        // if (session.user) {
        //     return {
        //         status: 302,
        //         redirect: '/'
        //     };
        // }

        logger("info", `test/index.svelte terminal color test`);
        logger("warn", `test/index.svelte terminal color test`);
        logger("silly", `test/index.svelte terminal color test`);
        logger("debug", `test/index.svelte terminal color test`);

        return {};
    }
</script>

<script>
    import { logger } from "$lib/logger";
    import { onMount } from "svelte";
    import { session } from "$app/stores";
    import { goto } from "$app/navigation";

    let data1 = "";
    let data2 = "";
    const custm = {user: {email: 'no',password:'yes'}}

    async function submit(event) {
        logger("info", `{user: {email: 'no',password:'yes'}}`);
        logger("silly", `yeetus`);
        logger("warn", custm);
    }

    onMount(() => {
        const myBtn = document.getElementById("myBtn");
        submit();

        myBtn.addEventListener("click", () => {
            console.log("button pressed");
        });
    });
</script>

<!-- TODO: remove test route. -->

<div class="container page">
    <div class="row">
        <button
            id="myBtn"
            type="button"
            on:click={() => submit()}
        >
            button :)
        </button>
    </div>
</div>
