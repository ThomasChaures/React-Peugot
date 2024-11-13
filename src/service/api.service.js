export async function call({uri, method = "GET", body = undefined }){

    return fetch(`http://localhost:3333/api/${uri}`, {
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
        },
        method,
        body: JSON.stringify(body)
    })
    .then( async response => {
        if(!response.ok){
            if(response.status === 401){
                localStorage.removeItem('token')
            }
            throw await response.json()
        }
        return response.json()
    })

}