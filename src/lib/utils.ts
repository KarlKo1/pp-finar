export function post(endpoint, data) {
    console.log("file: lib/utils.ts")

    return fetch(endpoint, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(data || {}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((r) => r.json());
}

// await fetch('/auth/login', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({
//         email: `${email}`,
//         password: `${password}`
//     })
// })
//     .then(res => {
//         if (res.status === 202) {
//             alert("Very logged in")
//         }
//         if (res.status === 401) {
//             alert("Very wrong credentials")
//         }
//     })