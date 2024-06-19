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
        const checkValid = writeComment.trim();

        if (checkValid.length === 0) {
            return;
        }
        petservice.postComment(writeComment, id, userId, username);

        setTimeout(() => {
            setCommentChange((prev) => (!prev));
            setWriteComment("");
        }, 1000);
    }

    return (
        <div className={styles.commentsHolder}>
            Comment section
            {comments.length === 0 &&
                <p>Be the first to comment!</p>
            }
            <form className={styles.formDiv} onSubmit={addCommentFunc}>
                <textarea className={styles.textareaDiv}
                placeholder="Do you like this pet?"
                    value={writeComment}
                    onChange={(e) => setWriteComment(e.target.value)}
                />
                <input className={styles.submitCmnt} type="submit" />
            </form>
            {comments &&
                <div className={styles.allComs}>
                    {comments.map((com) => {
                        return (<div key={com._id}>
                            <p>{com.info}</p>
                        </div>)
                    })}
                </div>
            }
        </div>
    )
}