import { Link, NavLink } from "react-router-dom"

export default function Header () {
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
            <div>
                <Link to="/Pets/Add">
                    Add Pet
                </Link>
            </div>
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
        </div>
    )
}