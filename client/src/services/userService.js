export async function register(user) {
    // debugger;
    const URL = `http://localhost:3030/Users/Register`
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })

        if (response.status === 409) {
            let userExistError = await response.json();
            throw userExistError;
        }

        const data = await response.json();
    } catch (err) {
        throw err ;
    }
}

export async function login(user) {
    // debugger
    const URL = `http://localhost:3030/Users/Login`
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })

        if (!response.ok) {
            throw Error("Invalid login")
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        throw Error("Invalid Login 2");
    }
}