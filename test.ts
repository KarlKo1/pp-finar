// @ts-ignore
import prisma from "$lib/prisma";


const main = async () => {
    const userEmail = "asdfe@asdfe.com"

    // @ts-ignore
    return await prisma.users.findFirst({
        select: {
            email: true,
            name: true,
            password: true,
            token: true,
        },
        where: {
            email: `${userEmail}`
        }
    });
}

// @ts-ignore
await main()