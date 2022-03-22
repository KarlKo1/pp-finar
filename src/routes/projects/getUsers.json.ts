// import {PrismaClient} from '@prisma/client'
import type {Prisma} from "@prisma/client";
import PrismaClientPkg from "@prisma/client";
const PrismaClient = PrismaClientPkg.PrismaClient;

export async function get() {
    const prisma = new PrismaClient()

    let myusers: any;

    async function main() {

        const allUsers = await prisma.users.findMany({
            select: {
                email: true,
                password: true
            },
            where: {
                email: "asdfe@asdfe.com"
            }
        })
        console.dir(allUsers)
        myusers = allUsers;
    }

    main()
        .catch((e) => {
            throw e
        })
        .finally(async () => {
            await prisma.$disconnect()
        })

    return {
        status: 200,
        header: {
            'Content-Type': 'application/json'
        },
        body: {myusers}
    }
}
