import {logger} from "$lib/logger";

export function respond(body) {
	logger('debug', `file: auth/_respond.ts`)

	//  TODO: Remove. added for dynamic api testing
	// console.log("--- _respond.ts Force stop ---")
	// // force fake stop
	// return { status: 401, body };

	if (body.errors) {
		return { status: 401, body };
	}

	// const json = JSON.stringify(body.user);
	const json = JSON.stringify(body);
	const value = Buffer.from(json).toString('base64');

	logger('debug', `--- _respond.ts caught: ---`)
	logger('info', json)

	return {
		headers: {
			'set-cookie': `jwt=${value}; Path=/; HttpOnly`
		},
		body
	};
}
