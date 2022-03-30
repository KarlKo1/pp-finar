import prisma from '$lib/prisma'
import {logger} from "./logger";

function getHeaders(opts) {
    return Object.entries(opts.headers).reduce((prev, [key, value]) => prev + key + ": " + value + "", '');
}

async function send({method, path, data, token}) {
    logger('debug', `file: lib/api.ts`)
    logger('info', `path: ${path}`)

    const opts = {method, headers: {}};
    let dbReturn: any;

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
    // if (!token) {
    //     opts.headers['Authorization'] = `Token 123abc`
    // }

    const dbTable = data.table;

    logger('debug', `--- api.ts work data: ---`)
    logger('info', `${data}`)

    let criteria;

    // if data has select specifics
    if (data.hasOwnProperty('select')) {
        criteria = {
            select: data.select
        }
    }

    // if data has where specifics
    if (data.hasOwnProperty('where')) {
        criteria = {
            where: data.where
        }
    }

    // if data has where and select specifics
    // has to come after select and where ifs, to replace with both in
    if (
        data.hasOwnProperty('where') &&
        data.hasOwnProperty('select')
    ) {
        criteria = {
            select: data.select,
            where: data.where
        }
    }

    if (
        data.hasOwnProperty('where') &&
        data.hasOwnProperty('data')
    ) {
        criteria = {
            where: data.where,
            data: data.data
        }
    }

    // Prisma findFirst MUST have select
    if (data.findFirst === true) {
        // basically SQL get one
        const dbGetOne = async (dbTable, criteria) => {
            const queryJson = await prisma[dbTable].findFirst({
                select: criteria.select,
                where: criteria.where
            })
            dbReturn = await queryJson;
        }
        await dbGetOne(dbTable, criteria)
    }

    if (data.findMany === true) {
        // basically SQL get all
        const dbGetAll = async (dbTable, criteria) => {
            const queryJson = await prisma[dbTable].findMany({
                select: criteria.select,
                where: criteria.where
            })
            dbReturn = queryJson;
        }
        await dbGetAll(dbTable, criteria)
    }

    if (data.update === true) {
        // basically SQL update
        const dbGetAll = async (dbTable, criteria) => {
            const queryJson = await prisma[dbTable].update({
                where: criteria.where,
                data: criteria.data
            })
            dbReturn = queryJson;
        }
        await dbGetAll(dbTable, criteria)
    }

    // if (path === 'test') {
    //     console.log('HEEeeHEEee')
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

    // if (method === 'PUT') {
    //     console.log('--- api send() PUT ---')
    // }

    // Login specifics and checks
    if (path === 'login') {
        if (
            dbReturn === null ||
            dbReturn.password.localeCompare(data.sentData.password) <= -1
        ) {
            console.log('in login error')
            dbReturn = {
                errors: 'Incorrect password or email'
            }
        } else {
            console.log('no login error')
            dbReturn = {
                user: dbReturn
            }
        }
    }

    logger('debug', `--- api.ts return: ---`)
    logger('info', `${dbReturn}`)
    return dbReturn
}

export function get(path, data, token) {
    logger('debug', `--- api.ts GET ---`)
    // console.log(`--- GET path: ${path} ---`)
    return send({method: 'GET', path, data, token});
}

export function post(path, data, token?) {
    logger('debug', `--- api.ts POST ---`)
    // console.log(`--- POST path: ${path} ---`)
    return send({method: 'POST', path, data, token});
}

export function put(path, data, token) {
    logger('debug', `--- api.ts PUT ---`)
    // logger('info', `${token}`)
    return send({method: 'PUT', path, data, token});
}

// export function del(path, token) {
//     return send({method: 'DELETE', path, token});
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
//     console.log("");
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