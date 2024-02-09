import { useContext, useState } from "react"
import * as styles from "./login.module.css"
import * as userService from "../../services/userService"
import { UserContext } from "../../contexts/userContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat, faShieldDog } from "@fortawesome/free-solid-svg-icons"
import { faPaw } from "@fortawesome/free-solid-svg-icons"
export default function Login() {
    const {changeAuthHandler} = useContext(UserContext);
    const [error, setError] = useState(false);
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
            if (login.username.trim() === "" || login.password.trim() === "") {
                setError(true);
                return;
            }
            try {
           const loginInformation =  await userService.login(login);
           localStorage.setItem("UserInfo", JSON.stringify(loginInformation));
           changeAuthHandler(loginInformation);
           console.log("THIS IS OBJECT IN LOGINSUBMITHANDLER",loginInformation);
            } catch (err) {
                setError(true);
            }

    }
    return (
        <div className={styles.loginContainer}>
            <form className={styles.loginForm} onSubmit={loginSubmitHandler}>
                <label className={styles.labelColumn} htmlFor="username"> Username
                    <input type="text" name="username" id="username"
                     onChange={changeHandler}
                     value={login.username} />
                     <FontAwesomeIcon icon={faCat } size="lg" className={styles.loginIcon}/>
                </label>

                <label className={styles.labelColumn} htmlFor="password"> Password
                    <input type="password" name="password" id="password" 
                     onChange={changeHandler}
                     value={login.password}/>
                     <FontAwesomeIcon icon={faShieldDog } size="lg" className={styles.loginIcon}/>
                </label>


                <div className={styles.submitButtonDiv}>
                    <input type="submit" value="Login" className={styles.submitButton}/>
                    <FontAwesomeIcon icon={faPaw } size="lg" className={styles.buttonIcon} />
                </div>
                {error && <p className={styles.errorMsg}>Invalid username or password</p> }

            </form>
        </div>
    )
}