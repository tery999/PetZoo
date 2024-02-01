import { Link, NavLink } from "react-router-dom"
import { UserContext } from "../../contexts/userContext"
import { useContext } from "react";


export default function Header() {
    const { logged } = useContext(UserContext);
    return (
        <div>
            <div>
                <Link to="/">
                    Home
                </Link>
            </div>
            <div>
                <Link to="/Pets">
                    Pets
                </Link>
            </div>
            {logged &&
                <>
                    <div>
                        <Link to="/Pets/Add">
                            Add Pet
                        </Link>
                    </div>
                    <div>
                        <Link to="/Logout">
                            Logout
                        </Link>
                    </div>
                </>
                }
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

        </div>
    )
}