import * as api from '$lib/api';
import {respond} from './_respond';

export const post = async ({request}) => {
    console.log(`\nfile: auth/login.ts`)
    const json = await request.json();
    const body = await api.post('login', {
        sentData: json,
        select: {
            username: true,
            email: true,
            password: true,
            bio: true,
        },
        where: {
            email: json.email
        },
        findFirst: true,
        table: 'users'
    });

    console.log(`\n--- login.ts post caught: ---`)
    console.log(body)

    return respond(body);
}