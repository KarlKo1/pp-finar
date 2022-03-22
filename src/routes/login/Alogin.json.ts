// import {PrismaClient} from "@prisma/client";
//
// export async function post(data: any) {
//     const prisma = new PrismaClient();
//
//     const users = await prisma.eREmployee.findFirst({
//         where: {
//             AND: [{
//                 E_MAIL: {
//                     contains: `${data.email}`
//                 },
//                 U_password: {
//                     contains: `${data.password}`
//                 }
//             }]
//         }
//     })
//
//
//     if (users !== undefined) {
//         return {
//             status: 200,
//             header: {
//                 'Content-Type': 'application/json'
//             },
//             body: {
//                 email: data.email,
//                 password: data.password
//             }
//         }
//     }
//
//     return {
//         status: 400,
//         header: {
//             'Content-Type': 'application/json'
//         },
//         body: "fuck you"
//     }
// }