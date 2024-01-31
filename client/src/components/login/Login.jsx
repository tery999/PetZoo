import { useState } from "react"
import * as styles from "./login.module.css"
import * as userService from "../../services/userService"

export default function Login() {
    const [login, setLogin] = useState({
        username: "",
        password: ""
    });

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin(state => ({ ...state, [name]: value }))
    }

    const loginSubmitHandler = async(e) => {
        debugger; 
            e.preventDefault();
           const loginInformation =  await userService.login(login);
           console.log(loginInformation);

    }
    return (
        <div className={styles.loginContainer}>
            <form className={styles.loginForm} onSubmit={loginSubmitHandler}>
                <label htmlFor="username"> Username
                    <input type="text" name="username" id="username"
                     onChange={changeHandler}
                     value={login.username} />
                </label>

                <label htmlFor="password"> Password
                    <input type="password" name="password" id="password" 
                     onChange={changeHandler}
                     value={login.password}/>
                </label>


                <div>
                    <input type="submit" />
                </div>

            </form>
        </div>
    )
}