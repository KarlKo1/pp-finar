import * as api from '$lib/api';

export async function get({params, locals}) {
    console.log(`\nfile: @user/index.json.ts`)

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


    console.log(`\n--- index.json.ts returns: ---`)
    console.log(profile)

    return {
        body: profile
    };
}
