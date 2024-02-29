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

    },[]);

    return [liked, setLiked];
}