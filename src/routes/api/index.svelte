<script context="module">
    export async function load({url, fetch}) {
        const response = await fetch('/api/brr')
        const {users: poopDispenser} = await response.json()
        console.dir(poopDispenser)

        return {
            props: {
                poopDispenser
            }
        };
    }
</script>

<script>
    import {onMount} from 'svelte';

    export let poopDispenser
    let usersList = [];
    // for (let user in users) {
    //     usersList.push(users[user].name)
    //     console.log(users[user].name)
    // }

    usersList.push(JSON.stringify(poopDispenser[0]))
    console.log(poopDispenser[0])

    const postPassword = async (pw, email) => {
        email = "basalt";
        pw = "basalt";

        let theData;

        await fetch('/api/brr')
        .then(res => console.log(res.json))
        .then(data => theData = data)

        console.log(theData)

        return {
            props: {
                theData
            }
        };
    }

    onMount(async () => {
        const putBtn = document.getElementById('putter')

        putBtn.addEventListener("click", () => {
            postPassword()
        })

        // console.log(users)
        let userDiv = document.getElementById('userList')
        // userDiv.innerHTML = JSON.stringify(users);
        userDiv.innerHTML = `${usersList}`;
    });


</script>

<div id="userList">
    Loading...
</div>

<div id="putButton">
    <button id="putter">PUT</button>
</div>