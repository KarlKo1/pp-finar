<!--<script context="module">-->
<!--    export async function load({session}) {-->

<!--        const auth = await fetch('/api/brr')-->
<!--        auth.then(res =>console.log( res.json()))-->

<!--        return "yes";-->
<!--    }-->
<!--</script>-->

<script>
    import {session} from '$app/stores';
    import {goto} from '$app/navigation';
    // import {post} from '$lib/utils.ts';
    import ListErrors from '$lib/ListErrors.svelte';
    // import * as api from '$lib/_api'

    let email;
    let password;
    let errors = null;
    // let sentData;

    async function submit() {
        // sentData = {
        //     email: `${email}`,
        //     password: `${password}`
        // }
        // console.log(`Sent data: ${JSON.stringify(sentData)}`)

        await fetch('/api/auth', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: `${email}`,
                password: `${password}`
            })
        })
        .then(res => {
            if(res.status === 202) {
                alert("Very logged in")
            }
            if(res.status === 401) {
                alert("Very wrong credentials")
            }
        })
    }
</script>

<svelte:head>
    <title>Sign in • Conduit</title>
</svelte:head>

<div class="auth-page">
    <div class="container page">
        <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center">Sign In</h1>
                <p class="text-xs-center">
                    <a href="/register">Need an account?</a>
                </p>

                <ListErrors {errors}/>

                <form on:submit|preventDefault={submit}>
                    <fieldset class="form-group">
                        <input class="form-control form-control-lg" type="email" required placeholder="Email"
                               bind:value={email}>
                    </fieldset>
                    <fieldset class="form-group">
                        <input class="form-control form-control-lg" type="password" required placeholder="Password"
                               bind:value={password}>
                    </fieldset>
                    <button class="btn btn-lg btn-primary pull-xs-right" type="submit">
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>