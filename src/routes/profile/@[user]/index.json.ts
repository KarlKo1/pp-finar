import {logger} from '$lib/logger'
import * as api from '$lib/api';

export async function get({params, locals}) {
    logger('debug', `file: @user/index.json.ts`)

    // console.log(`\n--- @user/index.json.ts params ---`)
    // console.log(params.user)

    // const {profile} = await api.get(
    const profile = await api.get(
        `profiles/${params.user}`,
        {
            sentData: params,
            select: {
                username: true,
                bio: true
            },
            where: {
                username: params.user
            },
            findFirst: true,
            table: 'users'
        },
        locals.user && locals.user.token
    );


    logger('debug',`--- index.json.ts returns: ---`)
    logger('info',profile)

    return {
        body: profile
    };
}
