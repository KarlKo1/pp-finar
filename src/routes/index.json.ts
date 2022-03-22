// import type { RequestHandler } from '@sveltejs/kit';
// import { api } from '$lib/_api';
//
// // GET /todos.json
// export const get: RequestHandler = async (request) => {
//     // request.locals.userid comes from src/hooks.js
//
//     let rasta = {
//         email: "rein@puhastusproff.ee",
//         password: "ree"
//     }
//     const response = await api(request, rasta);
//
//     if (response.status === 404) {
//         // user hasn't created a todo list.
//         // start with an empty array
//         return { body: [] };
//     }
//
//     return response;
// };