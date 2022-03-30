import * as api from '$lib/api';

export async function get({params, locals}) {
    console.log(`\nfile: projects/index.json.ts`)

    const projects = await api.get(
        `projects`,
        {
            sentData: params,
            select: {
                // ID: true,
                // NAME: true,
                GRComment: {
                    // select: {
                    //     ID: true,
                    //     IDGRPROJECT: true
                    // }
                }

            },
            where: {
                ID: {in: [107, 108]}
            },
            findMany: true,
            table: 'gRProject'
        },
        locals.user && locals.user.token
    );


    console.log(`\n--- projects/index.json.ts returns: ---`)
    console.log(projects)

    return {
        body: projects
    };
}
