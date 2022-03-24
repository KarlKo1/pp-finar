<!-- TODO: remove test route. -->
<!-- This is all purely for prisma API tests -->

<script context="module">
    export async function load({session}) {
        // if (session.user) {
        //     return {
        //         status: 302,
        //         redirect: '/'
        //     };
        // }

        return {};
    }
</script>

<script>
    import {post} from '$lib/utils';
    import {onMount} from "svelte";
    import {session} from "$app/stores";
    import {goto} from "$app/navigation";

    let data1 = '';
    let data2 = '';

    async function submit(event) {
        const dataBtn = document.getElementById('sendData')

        // const response = await post(`test/users`, {
        //     data1,
        //     data2
        // })
        const response = await fetch(`test/getUsers`)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            console.log(data[0])
            console.log(data[1])
        })
        // const rJson = await response.json()
        // console.log(rJson)

        // if (response.user) {
        //     $session.user = response.user;
        //     goto('/');
        // }
    }


    onMount(() => {
        const myBtn = document.getElementById('myBtn')
    submit();

        myBtn.addEventListener('click', () => {
            console.log('button pressed')
        })
    })
</script>


<div class="container page">
    <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
            <form on:submit|preventDefault={submit}>
                <fieldset class="form-group">
                    <input class="form-control form-control-md" type="text" placeholder="data1"
                           bind:value={data1}>
                </fieldset>
                <fieldset class="form-group">
                    <input class="form-control form-control-md" type="text" placeholder="data2"
                           bind:value={data2}>
                </fieldset>
                <button id="sendData" class="btn btn-md btn-primary pull-xs-right" type="submit">
                    send data
                </button>
            </form>
            <button id="myBtn" class="btn btn-md btn-primary pull-xs-right" type="button">
                button :)
            </button>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
            users
        </div>
    </div>
</div>