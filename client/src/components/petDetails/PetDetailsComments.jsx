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
    const [lockButton, setLockButton] = useState(false);


    useEffect(() => {
      petservice.getComments(id).then((res) => setComments(res));
    }, [commentChange])

    console.log("TESTING COM",comments);

    const addCommentFunc = (e) => {
        e.preventDefault();
        const checkValid = writeComment.trim();

        if (checkValid.length === 0) {
            return;
        }
        petservice.postComment(writeComment, id, userId, username);
        setLockButton(true);

        setTimeout(() => {
            setCommentChange((prev) => (!prev));
            setWriteComment("");
            setLockButton(false);
        }, 1000);
    }

    const deleteCommentFunc = (commentId) => {
        console.log("COMMENT ID", commentId)
        petservice.deleteComments(id, commentId );
        setLockButton(true);

        setTimeout(() => {
            setCommentChange((prev) => (!prev));
            setWriteComment("");
            setLockButton(false);
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
                <input className={styles.submitCmnt} disabled={lockButton} type="submit" />
            </form>
            {comments &&
                <div className={styles.allComs}>
                    {comments.map((com) => {
                        return (
                        <div className={styles.IndividualCmnt} key={com._id}>
                            <div className={styles.avatarName}>
                                <h4>{com.username}</h4>
                                <img src={com.ownerId.profileImg} alt="" />
                            </div>
                            <p>{com.info}</p>
                            {com.ownerId._id === userId &&
                                <button disabled={lockButton} onClick={()=> deleteCommentFunc(com._id)} className={styles.xDelete}>X</button>
                            }
                        </div>)
                    })}
                </div>
            }
        </div>
    )
}