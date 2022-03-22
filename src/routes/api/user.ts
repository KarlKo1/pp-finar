// import type {Prisma} from "@prisma/client";
// import PrismaClientPkg from "@prisma/client";
// const PrismaClient = PrismaClientPkg.PrismaClient;
import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient();
// export let users: any;


export async function get() {

    const users = await prisma.eREmployee.findMany({
        select: {
            FIRSTNAME: true
        },
        where: {
            FIRSTNAME: "Asdfe"
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

// get()