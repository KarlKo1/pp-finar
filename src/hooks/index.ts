import {logger} from '$lib/logger'
import * as cookie from 'cookie';

export async function handle({ event, resolve }) {
	logger('debug', `hooks handle()`)

	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	const jwt = cookies.jwt && Buffer.from(cookies.jwt, 'base64').toString('utf-8');
	event.locals.user = jwt ? JSON.parse(jwt) : null;
	// logger('warn', await resolve(event))

	return await resolve(event);
}

export function getSession({ locals }) {
	logger('debug', `hooks getSession()`)

	return {
		user: locals.user && {
			username: locals.user.username,
			email: locals.user.email,
			bio: locals.user.bio
		}
	};
}

