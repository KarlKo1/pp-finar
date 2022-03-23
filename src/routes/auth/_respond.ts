export function respond(body) {
	console.log("file: auth/_respond.ts")
	//
	// // force fake stop
	// return { status: 401, body };


	if (body.errors) {
		return { status: 401, body };
	}

	const json = JSON.stringify(body.user);
	// console.log("--- _respond.ts caught: ---")
	// console.log(json)
	const value = Buffer.from(json).toString('base64');

	return {
		headers: {
			'set-cookie': `jwt=${value}; Path=/; HttpOnly`
		},
		body
	};
}
