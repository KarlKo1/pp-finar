const base = 'https://conduit.productionready.io/api';
// const base = 'http://localhost:3000/api'
import {PrismaClient} from '@prisma/client'
// import type {Prisma} from "@prisma/client";
// import PrismaClientPkg from "@prisma/client";

async function send({method, path, data, token}) {

    // const PrismaClient = PrismaClientPkg.PrismaClient;
    // const prisma = new PrismaClient();

    async function main() {
        // await prisma.User.create({
        //     data: {
        //         uid: 'fafafa',
        //         created_at: new Date,
        //         text: 'foo',
        //         done: true,
        //     },
        // })

        // const allUsers = await prisma.User.findMany({})
        // console.dir("api lodaded? reee");
        // const products = await prisma.User.findMany({});
        // console.dir(products)
    }


    // main()
    //     .catch((e) => {
    //         throw e
    //     })
    //     .finally(async () => {
    //         await prisma.$disconnect()
    //     })

    const opts = {method, headers: {}};

    if (data) {
        opts.headers['Content-Type'] = 'application/json';
        opts.body = JSON.stringify(data);
    }

    if (token) {
        opts.headers['Authorization'] = `Token ${token}`;
    }

    return fetch(`${base}/${path}`, opts)
        .then((r) => r.text())
        .then((json) => {
            try {
                return JSON.parse(json);
            } catch (err) {
                return json;
            }
        });
}

export function get(path, token) {
    return send({method: 'GET', path, token});
}

export function del(path, token) {
    return send({method: 'DELETE', path, token});
}

export function post(path, data, token) {
    return send({method: 'POST', path, data, token});
}

export function put(path, data, token) {
    return send({method: 'PUT', path, data, token});
}

export function handleError(message, httpStatus = 0) {
    let errText
    let errJson

    if (isJSON(message)) {
        errJson = JSON.parse(message)
        httpStatus = errJson.httpStatus ? errJson.httpStatus : httpStatus
        errText = JSON.stringify(errJson.error)
    } else {
        errText = message
        errJson = {httpStatus, error: errText}
    }

    console.log(JSON.stringify(errJson))
    console.log("\n");
    if (httpStatus.toString().charAt(0) !== '4') {
        console.trace()
    }

    if (process.browser) {
        console.log('Error ' + httpStatus + ": " + errText)
    }

    return errJson
}


export function prismaGet(path, token) {
    return prismaSend({method: 'GET', path, token});
}

export function prismaSend({method, path, data, token}) {
    const prisma = new PrismaClient();


    let ratata;
    async function main() {
        const allUsers = await prisma.user.findMany({})
        console.dir(allUsers, {depth: null})

        ratata = await allUsers;

        return ratata
    }
    main()
        .catch((e) => {
            throw e
        })
        .finally(async () => {
            await prisma.$disconnect()
        })

    const opts = {method, headers: {}};

    if (data) {
        opts.headers['Content-Type'] = 'application/json';
        opts.body = JSON.stringify(data);
    }

    if (token) {
        opts.headers['Authorization'] = `Token ${token}`;
    }

    return ratata

    // return fetch(`/${path}`, opts)
    //     .then((r) => r.text())
    //     .then((json) => {
    //         try {
    //             return JSON.parse(json);
    //         } catch (err) {
    //             return json;
    //         }
    //     });
}
