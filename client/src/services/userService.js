export async function register(user) {
    const URL = `http://localhost:3030/Users/Register`
    const response = await fetch ( URL , {
        method: "POST" ,
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(user)
    })

    const data = await response.json();
}