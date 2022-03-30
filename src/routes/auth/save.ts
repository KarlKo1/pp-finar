// import * as api from '$lib/api.ts';
import * as api from '$lib/api';
import {respond} from './_respond';
import {logger} from "$lib/logger";

export async function post({request, locals}) {
    logger('debug', `file: auth/save.ts`)

    if (!locals.user) {
        return {
            status: 401
        };
    }

    const user = await request.json();
    const {token} = locals.user;
    // logger('warn',{token})

    const body = await api.put(
        'settings',
        {
            sentData: user,
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

    logger('debug',`--- save.ts post caught: ---`)
    logger('info', body)

    return respond(body);
}
