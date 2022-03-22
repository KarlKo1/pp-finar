import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export async function get() {
    const users = await prisma.users.findMany({
        select: {
            email: true,
            password: true
        },
        where: {
            email: "asdfe@asdfe.com"
        }

    })

    return {
        status: 200,
        header: {
            'Content-Type': 'application/json'
        },
        body: {users}
    }
}

// import {PrismaClient} from '@prisma/client'
// // import type {Prisma} from "@prisma/client";
// // import PrismaClientPkg from "@prisma/client";
// // const PrismaClient = PrismaClientPkg.PrismaClient;
// const prisma = new PrismaClient();
//
// async function main() {
//     const users = await prisma.users.findMany({
//         select: {
//             email: true,
//             password: true
//         },
//         where: {
//             email: "asdfe@asdfe.com"
//         }
//     })
//     console.dir(users)
// }
//
// main()
//     .catch((e) => {
//         throw e
//     })
//     .finally(async () => {
//         await prisma.$disconnect()
//     })
