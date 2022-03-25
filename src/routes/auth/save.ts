// import * as api from '$lib/api.ts';
import * as api from '$lib/api';
import {respond} from './_respond';

export async function post({request, locals}) {
    console.log(`\nfile: auth/save.ts`)

    if (!locals.user) {
        return {
            status: 401
        };
    }

    const user = await request.json();
    const {token} = locals.user;
    console.log(locals)
    console.log(user)
    // console.log(token)
    // console.log({token})

    const body = await api.put(
        'settings',
        {
            sentData: user,
            // select: {
            //     username: true,
            //     email: true,
            //     password: true,
            //     bio: true,
            // },
            where: {
                email: user.email
            },
            data: {
                username: user.username,
                email: user.email,
                bio: user.bio,
                password: user.password
            },
            update: true,
            table: 'users'
        },
        token
    );

    console.log(`\n--- save.ts post caught: ---`)
    console.log(body)

    return respond(body);
}
