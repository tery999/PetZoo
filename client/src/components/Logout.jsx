import { useContext } from "react"
import { UserContext } from "../contexts/userContext";


export default function Logout () {
    const {changeAuthHandler} = useContext(UserContext);
    localStorage.removeItem("UserInfo");
    changeAuthHandler(null);
    return (
        null
    )
}