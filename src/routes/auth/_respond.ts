export function respond(body) {
	console.log(`\nfile: auth/_respond.ts`)

	//  TODO: Remove. added for dynamic api testing
	// console.log("--- _respond.ts Force stop ---")
	// // force fake stop
	// return { status: 401, body };

	if (body.errors) {
		return { status: 401, body };
	}

	const json = JSON.stringify(body.user);
	const value = Buffer.from(json).toString('base64');

	console.log(`\n--- _respond.ts caught: ---`)
	console.log(json)

	return {
		headers: {
			'set-cookie': `jwt=${value}; Path=/; HttpOnly`
		},
		body
	};
}
