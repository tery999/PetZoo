import { useState } from "react"
import * as styles from "./login.module.css"
import * as userService from "../../services/userService"

export default function Login() {
    const [login, setLogin] = useState({
        username: "",
        password: ""
    });

    // const loginSubmitHandler = (e) => {
    //         e.preventDefault();
    //         userService.register(login);

    // }
    return (
        <div className={styles.loginContainer}>
            <form className={styles.loginForm} onSubmit={loginSubmitHandler}>
                <label htmlFor="username"> Username
                    <input type="text" name="username" id="username" />
                </label>

                <label htmlFor="password"> Password
                    <input type="password" name="password" id="password" />
                </label>


                <div>
                    <input type="submit" />
                </div>

            </form>
        </div>
    )
}