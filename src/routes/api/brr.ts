// // import type {Prisma} from "@prisma/client";
// // import PrismaClientPkg from "@prisma/client";
// // const PrismaClient = PrismaClientPkg.PrismaClient;
// import {PrismaClient} from '@prisma/client'
//
// const prisma = new PrismaClient();
//
// // export let users: any;
//
// async function get() {
//     const users = await prisma.eREmployee.findMany({
//         select: {
//             U_password: true,
//             E_MAIL: true
//         },
//         where: {
//             E_MAIL: "asdfe@asdfe.com"
//         }
//
//     })
//
//     return {
//         status: 200,
//         header: {
//             'Content-Type': 'application/json'
//         },
//         body: {users}
//     }
// }
//
// export async function post(data: any) {
//     // data.password = "ree"
//     const bufferedPassword = Buffer.from(data.password, "utf-8");
//
//     await prisma.eREmployee.updateMany({
//         where: {
//             E_MAIL: {
//                 contains: data.email,
//             }
//         },
//         data: {
//             U_password: bufferedPassword,
//         },
//     })
//
//     return {
//         status: 201,
//         header: {
//             'Content-Type': 'application/json'
//         },
//         body: {
//             msg: "great success"
//         }
//     }
// }
