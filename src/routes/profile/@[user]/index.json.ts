import * as api from '$lib/api';

export async function get({ params, locals }) {
    // console.log('--- params ---')
    // params = {user: 'userInUrl'}
    // console.log(params)
    const { profile } = await api.get(`profiles/${params.user}`, locals.user && locals.user.token);

    return {
        body: profile
    };
}
