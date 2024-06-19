import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import * as petservice from "../../services/petsService"

export function PetDetailsComments() {
    const { id } = useParams();
    const { userId, username } = useContext(UserContext);

    const [comments, setComments] = useState([]);
    const [commentChange, setCommentChange] = useState(false);
    const [writeComment, setWriteComment] = useState("");

    useEffect(() => {

    })

    const addCommentFunc = (e) => {
        e.preventDefault();
        petservice.postComment(writeComment,id,userId, username);
    }

    return (
        <div>
            Comment section
            <form onSubmit={addCommentFunc}>
                <input
                    type="text"
                    value={writeComment}
                    onChange={(e) => setWriteComment(e.target.value)}
                />
                <input type="submit" />
            </form>
        </div>
    )
}