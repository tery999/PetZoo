import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import * as petservice from "../../services/petsService"
import * as styles from "./PetDetailsComments.module.css"

export function PetDetailsComments() {
    const { id } = useParams();
    const { userId, username } = useContext(UserContext);

    const [comments, setComments] = useState([]);
    const [commentChange, setCommentChange] = useState(false);
    const [writeComment, setWriteComment] = useState("");


    useEffect(() => {
        petservice.getComments(id).then((res) => setComments(res));
    }, [commentChange])

    const addCommentFunc = (e) => {
        e.preventDefault();
        petservice.postComment(writeComment, id, userId, username);

        setTimeout(() => {
            setCommentChange((prev) => (!prev));
        }, 1000);
    }

    return (
        <div className={styles.commentsHolder}>
            Comment section
            <form onSubmit={addCommentFunc}>
                <input
                    type="text"
                    value={writeComment}
                    onChange={(e) => setWriteComment(e.target.value)}
                />
                <input type="submit" />
            </form>
            {comments &&
                <div>
                    {comments.map((com) => {
                        return (<div>
                            <p>{com.info}</p>
                        </div>)
                    })}
                </div>
            }
            {comments.length === 0 &&
                <p>Be the first to comment!</p>
            }
        </div>
    )
}