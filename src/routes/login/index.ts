import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export async function get(data: any) {
    const users = await prisma.users.findMany({
        select: {
            email: true,
            password: true
        },
        where: {
            email: "asdfe@asdfe.com"
        }

    })

    console.dir(users)
    // if (data.email === users)

    return {
        status: 200,
        header: {
            'Content-Type': 'application/json'
        },
        body: {users}
    }
}