<script context="module">
    export async function load({params, fetch}) {
        // can be used for getting 'profile info' form DB
        const res = await fetch(`/profile/@${params.user}.json`);
        // const prof = await res.json()
        return {
            props: {
                profile: await res.json()
                // profile: prof
            }
        }
    }
</script>

<script>
    import {page, session} from '$app/stores';

    export let profile;

    // const token = (current_token = {});
    const {username} = profile;

    // TODO would be nice to have a more idiomatic solution to this —
    // https://github.com/sveltejs/kit/issues/269
    $: segments = $page.url.pathname.split('/');
    $: is_user = $session.user && profile.username === $session.user.username;
    //
    let current_token;
    //
    // async function toggle_following() {
    //     const token = (current_token = {});
    //
    //     const {username} = profile;
    // }

    // if (token === current_token) {
    //     profile = result.profile;
    // }


</script>

<svelte:head>
    <!--    <title>{profile.username} • Conduit</title>-->
    <title>{profile} • Conduit</title>
</svelte:head>

<div class="profile-page">
    <div class="user-info">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-10 offset-md-1">
                    <!--                    <img src={profile.image} class="user-img" alt={profile.username}/>-->
                    <h4>{profile.username}</h4>
                    <p>{profile.bio}</p>

                    <!--{#if is_user}-->
                    <!--    <a href="/settings" class="btn btn-sm btn-outline-secondary action-btn">-->
                    <!--        <i class="ion-gear-a"/>-->
                    <!--        Edit Profile Settings-->
                    <!--    </a>-->
                    <!--{/if}-->
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-10 offset-md-1">
                @[user]/_layout.svelte
                <!--                                this is @[user]/index.svelte-->
                <slot/>
            </div>
        </div>
    </div>
</div>
