import { useEffect, useState } from "react"
import * as PetService from "../../services/petsService"

export default function PetDetailsLikes (pet) {
    debugger;
    const [likes, setLikes] = useState(0);

    useEffect ( ()=> {
        if (pet?.likes.length !== null || pet?.likes.length === 0) {
            setLikes(0)
        } else {
            setLikes(currentLikes);
        }
    },[]);

    let currentLikes = likes;

    const likeFunction = async () => {
        await PetService.changeLikes(pet);
    }

    return (
    <div>
        <p>THIS IS THE LIKE COMPONENT</p>
        <p>LIKES: {currentLikes}</p>
        <button onClick={likeFunction}>Like button</button>
    </div>
    )
};