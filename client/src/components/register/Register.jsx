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
    const [emptyError, setEmptyError] = useState(false);
    const [serverError, setServerError] = useState();


    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRegister(state => ({ ...state, [name]: value }))
    }


    const registerSubmitHandler = async (e) => {
        // console.log(register);
        debugger;
        e.preventDefault();
        if (register.password !== register.repeatPassword) {
            setPassError(true);
            setEmptyError(false);
            return;
        }
        setPassError(false);

        if (register.password.trim() === "" || register.username.trim() === "") {
            setEmptyError(true);
            return;
        }
        setEmptyError(false);

        try {
           await userService.register(register);
        } catch (err) {
            setServerError(err.message)
        }
        

    };
    return (
        <div className={styles.registerContainer}>
            <form className={styles.registerForm} onSubmit={registerSubmitHandler}>
                <label className={styles.labelColumn} htmlFor="username"> Username
                    <input  type="text" name="username" id="username"
                        onChange={changeHandler}
                        value={register.username} />
                </label>

                {serverError &&
                    <p className={styles.errorMsg}>{serverError}</p>
                }

                <label className={styles.labelColumn} htmlFor="password"> Password
                    <input  type="password" name="password" id="password"
                        onChange={changeHandler}
                        value={register.password} />
                </label>

                <label className={styles.labelColumn} htmlFor="repeatPassword">Repeat Password
                    <input  type="password" name="repeatPassword" id="repeatPassword"
                        onChange={changeHandler}
                        value={register.repeatPassword} />
                </label>

                <div>
                    <input type="submit"  value="Register" className={styles.submitButton} />
                </div>

                {PassError === true &&
                    <p className={styles.errorMsg}>Password missmatch!</p>
                }

                {emptyError === true &&
                    <p className={styles.errorMsg}>Fill all fields!</p>
                }

            </form>
        </div>
    )
}