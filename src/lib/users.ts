// import * as api from '$lib/api';
//
// export const get = async ({request}) => {
//     console.log("file: lib/users.ts")
//
//     const json = await request.json();
//     const body = await api.get('test');
//
//     console.log("--- login.ts post caught: ---")
//     console.log(body)
//
//     return respond(body);
// }

import * as api from '$lib/api';

export const get = async ({request}) => {
    console.log("file: lib/users.ts")

    const json = await request.json();
    const body = await api.get('test');

    console.log("--- login.ts post caught: ---")
    console.log(body)

    return {
        body: {test:"success"}
    };
}

