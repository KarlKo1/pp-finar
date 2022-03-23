import prisma from '$lib/prisma'

async function send({method, path, data, token}) {
    console.log('file: lib/api.ts')
    const opts = {method, headers: {}};

    const email = data.user.email;
    const sentUserPw = data.user.password;

    if (data) {
        opts.headers['Content-Type'] = 'application/json';
        opts.body = JSON.stringify(data);
    }

    if (token) {
        opts.headers['Authorization'] = `Token ${token}`;
    }

    // if (!token) {
    //     return {error: "Token error"}
    // }
    if (!token) {
        opts.headers['Authorization'] = `Token 123abc`
    }

    // I dunno
    if (method === 'GET') {
        // uses findMany. assuming email is unique for all
        const userFromdb = await prisma.users.findFirst({
            select: {
                name: true,
                // token: true,
            },
            where: {
                name: `${email}`
            }
        })
    }

    // Login
    if (path === 'login') {
        let dbUser;

        const dbFind = async (email: string, userPw: string) => {
            if (email === undefined && userPw === undefined) {
                return {
                    status: 400,
                    body: "We sense no email or password in your request"
                }
            }

            // uses findMany. assuming email is unique for all
            const userFromdb = await prisma.users.findFirst({
                select: {
                    email: true,
                    name: true,
                    password: true,
                    // token: true,
                },
                where: {
                    email: `${email}`
                }
            })
            console.log('eeeeeeeeeeeeeeeeeeeee')
            console.log(userPw)
            console.log(userFromdb.password)

            if (userFromdb.password !== userPw) {
                return {
                    status: 402,
                    body: "Something went horribly wrong :("
                }
            }

            dbUser = {
                email: `${userFromdb.email}`,
                // password: `${userFromdb.password}`,
                username: `${userFromdb.name}`,
                // token: `${userFromdb.token}`
            }

            // return dbUser;

            // return {
            //     user: {
            //         email: `${dbUser.email}`,
            //         username: `${dbUser.name}`,
            //         password: `${dbUser.password}`,
            //         token: `${dbUser.token}`
            //     }
            // }

        }
        await dbFind(email, sentUserPw)
        dbUser = {user: dbUser};
        console.log("--- api.ts sent: ---")
        console.log(dbUser)

        return dbUser
    }
}

export function get(path, token) {
    console.log('--- GET something ---')
    console.log(path)
    console.log(token)
    return send({method: 'GET', path, token});
}

export function post(path, data, token?) {
    return send({method: 'POST', path, data, token});
}

//
// export function del(path, token) {
//     return send({method: 'DELETE', path, token});
// }
//
// export function put(path, data, token) {
//     return send({method: 'PUT', path, data, token});
// }
