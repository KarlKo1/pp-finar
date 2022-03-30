export function post(endpoint, data) {
    return fetch(endpoint, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(data || {}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((r) => r.json());
}

// export function availableYears() {
//     let thisYear = new Date().getFullYear()
//     let years = []
//     for (let y = 2011; y <= thisYear; y++) {
//         years.push(y)
//     }
//     return years
// }