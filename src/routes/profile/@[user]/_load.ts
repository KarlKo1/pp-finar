// export function create_load(endpoint) {
// 	return async ({ params, fetch }) => {
// 		const res = await fetch(`/profile/@${params.user}/${endpoint}.json`);
//
// 		return {
// 			props: await res.json()
// 		};
// 	};
// }
export function create_load(endpoint) {
	return async ({ params, fetch }) => {
		// const res = await fetch(`/profile/@${params.user}/${endpoint}.json`);

		return {
			props: "rastaman"
		};
	};
}
