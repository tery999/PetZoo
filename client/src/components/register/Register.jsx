import { useState } from "react";
import * as styles from "./register.module.css"
import * as userService from "../../services/userService"

export default function Register() {
    const [register, setRegister] = useState({
        username: "",
        password: "",
        repeatPassword: ""
    });

    const [PassError, setPassError] = useState(false);


    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRegister(state => ({ ...state, [name]: value }))
    }


    const registerSubmitHandler = (e) => {
        // console.log(register);
        e.preventDefault();
        if (register.password !== register.repeatPassword) {
            setPassError(true);
            return;
        }
        userService.register(register);

    }
    return (
        <div className={styles.registerContainer}>
            <form className={styles.registerForm} onSubmit={registerSubmitHandler}>
                <label htmlFor="username"> Username
                    <input type="text" name="username" id="username"
                        onChange={changeHandler}
                        value={register.username} />
                </label>

                <label htmlFor="password"> Password
                    <input type="password" name="password" id="password"
                        onChange={changeHandler}
                        value={register.password} />
                </label>

                <label htmlFor="repeatPassword">Repeat Password
                    <input type="repeatPassword" name="repeatPassword" id="repeatPassword"
                        onChange={changeHandler}
                        value={register.repeatPassword} />
                </label>

                {PassError === true &&
                    <p>Password missmatch!</p>
                }


                <div>
                    <input type="submit" />
                </div>

            </form>
        </div>
    )
}