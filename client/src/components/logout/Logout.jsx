import { useContext } from "react"
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";


export default function Logout () {
    const {changeAuthHandler} = useContext(UserContext);
    const navigate = useNavigate();
    localStorage.removeItem("UserInfo");
    changeAuthHandler(null);
    navigate("/");

    return (
        null
    )
}