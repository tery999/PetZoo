import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

export function PetDetailsComments () {
    const { id } = useParams();
    const { userId, username } = useContext(UserContext);

    const [comments, setComments] = useState([]);
    const [commentChange, setCommentChange] = useState(false);

    



    return (
    <div>
        Comment section
    </div>
    )
}