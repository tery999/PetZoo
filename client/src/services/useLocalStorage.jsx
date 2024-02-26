import { useEffect, useState } from "react";

export default function useLocalStorage() {
    debugger;
    const [auth, setAuth] = useState({});

    useEffect( ()=> {
        if(localStorage.getItem("UserInfo")!== null) {
            const locSrg = JSON.parse( localStorage.getItem("UserInfo") );
            setAuth(locSrg);
        }
    },[]);

    return [auth,setAuth];
}