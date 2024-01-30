import { useState } from "react"
import * as styles from "./login.module.css"

export default function Login() {
    const [login, setLogin] = useState({
        username: "",
        password: ""
    });
    return (
        <div className={styles.loginContainer}>
            <form className={styles.loginForm}>
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