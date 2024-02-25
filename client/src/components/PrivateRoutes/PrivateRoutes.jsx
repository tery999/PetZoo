import { Navigate, Outlet} from "react-router-dom"

export default function PrivateRoutes ({logged}) {
    debugger;
    if (!logged) {
        return <Navigate to="/Login" />;
    }

    return <Outlet/> ;
}