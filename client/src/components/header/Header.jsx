import { Link, NavLink } from "react-router-dom"
import { UserContext } from "../../contexts/userContext"
import { useContext, useState } from "react";
import * as styles from "./header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from "@fortawesome/free-solid-svg-icons"
import { faMinus} from "@fortawesome/free-solid-svg-icons"


export default function Header() {
    const { logged } = useContext(UserContext);
   
    return (
        <div className={styles.header}>
            <div className={styles.menu}>
                <button className={styles.button}>   
                <FontAwesomeIcon icon={faBars} className={styles.icon}/>  
                <FontAwesomeIcon icon={faMinus} className={styles.minusIcon}/> Menu</button>
                <div className={styles.hiddenLinksDiv}>
                <Link to={"/"}>
                    Home
                </Link>
                <Link to={"/Pets"}>
                    Pets
                </Link>
                <Link to={"/"}>
                    Home
                </Link>
                </div>
            </div>

            <div className={styles.userLogInOut}>
                {!logged &&
                    <>
                        <div>
                            <Link to="/Login">
                                Login
                            </Link>
                        </div>
                        <div>
                            <Link to="/Register">
                                Register
                            </Link>
                        </div>
                    </>
                }

                {logged &&
                    <>
                        <div>
                            <Link to="/Logout">
                                Logout
                            </Link>
                        </div>
                    </>
                }
            </div>

        </div>
    )
}
