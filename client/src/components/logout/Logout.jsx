import { useContext, useEffect } from "react"
import { UserContext } from "../../contexts/userContext";
import { Navigate , useNavigate } from "react-router-dom";


export default function Logout () {
    const navigate = useNavigate();
    const {changeAuthHandler} = useContext(UserContext);
    localStorage.removeItem("UserInfo");
    changeAuthHandler(null);

    useEffect ( ()=> {
        if (changeAuthHandler === null ) {
            navigate("/");
        }
    },[])

    return (
        <Navigate to="/" />
    )
}