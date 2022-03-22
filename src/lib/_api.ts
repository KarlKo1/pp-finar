import type {RequestEvent} from '@sveltejs/kit';
import {PrismaClient} from '@prisma/client'

export async function api(event: RequestEvent, data?: any) {
    const prisma = new PrismaClient();
    let body = {};
    let status = 500;

    switch (event.request.method.toUpperCase()) {
        case 'GET':
            body = await prisma.eREmployee.findMany({
                select: {
                    U_password: true,
                    E_MAIL: true
                },
                where: {
                    E_MAIL: "asdfe@asdfe.com"
                }
            });
            status = 200;
            break;
        case 'POST':
            // const bufferedPassword = Buffer.from(data.password, "utf-8");
            //
            // body = await prisma.eREmployee.findMany({
            //     where: {
            //         AND: [
            //             {
            //                 E_MAIL: {
            //                     contains: data.email,
            //                 },
            //             },
            //             {
            //                 U_password: {
            //                     // contains: bufferedPassword,
            //                     equals: data.password,
            //                 }
            //             }
            //         ]
            //     }
            // })
            // status = 269

            status = 200;
            break;
    }

    if (
        event.request.method !== 'GET' &&
        event.request.headers.get('accept') !== 'application/json'
        ||
        event.request.method !== 'POST' &&
        event.request.headers.get('accept') !== 'application/json'
    ) {
        return {
            status: 400,
            headers: {
                // location: '/login'
            },
            body: {
                error: "something broke"
            }
        };
    }


    return {
        status,
        body
    };
}
