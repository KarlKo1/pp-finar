// const bcrypt = require('bcrypt');
import * as bcrypt from 'bcrypt'

// import {PrismaClient} from '@prisma/client'
// const prisma = new PrismaClient();

import prisma from '$lib/prisma'

async function main(email: string, pw: string) {
    const userEmail = email;
    const userPw = pw;

    // uses findMany. assuming email is unique for all
    const users = await prisma.users.findMany({
        select: {
            email: true,
            password: true
        },
        where: {
            email: `${userEmail}`
        }
    })

    // console.dir(`Prisma email1: ${JSON.stringify(users)}`)
    // console.dir(`Prisma email2: ${JSON.stringify(users[0])}`)
    // Uses first gotten query data's email. Assuming it only found 1 in the first place (unique email)
    console.dir(`Prisma email1: ${users[0].email}`)
    const dbUser = users[0];

    // Validate user
    // if (!user || !await bcrypt.compare(req.body.password, user.password)) {
    //     return res.status(401).json({error: 'Invalid username/password'})
    // }
    if (userPw !== dbUser.password) {
        // return Response.status(401).json({error: 'Invalid username/password'})
        // should return with json?
        return {
            status: 401,
            error: 'Unauthorized:Invalid username/password '
        }
    }

    return {
        status: 202,
        body: {
            login: "Accepted"
        }
    };
}


export const post = async ({request}) => {
    const data = await request.json()
    const userEmail = data.email;
    const userPw = data.password;

    console.log('\n') // casual new line :)
    console.dir(`Post email: ${userEmail}`)

    return await main(userEmail, userPw)
        .catch((e) => {
            throw e
        })
        .finally(async () => {
            await prisma.$disconnect()
        })


    // return {
    //     status: ,
    //     body: {
    //         login: `${}`
    //     }
    // }
    // return {
    //     status: 201,
    //     body: {
    //         login: "Accepted"
    //     }
    // };
}