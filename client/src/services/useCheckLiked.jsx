import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/userContext";
export default function useCheckLiked(likes) {
    const {userId} = useContext(UserContext);
    const [liked, setLiked] = useState(false);

    useEffect( ()=> {
        if ( likes.includes(userId)) {
            setLiked(true);
        } else {
            setLiked(false);
        }

        // console.log("CHECK LIKED USE EFFECT RUNNING");
    },[]);

    return [liked, setLiked];
}