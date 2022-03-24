import prisma from '$lib/prisma'

function getHeaders(opts) {
    return Object.entries(opts.headers).reduce((prev, [key, value]) => prev + key + ": " + value + "\n", '');
}

async function send({method, path, data, token}) {
    console.log('file: lib/api.ts')

    const opts = {method, headers: {}};
    let dbReturn: any;
    // const sentUserEmail = data.user.email;
    // const sentUserPw = data.user.password;

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

    if (path === 'users') {
        const dbGetAll = async () => {
            const queryJson = await prisma.users.findMany({})
            return queryJson
        }

        dbReturn = await dbGetAll()
    }

    // // basically SQL get one
    // const dbGetOne = async (criteria) => {
    //     const queryJson = await prisma.dbTable.findFirst({
    //         where: {
    //             criteria
    //         }
    //     })
    // }
    //
    // // basically SQL get all
    // const dbGetAll = async (criteria) => {
    //     const queryJson = await prisma.dbTable.findMany({
    //         where: {
    //             criteria
    //         }
    //     })
    // }
    //
    // if (path === 'test') {
    //     console.log('hehe')
    // }
    //
    // if (method === 'GET') {
    //     console.log('--- api send() GET ---')
    //
    // }
    //
    // if (method === 'POST') {
    //     console.log('--- api send() POST ---')
    //
    // }

    console.log("--- api.ts return: ---")
    console.log(dbReturn)
    return dbReturn
}

export function get(path/*, token*/) {
    console.log('--- api.ts GET ---')
    console.log(`--- GET path: ${path} ---`)
    return send({method: 'GET', path, data: 'e', token: 'e'});
}

export function post(path, data, token?) {
    console.log('--- api.ts POST ---')
    console.log(`--- POST path: ${path} ---`)
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

// export function handleError(message, httpStatus = 0) {
//     let errText
//     let errJson
//
//     if (isJSON(message)) {
//         errJson = JSON.parse(message)
//         httpStatus = errJson.httpStatus ? errJson.httpStatus : httpStatus
//         errText = JSON.stringify(errJson.error)
//     } else {
//         errText = message
//         errJson = {httpStatus, error: errText}
//     }
//
//     console.log(JSON.stringify(errJson))
//     console.log("\n");
//     if (httpStatus.toString().charAt(0) !== '4') {
//         console.trace()
//     }
//
//     // process might be node, potential error/problem
//     if (process.browser) {
//         console.log('Error ' + httpStatus + ": " + errText)
//     }
//
//     return errJson
// }