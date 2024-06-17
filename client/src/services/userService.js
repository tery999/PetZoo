let tokenFunc = () => {
    return JSON.parse(localStorage.getItem("UserInfo") );
   }

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
    debugger
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

export async function findUserInfo() {
    debugger;
    const tokenData = tokenFunc();
    const userId = tokenData.userId;
     const URL = `http://localhost:3030/Users/profileInfo/${userId}`;
     const response = await fetch(URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
     });
     const data = await response.json();
     return data;
}

export async function updateUserImg(updatedImg) {
    debugger;
    const tokenData = tokenFunc();
    const userId = tokenData.userId;
    const URL = `http://localhost:3030/Users/profileInfo/${userId}`;
    const response = await fetch(URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : tokenData.token,
          },
          body: JSON.stringify({updatedImg:updatedImg})
     });
     const data = await response.json();
     console.log("UPDATED IMG RESPONSE", data);
     return data;
}