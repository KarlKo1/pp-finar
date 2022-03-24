import * as api from '$lib/api'

export const get = async () => {

    console.log("file: test/getUsers.ts")

    const body = await api.get('users');
    // const bodyJson = await body.json()

    console.log("--- getUsers.ts get caught: ---")
    // console.log(bodyJson)
    console.log(body)

    return {
        body
    }

    // return {
    //     body: {
    //         body
    //     }
    // }
}