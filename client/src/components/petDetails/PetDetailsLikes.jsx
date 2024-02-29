import { useContext, useEffect, useState } from "react"
import * as PetService from "../../services/petsService"
import { UserContext } from "../../contexts/userContext";
import useCheckLiked from "../../services/useCheckLiked";

export default function PetDetailsLikes(pet) {
    const [likes, setLikes] = useState(0);
    const [isLiked, setLiked] = useCheckLiked(pet.likes)

    //setLikeAmount
    useEffect(() => {
        if (pet?.likes.length === null || pet?.likes.length === 0) {
            setLikes(0)
        } else {
            setLikes(pet.likes.length);
        }
        console.log("USE EFFECT CHECKED")

    },[]);

    const likeFunction = async () => {
        const response = await PetService.changeLikes(pet);
        if(isLiked === false) {
            setLikes( likes + 1);
        } else {
            setLikes( likes - 1);
        }
        setLiked( prev=> !prev);
    }

    let currentLikes = likes;
    return (
        <div>
            <p>THIS IS THE LIKE COMPONENT</p>
            <p>LIKES: {currentLikes}</p>
            {isLiked &&
                <p>USER HAS ALREADY LIKED</p>
            }

            {!isLiked &&
                <p>USER HAS NOT LIKED</p>
            }
            <button onClick={likeFunction}>Like button</button>
        </div>
    )
};