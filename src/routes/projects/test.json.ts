
export function get(){

  return {
            status: 200,
            header: {
                'Content-Type': 'application/json'
            },
            body: {
                test: "working"
            }
        }
}