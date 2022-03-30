import * as api from '$lib/api';
import {respond} from './_respond';
import {logger} from "$lib/logger";

export const post = async ({request}) => {
    logger('debug', `file: auth/login.ts`)
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

    logger('debug',`--- login.ts post caught: ---`)
    logger('info',body)

    return respond(body);
}