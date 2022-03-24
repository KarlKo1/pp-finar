import type {Prisma} from "@prisma/client";
import PrismaClientPkg from "@prisma/client";

const PrismaClient = PrismaClientPkg.PrismaClient;
const prisma = new PrismaClient();

    // POST login example
const main = async ({method, path, data2}) => {
    const dbTable = 'users';
    // data will be given from GET, this is for testing
    let data = {
        user: {
            email: "asdfe@asdfe.com",
            password: "asdfe"
        },
        select: {
            // email: true
            password: false
        },
        where: {
            // email: this.user.email
            email: () => {
                return data.user.email
            }
        }
    };
    let criteria;

    // if given object does not have select property
    if (!data.hasOwnProperty('select')) {
        criteria = {
            where: {
                email: () => {
                    return data.user.email
                }
            }
        }
    } else {
        criteria = {
            // select: {
            //     data.select
            // },
            // where: {
            //     data.where
            // }
            select: {},
            where: {}
        }
    }

    // @ts-ignore
    const prismaGot = await prisma.dbTABLE.findFirst({
        criteria
    });

    console.log(prismaGot)
}

    // GET example
const main2 = async ({method, path, data2}) => {
}

// POST
await main({method: 'POST', path: 'lib/users', data2: 'null'})
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        // @ts-ignore
        await prisma.$disconnect()
    })

// GET
await main2({method: 'GET', path: 'lib/users', data2: 'null'})
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        // @ts-ignore
        await prisma.$disconnect()
    })
