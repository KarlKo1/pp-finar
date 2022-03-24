import * as api from '$lib/api';
import {respond} from './_respond';

export const post = async ({request}) => {
    console.log("file: auth/login.ts")

    const json = await request.json();
    const body = await api.post('login', {
        user: {
            email: json.email,
            password: json.password
        }
    });

    console.log("--- login.ts post caught: ---")
    console.log(body)

    return respond(body);
}