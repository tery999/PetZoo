import { Navigate, Outlet} from "react-router-dom"

export default function PrivateRoutes ({logged}) {
    debugger;
    const localStorageToken = localStorage.getItem("UserInfo");
    if (!logged && localStorageToken === null) {
        return <Navigate to="/Login" />;
    }

    return <Outlet/> ;
}